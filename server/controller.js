const Axios = require('axios');
const bodyparser = require('body-parser');
const config = require('../config.js')

const postSearch = (req, res) => {
  const zipCode = req.body.zipCode;
  const place = req.body.searchValue;
  const formattedPlace = place.replace(/\s/g, '+').toLowerCase();
  let lat, lng;

  let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=${config.googleAPI_Key}`

  Axios.get(url)
    .then(response => {
      let coordinatesObj = response.data.results[0].geometry.location;
      lat = coordinatesObj.lat;
      lng = coordinatesObj.lng;
      
      // let placeUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1600&rankby=prominence&keyword=${place}&key=${config.googleAPI_Key}`;
      let placeUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${formattedPlace}&location=${lat},${lng}&radius=1600&key=${config.googleAPI_Key}`
      Axios.get(placeUrl)
        .then(response => {
          // console.log(response.data);
          res.send(response.data);
        })
    })
}

module.exports = {
  postSearch: postSearch
}
