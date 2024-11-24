import SMTPTransport from 'nodemailer/lib/smtp-transport'
import nodemailer from 'nodemailer'
import Stripe from 'stripe'

export default async function confirmationEmail(
  subscription: Stripe.Subscription,
  payment_method_id: string,
): Promise<string> {
  let emailConfig: SMTPTransport.Options
  if (process.env.SMTP_CONFIG) {
    emailConfig = JSON.parse(process.env.SMTP_CONFIG)
  } else {
    const emailAccount = await nodemailer.createTestAccount()
    emailConfig = {
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: emailAccount.user, // generated ethereal user
        pass: emailAccount.pass, // generated ethereal password
      },
    }
  }

  // create reusable transporter object using the default SMTP transport
  try {
    let transporter = nodemailer.createTransport(emailConfig)
    const cc = subscription.metadata.emailCC?.split(',') || []

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Ben Herila" <ben@herila.net>', // sender address
      to: ['comms@nearshorenetworks.com', 'ben@herila.net', ...cc], // list of receivers
      subject: 'New Subscriber Alert', // Subject line
      text: JSON.stringify(
        {
          stripe_subscription_id: subscription.id,
          subscription_status: subscription.status,
          payment_method_id,
          metadata: subscription.metadata,
        },
        null,
        2,
      ), // plain text body
    })
    console.info('email sent', info)
    return info.messageId
  } catch (err) {
    console.error("Couldn't send email confirmation", err)
    return 'error'
  }
}
