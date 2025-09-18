const twilio = require('twilio');

exports.handler = async function(event, context) {
  // Read sensitive credentials from Netlify environment variables
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = twilio(accountSid, authToken);

  try {
    const message = await client.messages.create({
      body: 'Someone visited your website!',
      from: process.env.TWILIO_PHONE_NUMBER,      // Your Twilio phone number
      to: process.env.NOTIFY_PERSONAL_NUMBER      // Your personal phone number
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, sid: message.sid })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message })
    };
  }
};