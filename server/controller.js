const quotes = require('./db.json');

let idNum = 3;

const quote = [
    {
        "ticket": 1,
        "quote": "The oldest and strongest emotion of mankind is fear, and the oldest and strongest kind of fear is fear of the unknown.",
        "author": "H.P. Lovecraft"
      },
      {
        "ticket": 2,
        "quote": "Those who dream by day are cognizant of many things which escape those who dream only by night.",
        "author": "Edgar Allan Poe,"
      }
  ];

module.exports = {
    getQuotes: (req, res) => {
        res.status(200).send(quotes);
    },
    createQuotes: (req, res) => {
        let {quote, author} = req.body;
        let newQuote = {
            ticket: idNum,
            quote,
            author
        };
        quotes.push(newQuote);
        idNum++;  
       // console.log(quotes);
        res.status(200).send(quotes);
    },
    // this is the new add to the code. will change the quote to be something new.
    updateQuotes: (req, res) => {
        let  changeTicket  = req.params.id;
        let { text } = req.body;
        console.log(text);
        //let changeQuote = quote.find(ticket => quote.ticket === changeTicket)
        //console.log(changeQuote);
        quote[changeTicket - 1].quote = text;
        //console.log(changeQuote);
        console.log(quote[changeTicket - 1]);
        //quotes[changeTicket].quote = text;
        res.status(200).send(quote);
    }
}