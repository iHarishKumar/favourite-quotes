import { Quote } from "../data/quote.interface";

export class QuotesService{
    private favouriteQuote: Quote[] = [];

    addQuoteToFavourite(quote: Quote){
        this.favouriteQuote.push(quote)
        //console.log(this.favouriteQuote)
    }

    removeQuoteFromFavourites(quote: Quote){
        const position = this.favouriteQuote.findIndex((quoteEle : Quote)=>{
            return quoteEle.id == quote.id
        })
        this.favouriteQuote.splice(position, 1)
    }

    getFavouriteQuotes(){
        return this.favouriteQuote.slice()
        // This is because, JS passes value by reference. So, we don't want the other part of code to modify
        // this value, so splice() the array mean send the copy of the array to the function which is calling
        // this method.
    }

    isFavouriteQuote(quote: Quote){
        return this.favouriteQuote.find( (quoteEl: Quote) => {
            return quoteEl.id == quote.id
        })
    }
}