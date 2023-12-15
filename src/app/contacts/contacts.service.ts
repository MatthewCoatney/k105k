import { Injectable } from '@angular/core';

import { contacts, ContactsGroup } from './contacts.data';


@Injectable()
export class ContactsService {
  constructor() {}

  public getContactsByName(): Array<ContactsGroup> {
    const contactsDataByName: Array<ContactsGroup> = [
      {
        value: 'a',
        label: 'A',
        entries: [
          contacts.albert,
          contacts.anna,
          contacts.audrey
        ]
      },
      {
        value: 'b',
        label: 'B',
        entries: [
          contacts.brett,
          contacts.brian,
          contacts.bonnie
        ]
      },
      {
        value: 'e',
        label: 'E',
        entries: [
          contacts.emma
        ]
      }
    ];

    return contactsDataByName;
  }

  public getContactsByBirthday(): Array<ContactsGroup> {
    const contactsDataByBirthday: Array<ContactsGroup> = [
      {
        value: 'january',
        label: 'JANUARY',
        entries: [
          contacts.bonnie
        ]
      },
      {
        value: 'february',
        label: 'FEBRUARY',
        entries: [
          contacts.albert
        ]
      },
      {
        value: 'april',
        label: 'APRIL',
        entries: [
          contacts.brett
        ]
      },
      {
        value: 'june',
        label: 'JUNE',
        entries: [
          contacts.anna
        ]
      },
      {
        value: 'july',
        label: 'JULY',
        entries: [
          contacts.emma
        ]
      },
      {
        value: 'august',
        label: 'AUGUST',
        entries: [
          contacts.brian
        ]
      },
      {
        value: 'september',
        label: 'SEPTEMBER',
        entries: [
          contacts.audrey
        ]
      }
    ];

    return contactsDataByBirthday;
  }

  public getContactsByLocation(): Array<ContactsGroup> {
    const contactsDataByLocation: Array<ContactsGroup> = [
      {
        value: 'california',
        label: 'CALIFORNIA',
        entries: [
          contacts.albert,
          contacts.audrey,
          contacts.bonnie,
          contacts.emma,
          contacts.brian
        ]
      },
      {
        value: 'texas',
        label: 'TEXAS',
        entries: [
          contacts.brett,
          contacts.anna
        ]
      }
    ];

    return contactsDataByLocation;
  }
}
