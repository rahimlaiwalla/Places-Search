import React, { Component } from 'react';
import Axios from 'axios';
import PlaceList from './placeList.jsx'

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      zipCode: '',
      placeList: [],
    }

    this.onSearchChange = this.onSearchChange.bind(this);
    this.onZipChange = this.onZipChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  onSearchChange(){
    this.setState({searchValue: event.target.value});
  }

  onZipChange() {
    this.setState({zipCode: event.target.value});
  }

  onSearchSubmit(event) {
    let searchValue = this.state.searchValue;
    let zipCode = this.state.zipCode;

    Axios.post('/search', {searchValue, zipCode})
      .then(response => {
        // console.log(response.data);
        this.setState({placeList: response.data.results}, () => {
          console.log('state place list: ', this.state.placeList);
        })
      })

      event.preventDefault();
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onSearchSubmit}>
          <label>
            {'Search for...   '}
            <input type="text" value={this.state.searchValue} onChange={this.onSearchChange} />
          </label>
          <label>
            {'   in Zip Code...   '}
            <input type="text" value={this.state.zipCode} onChange={this.onZipChange} />
          </label>
            <input type="submit" value="Submit" />
        </form>
        <div>
          {
            this.state.placeList.map( place => {
              return <PlaceList place={place} />
            })
          }
        </div>
      </div>
    )
  }
}

export default SearchForm;
