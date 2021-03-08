var express = require('express');
var axios = require('axios');
var app = express();
var api = "http://13.228.194.85:8181/v1";
var cookieParser = require('cookie-parser');

// app.post('/auth', function (req, res) {
//   console.log("KENA GA SI BNGSAT LAAAAHAHHHHHHHHHHHHHHHHH")
// const { email, password } = req.body
//   axios.post(api + '/auth', {
//     email,
//     password
//   }).then(response => {
//     console.log(response.data.data.token)
//     res.send(response.data);
//   }).catch(error => {
//     console.log(error)
//   })
// })

app.use(cookieParser());

app.post('/auth', function (req, res) {
  const sess = req.session;
  const { email, password } = req.body
  sess.email = email
  sess.password = password
  var cookie = req.cookies.token;
  axios.post(api + '/auth', {
    email,
    password
  }).then(response => {
    const token = response.data.data.token;
    const staff = response.data.data.staff;
    res.cookie('token', token, { maxAge: 900000, httpOnly: true });
    console.log(token, "ALAMALAMALAMALAMALAMALAM")
    res.send(response.data);
  }).catch(error => {
    console.log(error)
  })
})

app.get('/inventory/uom', function (req, res) {
  axios.get(api + '/inventory/uom')
  .then(response => {
    console.log(response.data)
    res.send(response.data);
  })
  .catch(error => {
    console.log(error)
  })
});

module.exports = app;