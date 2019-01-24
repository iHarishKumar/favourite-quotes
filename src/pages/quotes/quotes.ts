import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';
import { Quote } from "../../data/quote.interface"
import { QuotesService } from '../../services/quotes';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{

  quoteGroup: {category: string, quotes: Quote[], icon: string}[]

  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private quotesService: QuotesService){}

  ngOnInit(){
    this.quoteGroup = this.navParams.data
  }
  // ionViewDidLoad(){
  //   this.quoteGroup = this.navParams.data
  // Add elvis operator (?) in template to use this approach
  // }

  onAddToFavourites(selectedQuote : Quote){

    const alert = this.alertCtrl.create({
      title : 'Add Quote',
      subTitle : 'Are you sure?',
      message : 'Are you sure you want to add the quote?',
      buttons : [{
        text : 'Yes, go ahead!',
        handler : () => {
          console.log('OK')
          this.quotesService.addQuoteToFavourite(selectedQuote )
        },
      },{
        text : 'No, I changed my mind!',
        role : 'cancel',
        handler : () => {
          console.log('Cancelled')
        }
      }]
    })

    alert.present()
    console.log("Qoute added")
  }

  onRemoveFromFavourites(quote: Quote){
    this.quotesService.removeQuoteFromFavourites(quote)
  }

  isFavourite(quote: Quote){
    return this.quotesService.isFavouriteQuote(quote)
  }
}