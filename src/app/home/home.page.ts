import { Component, ElementRef, ViewChild } from '@angular/core';
import { AnimationController, IonSlides, PopoverController } from '@ionic/angular';
import { PopoverComponentPage } from '../popover-component/popover-component.page';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private list: any;
  // private details: string = "CHATS";
  
  private segmentList: Array<string> = ["CHATS", 'STATUS', 'CALL']
  selectedSegment: string;
  base64Image:string;

  @ViewChild("header", { read: ElementRef, static: true })
  header: ElementRef;
  @ViewChild("fab", { read: ElementRef, static: true })
  fab: ElementRef;
    
 @ViewChild('slide') slide: IonSlides;
  
  
  constructor(private PopoverController: PopoverController, private animationCtrl: AnimationController,private camera:Camera) { }
  headerFunction() {
    const animationHeader = this.animationCtrl.create()
      .addElement(this.header.nativeElement)
      .duration(1000)
      .iterations(1)
      .fromTo('opacity', '0', '1')
    animationHeader.play();
  }
  fabAnimationFunction() {
    const fabAnimation = this.animationCtrl.create()
      .addElement(this.fab.nativeElement)
      .fill('none')
      .duration(4000)
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '0.5' },
        { offset: 0.5, transform: 'scale(0.8)', opacity: '0' },
        { offset: 0.5, transform: 'scale(0.8)', opacity: '0' }
      ]);
    fabAnimation.play();
  }
  ngOnInit() {
    this.list = [
      {
        name: "Shahreen",
        img: "assets/Profile.JPG",
        message: "Hi",
        time: "10:30 am"
      },

      {
        name: "Azam",
        img: "assets/azamPic.jpg",
        message: "Bye",
        time: "11:16 am"
      },
      {
        name: "Neeha",
        img: "assets/nehaPic.jpg",
        message: "Good Morning",
        time: "12:00 pm"
      },
      {
        name: "Sourabh",
        img: "assets/sourabhPic.jpg",
        message: "a6a",
        time: "Yesterday"
      },
      {
        name: "Hema",
        img: "assets/hemaPic.jpg",
        message: "Listen",
        time: "Yesterday"
      },
      {
        name: "Nazma",
        img: "assets/nazmaPic.jpg",
        message: "hmmmmmm",
        time: "Yesterday"
      },
      {
        name: "Rohan",
        img: "assets/rohanPic.jpg",
        message: "nope",
        time: "Yesterday"
      },
      {
        name: "Shrinath",
        img: "assets/rohanPic.jpg",
        message: "?",
        time: "10:35 am"
      },
    ]
  }

  async popover(event) {
    const popover = await this.PopoverController.create({
      component: PopoverComponentPage,
      event
    })
    return await popover.present();
  }
  segmentChanged(ev: any, index: any) {
    // console.log('Segment changed', ev, index);
  }
 
  _segmentSelected(item: string, index: number) {
    // console.log(item, index);
    this.slide.slideTo(index)
  }
 
  _ionSlideDidChange(event: any) {
    // console.log(event)
    this.slide.getActiveIndex().then(index => {
      // console.log(index)
      this.selectedSegment = this.segmentList[index];
    })
  }

  openCamera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }
}




