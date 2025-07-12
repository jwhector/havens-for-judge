# Email Setup for Endorsement Notifications

This guide explains how to set up email notifications for new endorsements.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## Gmail Setup

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to your Google Account settings
   - Navigate to Security > 2-Step Verification > App passwords
   - Generate a new app password for "Mail"
   - Use this password as your `EMAIL_PASS`

## Alternative Email Services

If you prefer not to use Gmail, you can modify the email configuration in `app/api/endorsements/route.ts`:

### For Outlook/Hotmail:

```javascript
const transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

### For Custom SMTP:

```javascript
const transporter = nodemailer.createTransport({
  host: "your-smtp-host.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

## Testing

1. Start the development server: `npm run dev`
2. Navigate to `/endorse`
3. Fill out and submit the endorsement form
4. Check jared.hector@gmail.com for the notification email

## Security Notes

- Never commit your `.env.local` file to version control
- Use app passwords instead of your main account password
- Consider using a dedicated email account for notifications
