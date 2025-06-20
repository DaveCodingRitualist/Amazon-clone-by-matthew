const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);


// -API

// -APP Config
const app = express();

// -Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// -API Routes
app.get("/", (req, res) => res.status(200).send("Hello World!"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment request received ", total);
  
  const paymentIntent = await stripe.paymentIntent.create({
    amount: total,
    currency: "usd",
  });
    // If okay created
    res.status(201).send({clientSecret: paymentIntent.client_secret }); 

});

// Listen Commands
exports.api = functions.https.onRequest(app);

// const {onRequest} = require("firebase-functions/v2/https"); 1st initial code
// const logger = require("firebase-functions/logger"); 1st initial code
