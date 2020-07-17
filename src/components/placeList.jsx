import React, { useEffect, useState } from 'react';
// import config from '../../config';
import Axios from 'axios';


function PlaceList(props){

  // let hrefString;

  // if(props.place.photos){
  //   let hrefArraySplit = props.place.photos[0].html_attributions[0].split('"');
  //   hrefString = hrefArraySplit[1];
  // }
  // let photoUrl = '';
  const [photoUrl, setPhotoUrl] = useState('');

  useEffect(() => {
    if(props.place.photos){
      let photoRef = props.place.photos[0].photo_reference
      // photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxheight=150&photoreference=${photoRef}&key=${config.googleAPI_Key}`
  
      Axios.get(`/photo-reference/${photoRef}`)
        .then(response => {
          // console.log(typeof(response.data));
          setPhotoUrl(response.data);
        })
  
      // console.log('Photoref: ', photoRef);
    }

  }, [photoUrl])


  return(
    <div style={{marginBottom: '30px'}} className="placeListItem intro">
      {/* {
        hrefString ?
        (
          <a href={hrefString}>Image</a>
        
        )
        :(
          null
        )
        
      } */}
      <img src={photoUrl} className='placeListImage' ></img>
      <div className="placeListDescription">
        <div style={{fontSize: '20px'}}><b>{props.place.name}</b></div>
        <div>{props.place.formatted_address}</div>
        <div>{`Rating: ${props.place.rating}`}</div>
      </div>
    </div>
  )
}

export default PlaceList;