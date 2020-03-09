import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <form>
          <label>
            {'Search for...   '}
            <input type="text"></input>
          </label>
        </form>
      </div>
    )
  }
}

export default SearchForm;
