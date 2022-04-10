const quotes = require('./db.json');

let idNum = 3;

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
    }
}