import React, { Component } from 'react';

const PlaceList = (props) => {

  // let hrefString;

  // if(props.place.photos){
  //   let hrefArraySplit = props.place.photos[0].html_attributions[0].split('"');
  //   hrefString = hrefArraySplit[1];
  // }

  return(
    <div style={{border: '1px solid black', marginBottom: 10}}>
      {/* {
        hrefString ?
        (
          <a href={hrefString}>Image</a>
        
        )
        :(
          null
        )
        
      } */}
      <div><b>{props.place.name}</b></div>
      <div>{props.place.formatted_address}</div>
      <div>{`Rating: ${props.place.rating}`}</div>
    </div>
  )
}

export default PlaceList;