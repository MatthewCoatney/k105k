import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

import { ContactsService } from './contacts.service';
import { ContactsGroup } from './contacts.data';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./styles/contacts.page.scss']
})
export class ContactsPage {
  contactsFiltersForm: UntypedFormGroup;

  currentContactsFilter: string;

  filteredContacts: Array<ContactsGroup>;

  constructor(private contactsService: ContactsService) {
    this.contactsFiltersForm = new UntypedFormGroup({
      contactsFilter: new UntypedFormControl('birthday', Validators.required),
    });

    // ? Check what template we should use to render the contacts
    this.currentContactsFilter = this.contactsFiltersForm.get('contactsFilter').value;

    this.updateFilteredContacts(this.currentContactsFilter);

    // ? Start listening for changes in the form
    this.onChanges();
  }

  onChanges(): void {
    this.contactsFiltersForm
      .get('contactsFilter')
      .valueChanges.subscribe((contactsFilter) => {
        this.currentContactsFilter = contactsFilter;

        this.updateFilteredContacts(contactsFilter);
      });
  }

  private updateFilteredContacts(contactsFilter: string): void {
    switch (contactsFilter) {
      case 'name':
        this.filteredContacts = this.contactsService.getContactsByName();

        break;
      case 'birthday':
        this.filteredContacts = this.contactsService.getContactsByBirthday();

        break;
      case 'location':
        this.filteredContacts = this.contactsService.getContactsByLocation();

        break;
    }
  }

  onSubmit(values): void {
    console.log(values);
  }
}
