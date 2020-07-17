const Axios = require('axios');
const bodyparser = require('body-parser');
// const config = require('../config.js')
// require('dotenv').config()

const postSearch = (req, res) => {
  const zipCode = req.body.zipCode;
  const place = req.body.searchValue;
  const formattedPlace = place.replace(/\s/g, '+').toLowerCase();
  let lat, lng;

  let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=${process.env.REACT_APP_googleAPI_Key}`

  Axios.get(url)
    .then(response => {
      let coordinatesObj = response.data.results[0].geometry.location;
      lat = coordinatesObj.lat;
      lng = coordinatesObj.lng;
      
      // let placeUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1600&rankby=prominence&keyword=${place}&key=${process.env.REACT_APP_googleAPI_Key}`;
      let placeUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${formattedPlace}&location=${lat},${lng}&radius=1600&key=${process.env.REACT_APP_googleAPI_Key}`
      Axios.get(placeUrl)
        .then(response => {

          // console.log(response.data);
          // console.log('PHOTO REFERENCE: ', response.data.photos[0].photo_reference)
          
              res.send(response.data);
        })
    })
}

const getPhotos = function(array) {
  for(let i = 0; i < array.length; i++){
    if(array[i].photos){
      let photoRef = array[i].photos[0].photo_reference
      // console.log(`PHOTO REFERENCE @ INDEX ${i}: `, photoRef) 
      let photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=40&photoreference=${photoRef}&key=${process.env.REACT_APP_googleAPI_Key}`
      Axios.get(photoUrl)
        .then((response) => {
          console.log(`PHOTOS RESPONSE.REQUEST.RES.INCOMINGMESSAGE @ INDEX ${i}: `, response.request.res.IncomingMessage)
        })
    }
  }
  return;
}

module.exports = {
  postSearch: postSearch,
  getPhotos: getPhotos
}
