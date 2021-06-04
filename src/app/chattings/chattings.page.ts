import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';



@Component({
  selector: 'app-chattings',
  templateUrl: './chattings.page.html',
  styleUrls: ['./chattings.page.scss'],
})
export class ChattingsPage {

  speak: string = " ";
  texts: string = "";
  constructor(private tts: TextToSpeech, private speechRecognition: SpeechRecognition) {


  }

  messages = [
    {
      user: 'azam',
      createdAt: 1554090856000,
      msg: 'hi dear'
    },
    {
      user: 'shahreen',
      createdAt: 1554090956000,
      msg: 'hi woking here'
    },
    {
      user: 'mahi',
      createdAt: 1554091056000,
      msg: 'hellooo'
    },
  ];

  currentUser = 'mahi';
  newMsg = '';
  fieldTextType: boolean;
  @ViewChild(IonContent) content: IonContent


  sendMessage() {
    this.fieldTextType == !this.newMsg;
    if (this.newMsg == "") {
      console.log(this.start_Listening());

    } else {
      this.messages.push({
        user: 'mahi',
        createdAt: new Date().getTime(),
        msg: this.newMsg
      });
      this.newMsg = '';

      setTimeout(() => {
        this.content.scrollToBottom(200);

      });
    }
  }
  start_speak() {
    this.tts.speak(this.texts)
      .then(() => {
        console.log('success')
      })

      .catch((reason) => {
        console.log(reason)
      })
  }
  start_Listening() {
    // taking permission
    console.log("hiiiiiiiiii");

    this.speechRecognition.hasPermission()
      .then((hasPermisssion: boolean) => {
        if (!hasPermisssion) {
          this.speechRecognition.requestPermission()
            .then(
              () => console.log("Granted"),
              () => console.log("Denied"),

            )
        }
      });
    // start listening
    this.speechRecognition.startListening()
      .subscribe(
        (matches: Array<string>) => {
          console.log(matches);

          this.texts = matches[0];
          
        }
      )
  }



}



