var postmark = require("postmark")

var client = new postmark.ServerClient("e09cb78d-462e-4d0f-93b1-cf16c7eafd75")

client.sendEmail({
    "From": "sender@example.org",
    "To": "alexandrosnikolaou1999@gmail.com",
    "Subject": "Hello from Postmark",
    "HtmlBody": "<strong>Hello</strong> dear Postmark user.",
    "TextBody": "Hello from Postmark!",
    "MessageStream": "broadcast"
  });