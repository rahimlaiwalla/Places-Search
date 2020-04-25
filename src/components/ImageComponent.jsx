import React from 'react';

const ImageListItem = (props) => {
  let imageLocation = `./carosel-images/${props.image}`

  
    return(
        <img src={imageLocation} className="carouselImage" style={{listStyleType: "none", display: "none"}}/>
    )



}

export default ImageListItem;