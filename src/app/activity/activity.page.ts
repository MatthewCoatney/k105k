import { Component } from '@angular/core';
import { AbstractControl, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { IonRouterOutlet, ModalController } from '@ionic/angular';

import { Subscription, throttleTime } from 'rxjs';

import { ActivitiesFilterModalComponent } from './activities-filter-modal/activities-filter.modal';
import { ActivitiesGroup, ActivityCategory, ActivityType } from './activity.data';
import { ActivityService } from './activity.service';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./styles/activity.page.scss']
})
export class ActivityPage {
  filterActivitiesForm: UntypedFormGroup;

  activitiesChangesSubscription: Subscription;

  // ? To use enums in the template
  ActivityType = ActivityType;

  notificationsByDate: Array<ActivitiesGroup>;

  displayedNotificationsByDate: Array<ActivitiesGroup> = [];

  activityCategories: Array<ActivityCategory>;

  selectedActivityTypes: Array<string> = [];

  constructor(
    private activityService: ActivityService,
    private routerOutlet: IonRouterOutlet,
    public modalController: ModalController
  ) {
    const activitiesControls = {};

    this.notificationsByDate = this.activityService.getNotificationsByDate();
    this.activityCategories = this.activityService.getActivityCategories();

    this.activityCategories.forEach(
      (c: { name: string; title: string; value: boolean }) => {
        activitiesControls[c.name] = new UntypedFormControl(c.value);
      }
    );

    this.filterActivitiesForm = new UntypedFormGroup({
      activities: new UntypedFormGroup(activitiesControls),
    });

    // ? Check what activity we should display
    this.updateFilteredActivities(this.filterActivitiesForm.get('activities'));

    // ? Start listening for changes in the form
    this.onChanges();
  }

  async presentActivitiesFilterModal() {
    const activitiesFilterControlGroup = this.filterActivitiesForm.get('activities') as UntypedFormGroup;

    for (const activityControl in activitiesFilterControlGroup.controls) {
      this.activityCategories.map(
        (activity: { name: string; title: string; value: boolean }) => {
          if (activity.name === activityControl) {
            activity.value = activitiesFilterControlGroup.get(activityControl).value;
          }
        }
      );
    }

    const modal = await this.modalController.create({
      component: ActivitiesFilterModalComponent,
      cssClass: 'activities-filter-modal',
      componentProps: {
        currentSelectedActivities: this.activityCategories
      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });

    modal.onDidDismiss().then((selectedActivities) => {
      if (selectedActivities?.data && selectedActivities.data.length > 0) {
        this.activityCategories = selectedActivities.data;

        for (const activityControl in activitiesFilterControlGroup.controls) {
          this.activityCategories.map(
            (activity: { name: string; title: string; value: boolean }) => {
              if (activity.name === activityControl && activity.value !== activitiesFilterControlGroup.get(activityControl).value) {
                activitiesFilterControlGroup.get(activityControl).setValue(activity.value);
              }
            }
          );
        }
      } else {
        console.log('dismissed modal');
      }
    });

    return await modal.present();
  }

  onChanges(): void {
    const activitiesControlChanges = this.filterActivitiesForm.get('activities').valueChanges;

    // ? https://rxjs.dev/api/operators/throttleTime
    this.activitiesChangesSubscription = activitiesControlChanges
      .pipe(throttleTime(500, undefined, { leading: false, trailing: true }))
      .subscribe((activitiesFilter) => {
        // ? Check what activity we should display
        this.updateFilteredActivities(this.filterActivitiesForm.get('activities'));
      });
  }

  clearActivities(notificationsGroupId: string): void {
    const notificationsGroup = this.displayedNotificationsByDate.filter(
      (notificationGroup: {
        value: string;
        label: string;
        entries: Array<any>;
      }) => {
        return notificationGroup.value === notificationsGroupId;
      }
    );

    notificationsGroup[0].entries = [];
  }

  // ? This method should also update the amount of selected categories
  updateFilteredActivities(selectedActivitiesControl: AbstractControl): void {
    if (selectedActivitiesControl.value) {
      this.selectedActivityTypes = Object.keys(selectedActivitiesControl.value).filter((activityType, index) => {
        return selectedActivitiesControl.value[activityType] === true;
      });

      this.displayedNotificationsByDate = this.notificationsByDate.map(
        (notificationGroup: {
          value: string;
          label: string;
          entries: Array<any>;
        }) => {
          const filteredNotifications = notificationGroup.entries.filter(
            (notification: { type: string; title: string }) => {
              return this.selectedActivityTypes.includes(notification.type);
            }
          );

          return { ...notificationGroup, entries: filteredNotifications };
        }
      );
    }
  }

  onSubmit(values): void {
    console.log(values);
  }
}
