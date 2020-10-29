const email = require('../controllers/email');

const emailController = {};

emailController.testGet = (req, res) => {
  res.send('Test api/email : GET ');
};

emailController.sendEmail = (req, res) => {
  const now = new Date();
  const dateNow = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;

  const { firstName, surname, to, telephone, text } = req.body;

  const emailOptions = {};

  emailOptions.to = to && `${firstName} ${surname} <${to}>`;
  emailOptions.body_html = `
    <html>
        <head></head>
        <body>
        <h1>Hello ${firstName}!</h1>
        <ul>
            <li> - Apellido y Nombre : <strong>${surname}, ${firstName}</strong></li>
            <li> - Telefono : <strong>${telephone}</strong></li>
            <li> - Email : <strong>${to}</strong></li>
        </ul>
        <p>
            <em>${text}</em>
        </p>
        <p>
            This email was sent automatically by <a href='${process.env.URL_DEEBLOX}'>Deeblox</a>
        </p>
        <small>${dateNow}</small>
        </body>
    </html>`;

  email
    .send(emailOptions)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = emailController;
