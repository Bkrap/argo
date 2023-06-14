// const express = require('express');
// const app = express();
// const YOUR_STRIPE_SECRET_KEY = 'YOUR_STRIPE_SECRET_KEY';

// app.use(express.json());

// app.post('/create-payment-intent', async (req, res) => {
//   try {
//     const { membershipLevel } = req.body; // Retrieve membership level from the request body

//     // Calculate the amount based on the selected membership level
//     let amount = 0; // Set the amount based on your pricing logic

//     // Create a payment intent
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: amount,
//       currency: 'usd',
//       metadata: {
//         membershipLevel: membershipLevel
//       }
//     });

//     // Return the client secret to the client-side JavaScript
//     res.send({ clientSecret: paymentIntent.client_secret });
//   } catch (error) {
//     // Handle error scenarios
//     res.status(500).send({ error: error.message });
//   }
// });

// // Start the server
// const port = 3000; // Specify the desired port number
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });