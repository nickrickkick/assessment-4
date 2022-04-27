const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const {
  getQuotes,
  createQuotes,
  updateQuotes,
} = require('./controller')

const fortunes = [
  "A beautiful, smart, and loving person will be coming into your life.",
  "Competence like yours is underrated.",
  "For the things we have to learn before we can do them, we learn by doing them.",
  "In order to take, one must first give.",
  "Mans mind, once stretched by a new idea, never regains its original dimensions."
];

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];
  console.log(randomCompliment);
  res.status(200).send(randomCompliment);
  
});

app.get('/api/fortune', (req, res) => {
  

let randomIndex = Math.floor(Math.random() * fortunes.length);
let randomFortune = fortunes[randomIndex];

res.status(200).send(randomFortune);
});

app.delete("/api/fortune/:id", (req, res) => {
  let index = req.params.id;
  console.log(index);
  fortunes.splice(index, 1);
  res.status(200).send(fortunes);            
})

app.put("/api/fortune/:id", (req, res) => {
  let  index  = req.params.id;
  let { text } = req.body;
  fortunes[index] = text;
  res.status(200).send(fortunes);
})
// this is the need put that will change one of the quotes text
app.put("/api/quotes/:id", updateQuotes);


app.get('/api/quotes', getQuotes);
app.post('/api/quotes', createQuotes);

app.listen(4000, () => console.log("Server running on 4000"));
