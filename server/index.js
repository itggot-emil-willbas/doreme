const express = require("express");
//import data from './data/data.json';

const axios = require('axios');
const request = require('request');

const app = express(),
PORT = 4000,
path = require('path'),
bodyParser = require('body-parser')
//Simple usage, enable ALL CORS Requests
const cors = require('cors');

app.use(cors());

app.get('/',(req, res) => 
  res.send(`a get request with / route on port ${PORT}`)
);

app.get('/muffins/today',(req, res) => {
  //res.send(`a get request for TODAY's DATE with /muffins/today route on port ${PORT}`)
  /*const getData = async () => {
    try {
      return await axios.get('https://history.muffinlabs.com/date');
    } catch (error) {
      console.error(error)
    }
  }

  let data = await getData();

  console.log(data)

  res.send(data)*/

//GET data first

  request('https://history.muffinlabs.com/date', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred and handle it
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    res.send(body);
}); 

//Skicka tillbaks
//res.json(data)

});



app.post('/newItem',(req, res) => 
  res.send(`a POST request with /newItem route on port ${PORT}`)
);

app.put('/item',(req, res) => 
  res.send(`a PUT request with /item route on port ${PORT}`)
);

app.delete('/item',(req, res) => 
  res.send(`a delete request with /item route on port ${PORT}`)
);
app.listen(PORT, () => {
  console.log(`Servern körs på port ${PORT}`)
});