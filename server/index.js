const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get('/api/fortune', (req, res) => {
  const fortunes = [
    "A beautiful, smart, and loving person will be coming into your life.",
    "Competence like yours is underrated.",
    "For the things we have to learn before we can do them, we learn by doing them.",
    "In order to take, one must first give.",
    "Mans mind, once stretched by a new idea, never regains its original dimensions."
];

let randomIndex = Math.floor(Math.random() * fortunes.length);
let randomFortune = fortunes[randomIndex];

res.status(200).send(randomFortune);
})

app.listen(4000, () => console.log("Server running on 4000"));
