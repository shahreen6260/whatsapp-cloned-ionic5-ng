import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';




@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  contact: any;

  constructor(public contacts: Contacts, public callNumber: CallNumber) { }

  ngOnInit() {
  }
  Call() {
    this.contacts.pickContact().then((contact) => {
      var contactNumber = contact.phoneNumber[0].value;
      //now calling
      this.callNumber.callNumber(contactNumber, true).then((data) => {
        alert(JSON.stringify(data))
      }, (err) => {
        alert(JSON.stringify(err));
      });
    }, (err) => {
      alert(JSON.stringify(err));
    })
  }

}
