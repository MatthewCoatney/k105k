import { Injectable } from '@angular/core';

import { ActivitiesGroup, activityCategories, ActivityCategory, channelInviteActivities, eventActivities, fileSharingActivities, missedCallActivities, socialInteractionActivities } from './activity.data';


@Injectable()
export class ActivityService {
  constructor() {}

  public getActivityCategories(): Array<ActivityCategory> {
    return activityCategories;
  }

  public getNotificationsByDate(): Array<ActivitiesGroup> {
    const notificationsByDate: Array<ActivitiesGroup> = [
      {
        value: 'today',
        label: 'Today',
        entries: [
          missedCallActivities[0],
          fileSharingActivities[0],
          eventActivities[0]
        ]
      },
      {
        value: 'this_week',
        label: 'This week',
        entries: [
          socialInteractionActivities[0],
          eventActivities[1]
        ]
      },
      {
        value: 'earlier',
        label: 'Earlier',
        entries: [
          channelInviteActivities[0],
          eventActivities[2]
        ]
      }
    ];

    return notificationsByDate;
  }
}
