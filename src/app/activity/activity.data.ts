export enum ActivityType {
  MISSED_CALL = "missed_call",
  SHARED_FILE = "shared_file",
  SOCIAL_INTERACTION = "social_interaction",
  EVENT = "event",
  CHANNEL_INVITE = "channel_invite"
};

export class ActivityCategory {
  name: ActivityType;
  title: string;
  value: boolean;
};

export class Activity {
  type: ActivityType;
  title: string;
};

export class ActivitiesGroup {
  value: string;
  label: string;
  entries: Array<Activity>;
};


// * Specific activities


export class MissedCallActivity extends Activity {
  type: ActivityType.MISSED_CALL;
  picture: string;
  title: string;
  caller: string;
};

export class FileSharedActivity extends Activity {
  type: ActivityType.SHARED_FILE;
  picture: string;
  title: string;
  author: string;
  file: string;
};

export enum EventGuestStatus {
  YES = "yes",
  NO = "no",
  MAYBE = "maybe"
};

export class EventGuest {
  name: string;
  picture: string;
  confirmation: EventGuestStatus;
};

export class EventActivity extends Activity {
  type: ActivityType.EVENT;
  title: string;
  description: string;
  date: Date;
  // ! O string?
  // '03/13/2022 16:00',
  guests: Array<EventGuest>;
};

export class SocialInteractionActivity extends Activity {
  type: ActivityType.SOCIAL_INTERACTION;
  picture: string;
  title: string;
  follower: string;
};

export class ChannelInviteActivity extends Activity {
  type: ActivityType.CHANNEL_INVITE;
  picture: string;
  title: string;
  host: string
  channel: string;
};


// * Activities Data


export const activityCategories: Array<ActivityCategory> = [
  {
    name: ActivityType.MISSED_CALL,
    title: 'Missed Calls',
    value: false
  },
  {
    name: ActivityType.SOCIAL_INTERACTION,
    title: 'Social Interactions',
    value: true
  },
  {
    name: ActivityType.EVENT,
    title: 'Events',
    value: true
  },
  {
    name: ActivityType.CHANNEL_INVITE,
    title: 'Channel Invites',
    value: true
  },
  {
    name: ActivityType.SHARED_FILE,
    title: 'File Sharing',
    value: true
  },
];

export const missedCallActivities: Array<MissedCallActivity> = [
  {
    type: ActivityType.MISSED_CALL,
    picture: './assets/sample-images/notifications/100x100Notification1.jpg',
    title: 'Missed call from',
    caller: 'Fred Johnson'
  }
];

export const socialInteractionActivities: Array<SocialInteractionActivity> = [
  {
    type: ActivityType.SOCIAL_INTERACTION,
    picture: './assets/sample-images/notifications/100x100Notification3.jpg',
    title: 'started following you',
    follower: 'Margaret Robby'
  }
];

export const eventActivities: Array<EventActivity> = [
  {
    type: ActivityType.EVENT,
    title: 'Quarter overview',
    description: 'Quarter revenue discussion',
    date: new Date('03/13/2022 16:00'),
    guests: [
      {
        name: 'Juan',
        picture: './assets/sample-images/notifications/100x100Notification1.jpg',
        confirmation: EventGuestStatus.YES
      },
      {
        name: 'Pepe',
        picture: './assets/sample-images/notifications/100x100Notification2.jpg',
        confirmation: EventGuestStatus.YES
      },
      {
        name: 'Mateo',
        picture: './assets/sample-images/notifications/100x100Notification3.jpg',
        confirmation: EventGuestStatus.YES
      },
      {
        name: 'Juan',
        picture: './assets/sample-images/notifications/100x100Notification5.jpg',
        confirmation: EventGuestStatus.YES
      },
      {
        name: 'Pepe',
        picture: './assets/sample-images/notifications/100x100Notification4.jpg',
        confirmation: EventGuestStatus.YES
      }
    ]
  },
  {
    type: ActivityType.EVENT,
    title: 'Marketing team meeting',
    description: 'Develop our content marketing strategy for the next year',
    date: new Date('02/21/2022 10:00'),
    guests: [
      {
        name: 'Juan',
        picture: './assets/sample-images/notifications/100x100Notification5.jpg',
        confirmation: EventGuestStatus.YES
      },
      {
        name: 'Pepe',
        picture: './assets/sample-images/notifications/100x100Notification2.jpg',
        confirmation: EventGuestStatus.YES
      },
      {
        name: 'Mateo',
        picture: './assets/sample-images/notifications/100x100Notification4.jpg',
        confirmation: EventGuestStatus.YES
      },
      {
        name: 'Pepe',
        picture: './assets/sample-images/notifications/100x100Notification3.jpg',
        confirmation: EventGuestStatus.YES
      },
      {
        name: 'Juan',
        picture: './assets/sample-images/notifications/100x100Notification1.jpg',
        confirmation: EventGuestStatus.YES
      },
      {
        name: 'Mateo',
        picture: './assets/sample-images/notifications/100x100Notification6.jpg',
        confirmation: EventGuestStatus.YES
      }
    ]
  },
  {
    type: ActivityType.EVENT,
    title: 'Sprint review meeting',
    description: 'ClientX sprint planning and discussion',
    date: new Date('01/19/2022 09:00'),
    guests: [
      {
        name: 'Mateo',
        picture: './assets/sample-images/notifications/100x100Notification3.jpg',
        confirmation: EventGuestStatus.YES
      },
      {
        name: 'Pepe',
        picture: './assets/sample-images/notifications/100x100Notification2.jpg',
        confirmation: EventGuestStatus.YES
      },
      {
        name: 'Juan',
        picture: './assets/sample-images/notifications/100x100Notification1.jpg',
        confirmation: EventGuestStatus.YES
      }
    ]
  }
];

export const channelInviteActivities: Array<ChannelInviteActivity> = [
  {
    type: ActivityType.CHANNEL_INVITE,
    picture: './assets/sample-images/notifications/100x100Notification5.jpg',
    title: 'invited you to join a channel',
    host: 'Mindy Graham',
    channel: 'Client X planning'
  }
];

export const fileSharingActivities: Array<FileSharedActivity> = [
  {
    type: ActivityType.SHARED_FILE,
    picture: './assets/sample-images/notifications/100x100Notification4.jpg',
    title: 'uploaded a new file',
    author: 'Mathias Jerusalmi',
    file: 'icons.svg'
  }
];
