import { Component } from '@angular/core';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';
import { ModalController } from 'ionic-angular';
import { QuotePage } from '../quote/quote';
import { SettingsService } from '../../services/settings';


@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage {
  quotes: Quote[]

  constructor(
    private quoteService: QuotesService,
    private modalCtrl: ModalController,
    private settingsService: SettingsService){}

  ionViewWillEnter(){
    this.quotes = this.quoteService.getFavouriteQuotes()
  }

  onViewQuote(quote: Quote){
    const modal = this.modalCtrl.create(QuotePage, quote)
    modal.present() 
    
    modal.onDidDismiss((remove:boolean) => {

      if(remove){
        this.onRemoveFromFavourites(quote)
      }

    })
  }

  onRemoveFromFavourites(quote: Quote){
    console.log("here ", quote)
    this.quoteService.removeQuoteFromFavourites(quote)
    this.quotes = this.quoteService.getFavouriteQuotes()
  }

  getBackground(){
    return this.settingsService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackgroud'
  }

  isAltBackground(){
    return this.settingsService.isAltBackground()
  }
}
