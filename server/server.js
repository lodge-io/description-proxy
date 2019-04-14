const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const port = 4000;

app.use('/listing/:listingid', express.static(path.join(__dirname, '../client')))

app.listen(port, () => {
  console.log('Running on port:', port);
});

const nav = axios.create({
  baseURL: 'http://localhost:3223'
});

const description = axios.create({
  baseURL: 'http://13.58.246.140'
});

const gallery = axios.create({
  baseURL: 'http://localhost:8000'
});

const review = axios.create({
  baseURL: 'http://54.183.31.137'
});

const booking = axios.create({
  baseURL:'http://3.19.59.24'
});

app.get('/api/location/:query', (req, res) => {
  var query = req.params.query;
  nav.get(`/api/location/${query}`)
    .then(response => res.json(response.data))
    .catch(err => res.send(err))
});

app.get('/api/host/:hostid', (req, res) => {
  var id = req.params.hostid;
  description.get(`/api/host/${id}`)
    .then(response => res.json(response.data))
    .catch(err => res.send(err))
});

app.get('/rooms/:id/', (req, res) => {
  var id = req.params.id;
  gallery.get(`/rooms/${id}`)
    .then(response => res.json(response.data))
    .catch(err => res.send(err))
});

app.get('/api/reviews/:id', (req, res) => {
  var id = req.params.id;
  review.get(`/api/reviews/${id}`)
    .then(response => res.json(response.data))
    .catch(err => res.send(err))
});

app.get('/listings/:id', (req, res) => {
  var id = req.params.id;
  booking.get(`/listings/${id}`)
    .then(response => res.json(response.data))
    .catch(err => res.send(err))
});
