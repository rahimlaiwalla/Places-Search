import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PlaceList from './placeList.jsx'

const PlaceArray = (props) => {

  let array = props.placeArray;

  let filterArray = function(array) {
    array.sort((a, b) => {
      return b.rating - a.rating
    })
    console.log('SORTED ARRAY: ', array);
    return
  }

  return(
    <div>
      <div onClick={() => {filterArray(array)}}>FILTER</div>
      {array.map( place => {
        return <PlaceList key={place.id} place={place} />
      })}
    </div>
  )
}

export default PlaceArray;