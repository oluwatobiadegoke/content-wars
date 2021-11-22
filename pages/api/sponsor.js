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

        <table cellpadding="0" cellspacing="0" style="padding:0;margin:0">
          <tbody>
            <tr>
              <td valign="top" align="left">
                <table bgcolor="#FFFFFF" cellpadding="0" cellspacing="0" style="padding:0;margin:0;border:0">
                  <tbody>
                    <tr>
                      <td align="left" style="border:1px solid #e5e5e5;padding:20px" id="m_-2283997912417090119main-pad">
                        <table style="line-height:22px;font-family: Poppins, Century Gothic, Arial,sans-serif;" cellspacing="0" cellpadding="0" border="0">
                          <tbody>
                            <tr>
                              <td style="padding-right:20px;" width="120" align="left">
                                <img src="https://i.postimg.cc/zXY3GYvX/logo-image.gif" alt="logo" width="120" height="120" style="height:120px;width:120px;">
                              </td>
                              <td valign="middle" nowrap="nowrap" align="left">
                                <span style="color:#030303;font-size:12pt;font-weight:500;">Natalie Enrollment Lead</span><br>
                                <div style="width:99%; height:15px;line-height:15px; overflow:hidden; padding:0; margin:0;font-size:0px; display:block">&nbsp;</div>
                                <a href="" target="_blank"><img src="https://i.postimg.cc/ryCV2k5r/FB.png" width="23" height="23" style="width:23px;height:23px"></a>
                                <a href="" target="_blank"><img src="https://i.postimg.cc/BQmJtBYZ/IG.png" width="23" height="23" style="width:23px;height:23px"></a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div style="width:99%; height:10px;line-height:10px; overflow:hidden; padding:0; margin:0;font-size:0px; display:block">&nbsp;</div>
                        <table width="470" height="30" style="width:470px;height:30px;font-family: Poppins, Century Gothic, Arial,sans-serif" cellspacing="0" cellpadding="0" border="0">
                          <tbody>
                            <tr>
                              <td align="center" bgcolor="#030303" style="background-color:#030303">
                                <span style="color:#ffffff;font-size:9pt;font-weight:500;">Decentralized Social Media that Pays users and Creators in crypto</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
	      </table>
      `,
    });
    res.status(200).json({ response: 1, message: "Message sent" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ response: 0, message: "Something went wrong" });
  }
}
