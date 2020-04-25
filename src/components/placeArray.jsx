import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PlaceList from './placeList.jsx'

const PlaceArray = (props) => {
  return(
    <div>
      {props.placeArray.map( place => {
        return <PlaceList key={place.id} place={place} />
      })}
    </div>
  )
}

export default PlaceArray;