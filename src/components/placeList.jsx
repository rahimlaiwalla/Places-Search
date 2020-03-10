import React, { Component } from 'react';

const PlaceList = (props) => {

  // let hrefString;

  // if(props.place.photos){
  //   let hrefArraySplit = props.place.photos[0].html_attributions[0].split('"');
  //   hrefString = hrefArraySplit[1];
  // }

  return(
    <li style={{border: '1px solid black'}}>
      {/* {
        hrefString ?
        (
          <a href={hrefString}>Image</a>
        
        )
        :(
          null
        )
        
      } */}
      <div>{props.place.name}</div>
      <div>{props.place.formatted_address}</div>
      <div>{`Rating: ${props.place.rating}`}</div>
    </li>
  )
}

export default PlaceList;