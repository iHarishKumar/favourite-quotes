import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  person: string
  text: string

  //ViewController gives acces to control the modal pages created and which are currently active.
  constructor(
    private viewCtrl: ViewController,
    private navParams: NavParams){}

  ionViewDidLoad(){
    this.person = this.navParams.get("person")
    this.text = this.navParams.get("text")
    console.log(this.navParams)
  }


  onClose(remove = false){
    this.viewCtrl.dismiss(remove)
  }
}
