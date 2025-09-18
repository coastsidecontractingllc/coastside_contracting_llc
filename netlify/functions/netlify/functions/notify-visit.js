const twilio = require('twilio');

exports.handler = async function(event, context) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = twilio(accountSid, authToken);

  try {
    const message = await client.messages.create({
      body: 'Someone visited your website!',
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.NOTIFY_PERSONAL_NUMBER
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
