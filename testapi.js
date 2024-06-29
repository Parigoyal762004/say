import axios from 'axios';
import 'dotenv/config';

const sendTestEmail = async () => {
  try {
    const response = await axios.post(
      'https://api.resend.io/v1/emails',
      {
        to: 'recipient@example.com',
        from: 'your-email@example.com',
        subject: 'Test Email',
        html: '<p>This is a test email.</p>',
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('Email sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending email:', error.response ? error.response.data : error.message);
  }
};

sendTestEmail();
