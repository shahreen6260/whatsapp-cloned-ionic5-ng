import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {
  private list1: any;

  constructor() { }

  ngOnInit() {
    this.list1 = [{
      icon:"key-outline",
      account: "Accounts",
      status: "Privacy,security,change number"
    },
    {
      icon:"chatbox-outline",
      account: "chats",
      status: "Theme,wallpapers,chat history"
    },
    {
      icon:"notifications-outline",
      account: "Notifications",
      status: "Message,group & call tones"
    },
    {
      icon:"cloud-outline",
      account: "Storage and data",
      status: "Network usage,auto-download"
    },
    {
      icon:"help-circle-outline",
      account: "Help",
      status: "Help centre,contact us,privacy policy"
    },

    ]
  }

}
