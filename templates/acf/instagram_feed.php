<!-- 
<script>
    document.addEventListener('DOMContentLoaded', function() {
    var stripe = Stripe('pk_test_51NIeNYE2WfichD2etenrn8SnL2DyLYYgpaC8GZMMfqDQ27r83gFsm5vWjyzz2w5PDiVjS2oeNUrLIM9YpEJkC42900ybZHM3W4');
    // const stripe = require('stripe')('sk_test_51NIeNYE2WfichD2efdEHwnNptsF9EGdmCqMeIvNrGFkjYog61FrWqJf5C6RlUUhH5DXLj4JbU6OYHdebGeSJKnip004TgKljuW');
    /********************************************************** */

    //     app.post('/create-payment-intent', async (req, res) => {
    // try {
    //     const { membershipLevel } = req.body; // Retrieve membership level from the request body

    //     // Calculate the amount based on the selected membership level
    //     let amount = 0; // Set the amount based on your pricing logic

    //     // Create a payment intent
    //     const paymentIntent = await stripe.paymentIntents.create({
    //     amount: amount,
    //     currency: 'usd',
    //     metadata: {
    //         membershipLevel: membershipLevel
    //     }
    //     });

    //     // Return the client secret to the client-side JavaScript
    //     res.send({ clientSecret: paymentIntent.client_secret });
    // } catch (error) {
    //     // Handle error scenarios
    //     res.status(500).send({ error: error.message });
    // }
    // });

    

    /********************************************************** */

    var form = document.getElementById('payment-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  var membershipLevel = 'your_selected_membership_level'; // Replace with actual membership level
  var cardNumber = document.getElementById('card-number').value;
  var cardExpiry = document.getElementById('card-expiry').value;
  var cardCVC = document.getElementById('card-cvc').value;

  fetch('/create-payment-intent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ membershipLevel: membershipLevel })
  })
  .then(function(response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Request failed with status code ' + response.status);
    }
  })
  .then(function(data) {
    var clientSecret = data.clientSecret;

    // Process the payment using the retrieved client secret
    stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: {
          number: cardNumber,
          exp_month: cardExpiry.split('/')[0],
          exp_year: cardExpiry.split('/')[1],
          cvc: cardCVC
        }
      }
    })
    .then(function(result) {
      if (result.error) {
        // Handle payment error
      } else {
        // Payment successful, process result.paymentIntent
      }
    });
  })
  .catch(function(error) {
    // Handle error scenarios
  });
});

    });
</script>

<form id="payment-form">
  <input type="text" id="card-number" placeholder="Card Number" />
  <input type="text" id="card-expiry" placeholder="Expiration Date" />
  <input type="text" id="card-cvc" placeholder="CVC" />
  <button type="submit">Pay</button>
</form> -->
