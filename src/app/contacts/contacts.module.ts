import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactsPageRoutingModule } from './contacts-routing.module';

import { ContactsPage } from './contacts.page';

import { CallNumber } from '@ionic-native/call-number/ngx';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactsPageRoutingModule,
  
  ],
  providers:[Contacts,CallNumber],
  declarations: [ContactsPage]
})
export class ContactsPageModule {}
