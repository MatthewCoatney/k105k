import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';

import { ActivityCategory } from '../activity.data';
import { ActivityService } from '../activity.service';


@Component({
  selector: 'app-activities-filter-modal',
  templateUrl: './activities-filter.modal.html',
  styleUrls: ['./activities-filter.modal.scss']
})
export class ActivitiesFilterModalComponent implements OnInit {
  @Input() currentSelectedActivities: Array<ActivityCategory>;

  filterActivitiesForm: UntypedFormGroup;

  activityCategories: Array<ActivityCategory>;

  constructor(
    private activityService: ActivityService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.activityCategories = this.activityService.getActivityCategories();

    const activitiesControls = {};

    this.currentSelectedActivities.forEach(
      (c: { name: string; title: string; value: boolean }) => {
        activitiesControls[c.name] = new UntypedFormControl(c.value);
      }
    );

    this.filterActivitiesForm = new UntypedFormGroup({
      activities: new UntypedFormGroup(activitiesControls),
    });
  }

  dismissModal() {
    this.modalController.dismiss(undefined, undefined, undefined);
  }

  selectAllFilters(): void {
    const activities = this.filterActivitiesForm.get('activities') as UntypedFormGroup;

    for (const field in activities.controls) {
      activities.get(field).setValue(true);
    }
  }

  deselectAllFilters(): void {
    const activities = this.filterActivitiesForm.get('activities') as UntypedFormGroup;

    for (const field in activities.controls) {
      activities.get(field).setValue(false);
    }
  }

  applyFilters(): void {
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

    this.modalController.dismiss(this.activityCategories);
  }

  filterActivities(values): void {
    console.log(values);
  }
}
