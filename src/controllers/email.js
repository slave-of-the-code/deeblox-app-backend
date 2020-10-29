const nodemailer = require('nodemailer');

const email = {
  init: () => {
    const { EMAIL_AWS_SMTP, EMAIL_AWS_PORT, EMAIL_AWS_USER, EMAIL_AWS_PASS } = process.env;

    const port = EMAIL_AWS_PORT || 465;

    // Create the SMTP transport.
    let transporter = nodemailer.createTransport({
      host: EMAIL_AWS_SMTP || 'email-smtp.us-west-2.amazonaws.com',
      port: port,
      secure: port == 465,
      auth: {
        user: EMAIL_AWS_USER || 'AKIAY32RY47DDNOTJRNM',
        pass: EMAIL_AWS_PASS || 'BEoBzTIgRWggWI6/nk1OiNL9f1Im5QGMzKYvpfnWne3o'
      }
    });

    return transporter;
  },
  options: ({ to, subject, body_html }) => {
    const { EMAIL_AWS_FROM, EMAIL_AWS_BBC } = process.env;

    return {
      from: `deeblox <${EMAIL_AWS_FROM}>` || 'deeblox test <website@deeblox.com>',
      to: to,
      subject: subject || `Test Subject`,
      bcc: EMAIL_AWS_BBC || 'gustavo.l@outlook.com',
      html: body_html
    };
  }
};

email.send = async (options) => {
  const transporter = email.init();
  const emailOptions = email.options(options);

  return await transporter.sendMail(emailOptions);
};

module.exports = email;
