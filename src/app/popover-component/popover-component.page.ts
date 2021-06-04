import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-component',
  templateUrl: './popover-component.page.html',
  styleUrls: ['./popover-component.page.scss'],
})
export class PopoverComponentPage implements OnInit {

  constructor( private popoverController: PopoverController,
    private router:Router) { }

  ngOnInit() {
  }
  close(){
    this.popoverController.dismiss();
  }
  myProfile(){
    this.router.navigate(['/my-profile'])
  }
}
