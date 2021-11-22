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
        <h1>New Application to get sponsored on Contentwars</h1>
        <p><strong>Name: </strong> ${Firstname + " " + Lastname}</p>
        <p><strong>Email: </strong> ${Email}</p>
        <p><strong>Phone number: </strong>${Phone}</p>
        ${
          Industry && (
            <p>
              <strong>Industry: </strong> ${Industry}
            </p>
          )
        }
        ${
          Socialmedia && (
            <p>
              <strong>Social media: </strong> ${Socialmedia}
            </p>
          )
        }
        ${
          Followers && (
            <p>
              <strong>Followers: </strong>${Followers}
            </p>
          )
        }
        ${
          Twitch && (
            <p>
              <strong>Twitch: </strong> ${Twitch}
            </p>
          )
        }
        ${
          Reddit && (
            <p>
              <strong>Reddit: </strong> ${Reddit}
            </p>
          )
        }
        ${
          Youtube && (
            <p>
              <strong>Youtube: </strong>${Youtube}
            </p>
          )
        }
        ${
          Tiktok && (
            <p>
              <strong>Tiktok: </strong>${Tiktok}
            </p>
          )
        }
        ${
          Instagram && (
            <p>
              <strong>Instagram: </strong>${Instagram}
            </p>
          )
        }

      `,
    });
    const themail = await transporter.sendMail({
      from: "natalie@contentwars.io",
      to: Email,
      subject: `Your application is almost complete :)`,
      html: `
        <p>Hi ${Firstname},</p>

        <p>We’re almost at the finish line! Thank you for choosing to submit a Content Wars sponsorship application!</p>

        <p>Imagine if you had been involved with TikTok or Instagram right from the get-go when they launched and that those companies paid you in crypto and for every like/view your content received—in turn making you money. Well, that’s just what this is!</p>

        <p>We’re excited to welcome talented influencers like yourself into our Content Wars family. Our platform is here to help influencers expand and create new revenue streams, and also serving as a diversification strategy (or a “plan B”) in the event that social media giants throttle our hard-earned revenue—which is honestly not so hard to believe in this day and age!</p>

        <p>After we finish reviewing your application, we’ll let you know if you’re approved and, if so, send you an email with a code so you can download the beta app upon its release. You can also set up your crypto payment method by submitting a Content Coin sponsorship application—the official crypto coin of Ccontent Wars.</p>

        <p>https://contentecoin.com/sponsor</p>

        <p>As soon as you’re approved, your followers can use the same code to download the app and receive a 4% discount for every Content Coin purchase they make. Yes, you heard that right! When they download the app, users will receive coins that you get to keep if they “like” your content and watch ads or purchase from our advertisers. </p>

        <p>All you have to do is to anxiously await our response, after which you can create your account and share your code with your followers.</p>


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
