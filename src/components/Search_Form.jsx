import React, { Component } from 'react';
const path = require('path');
import Axios from 'axios';
import PlaceList from './placeList.jsx'
import PlaceArray from './placeArray.jsx';
import ImageComponent from './ImageComponent.jsx'
import {Link, Switch, Route, Redirect} from 'react-router-dom';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      zipCode: '',
      placeList: [],
      carouselImages: [],
      arrayImageElements: [],
      imgIndex: '',
      timer: ''
    }

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onZipChange = this.onZipChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onLeftClick = this.onLeftClick.bind(this);
    this.onRightClick = this.onRightClick.bind(this);
    this.slide = this.slide.bind(this);

  }

  componentDidMount(){
    Axios.get('/search/readDir')
      .then(response => {
        const carouselImages = response.data;
        this.setState({carouselImages});

        // let arrayImageElements = this.state.carouselImages.map( imagePath => {
        //   return <img src={`./carosel-images/${imagePath}`} className="carouselImage" />
        // })
        // this.setState({arrayImageElements});

        let carousel = document.getElementsByClassName('carouselImages')[0];
        let slides = carousel.getElementsByTagName('IMG');
        let slidesArray = Array.from(slides);
        console.log(slides);
        this.setState({arrayImageElements: slidesArray});

  
        this.setState({imgIndex: 2});
        this.state.arrayImageElements[2].style.display = "block";

        // this.setState({timer: setInterval(this.slide, 20000)})
      })
  }

  slide(){
      let counter = this.state.imgIndex + 1;
      this.setState({imgIndex: counter});
      if(counter === this.state.arrayImageElements.length){
        this.state.arrayImageElements[counter - 1].style.display = "none";
        this.state.arrayImageElements[0].style.display = "block";
        counter = 0;
        this.setState({imgIndex: counter});
      } else {
        this.state.arrayImageElements[counter - 1].style.display = "none";
        this.state.arrayImageElements[counter].style.display = "block";
      }
  }

  onSearchChange(){
    this.setState({searchValue: event.target.value});
  }

  onZipChange() {
    this.setState({zipCode: event.target.value});
  }

  onLeftClick(event) {
    if(this.state.imgIndex > 0){
      let newIndex = this.state.imgIndex - 1;
      this.state.arrayImageElements[newIndex + 1].style.display = "none";
      this.state.arrayImageElements[newIndex].style.display = "block";
      this.setState({imgIndex: newIndex});

      // clearInterval(this.state.timer);
      // this.setState({timer: setInterval(this.slide, 20000)});
    }
    
  }

  onRightClick() {
    if(this.state.imgIndex < this.state.arrayImageElements.length - 1){
      let newIndex = this.state.imgIndex + 1;
      this.state.arrayImageElements[newIndex - 1].style.display = "none";
      this.state.arrayImageElements[newIndex].style.display = "block";
      this.setState({imgIndex: newIndex});

      // clearInterval(this.state.timer);
      // this.setState({timer: setInterval(this.slide, 20000)});
    }
  }

  onSearchSubmit(event) {
    let searchValue = this.state.searchValue;
    let zipCode = this.state.zipCode;

    Axios.post('/search', {searchValue, zipCode})
      .then(response => {
        // console.log(response.data);
        this.setState({placeList: response.data.results}, () => {
          console.log('state place list: ', this.state.placeList);
          this.props.history.push(`/search/query=${this.state.searchValue}&zip=${this.state.zipCode}`);
        })
      })

      const searchFormUnderHeader = document.getElementsByClassName('searchFormUnderHeader')[0];
      searchFormUnderHeader.style.backgroundImage = "none";
      searchFormUnderHeader.style.height="auto";
      const searchFormDiv = document.getElementsByClassName('searchForm')[0];
      searchFormDiv.style.top="0px";
      searchFormDiv.style.marginTop="0px";
      let searchFormDivHeight = searchFormDiv.offsetHeight;
      const searchResultsDiv = document.getElementsByClassName('searchResults')[0];
      searchResultsDiv.style.paddingTop = searchFormDivHeight + 3 + 'px';
      const searchImage =  document.getElementsByClassName("carouselImages")[0];
      searchImage.style.display = "none";
      // searchFormDiv.style.position="relative";
      event.preventDefault();
  }


  render() {
    // console.log('path props: ', this.props.path )
    // console.log('url props: ', this.props.url)
    return(
      <section className='underHeader searchFormUnderHeader'>
        <div className="carouselImages">
          {
            this.state.carouselImages.map( (image, index) => {
              return <ImageComponent key={index} image={image} index={index}/>
            })
            
          }
          <a className="prev" style={{float: "left"}} onClick={this.onLeftClick}>&#10094;</a>
          <a className="next" style={{float: "right"}} onClick={this.onRightClick}>&#10095;</a>
        </div>
        <div className="searchForm">
          <form onSubmit={this.onSearchSubmit}>
            <label>
              {'Search for...   '}
              <input type="text" value={this.state.searchValue} onChange={this.onSearchChange} />
            </label>
            <label>
              {'   in Zip Code...   '}
              <input type="text" value={this.state.zipCode} onChange={this.onZipChange} />
            </label>
            <input className="submitForm" type="submit" value="Submit" />
              {/* <Link to={`/search/${this.state.zipCode}`}>Submit</Link> */}
          </form>
        </div>
        <div className="searchResults">
          {/* Hello */}
          {/* {
            this.state.placeList.map( place => {
              return <PlaceList place={place} />
            })
          } */}
          {/* <PlaceArray /> */}
          <Switch>
            <Route
              path='/search/:query'
              render={props => <PlaceArray {...props} placeArray={this.state.placeList} />}
            />
          </Switch>
        </div>
      </section>
    )
  }
}

export default SearchForm;
