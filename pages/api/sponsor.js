import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const {
    Firstname,
    Lastname,
    Email,
    Phone,
    Industry,
    Socialmedia,
    Followers,
    Twitch,
    Reddit,
    Youtube,
    Tiktok,
    Instagram,
  } = req.body;

  let transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: "natalie@contentwars.io",
      pass: "Galaxy500",
    },
  });

  try {
    const theEmail = await transporter.sendMail({
      from: "natalie@contentwars.io",
      to: "natalie@contentwars.io",
      subject: `Contact form submission from ${Firstname + " " + Lastname}`,
      html: `
        <h1>New Sponsor form submission</h1>
        <p><strong>Name: </strong> ${Firstname + " " + Lastname}</p>
        <p><strong>Email: </strong> ${Email}</p>
        <p><strong>Phone number: </strong>${Phone}</p>
        <p><strong>Industry: </strong> ${Industry}</p>
        <p><strong>Social media: </strong> ${Socialmedia}</p>
        <p><strong>Followers: </strong>${Followers}</p>
        <p><strong>Twitch: </strong> ${Twitch}</p>
        <p><strong>Reddit: </strong> ${Reddit}</p>
        <p><strong>Youtube: </strong>${Youtube}</p>
        <p><strong>Tiktok: </strong>${Tiktok}</p>
        <p><strong>Instagram: </strong>${Instagram}</p>

      `,
    });
    const themail = await transporter.sendMail({
      from: "natalie@contentwars.io",
      to: Email,
      subject: `Almost done with your application is almost complete :)`,
      html: `
        <p>Hi ${Firstname},</p>

        <p>We’re almost at the finish line! Thank you for your consideration in applying to be sponsored by choosing to submit a Content Wars sponsorship application!</p>

        <p>Imagine being if you had been involved with Tik Tok or Instagram right from the get-go when they first startedlaunched and thathen imagine those companies paid you in crypto and for every like/view your content received—in turn making you money. got you made money? Well, that’s just what this is!</p>

        <p>We’re excited to welcomebring talented influencers like yourself into ourthe Content Wars  family. Content Wars Our platform is here to help influencers expand and create new revenue streams, and  also servinge as a diversification strategy (or a “plan B”) in the event that sSocial mMedia giants throttle our hard-earned revenue—… which is honestly not so hard to believe in this day and age!</p>

        <p>Once After we finish reviewing your application, we’ll let you know if you’re approved , and, if so, will be sending you another email with a code so you can download the bBeta aApp upon itsonce released., You can also set up your cCrypto pPayment method by applying to be sponsored bysubmitting a Content Coin sponsorship application—the official crypto coin of Ccontent Wwars.</p>

        <p>https://contentecoin.com/sponsor</p>

        <p>You can use the same code once As soon as you’re approved,  to have your followers can use the same code to download the app and when they buy Content Coin you will getreceive a 4% discount forof every Content Coin purchase they make., Yes, you heard that right that’s real!  Users will be provided coins Wwhen they download the app, users will receive coins that you get to keep if they “like” your content and watch ads or purchase from our advertisers.and when they watch Ads or purchase from our advertisers with that then they can like your content and you get to keep those coins! </p>

        <p>All you have to do nowthat’s left for you to do is to anxiously await to hear back from usour response, once you do you can get startedafter which you can create your account and can start sharing your code with your followers.</p>


        <p>Chat soon!</p>
        <p>Enrollment Team</p>
      `,
    });
    res.status(200).json({ response: 1, message: "Message sent" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ response: 0, message: "Something went wrong" });
  }
}
