export class ContactItem {
  name: string;
  picture: string;
  email: string;
  birthday: Date;
  location: {
    city: string;
    map: string;
    state: string;
  }
}

export class ContactsGroup {
  value: string;
  label: string;
  entries: Array<ContactItem>;
}

export const contacts = {
  albert: {
    name: 'Albert Hawkins',
    picture: './assets/sample-images/notifications/100x100Notification1.jpg',
    email: 'alhawk@gmail.com',
    birthday: new Date('02/23/1998'),
    location: {
      city: 'Los Angeles',
      map: 'los-angeles.svg',
      state: 'CA'
    }
  },
  anna: {
    name: 'Anna Chiara',
    picture: './assets/sample-images/notifications/100x100Notification3.jpg',
    email: 'achiara@gmail.com',
    birthday: new Date('06/02/1995'),
    location: {
      city: 'Boca Chica',
      map: 'boca-chica.svg',
      state: 'TX'
    }
  },
  audrey: {
    name: 'Audrey Snow',
    picture: './assets/sample-images/notifications/100x100Notification5.jpg',
    email: 'asnow@gmail.com',
    birthday: new Date('09/30/1990'),
    location: {
      city: 'Los Angeles',
      map: 'los-angeles.svg',
      state: 'CA'
    }
  },
  brett: {
    name: 'Brett Webb',
    picture: './assets/sample-images/notifications/100x100Notification4.jpg',
    email: 'bwebb@gmail.com',
    birthday: new Date('04/13/1989'),
    location: {
      city: 'Boca Chica',
      map: 'boca-chica.svg',
      state: 'TX'
    }
  },
  brian: {
    name: 'Brian Buff',
    picture: './assets/sample-images/notifications/100x100Notification6.jpg',
    email: 'bbuff@gmail.com',
    birthday: new Date('08/20/1959'),
    location: {
      city: 'San Francisco',
      map: 'san-francisco.svg',
      state: 'CA'
    }
  },
  bonnie: {
    name: 'Bonnie Hearts',
    picture: './assets/sample-images/notifications/100x100Notification7.jpg',
    email: 'bhearts@gmail.com',
    birthday: new Date('01/19/1975'),
    location: {
      city: 'Los Angeles',
      map: 'los-angeles.svg',
      state: 'CA'
    }
  },
  emma: {
    name: 'Emma Richards',
    picture: './assets/sample-images/notifications/100x100Notification2.jpg',
    email: 'emmrich@gmail.com',
    birthday: new Date('07/22/1986'),
    location: {
      city: 'San Francisco',
      map: 'san-francisco.svg',
      state: 'CA'
    }
  }
};
