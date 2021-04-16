import React from "react";

class SearchForm extends React.Component {
  state = {
    formInput: null,
  };

  handleChange = (evt) => {
    const { value } = evt.target;
    this.setState({ formInput: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(this);
    this.props.setSearchTerm(this.state.formInput);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form">
          <label htmlFor="searchTerm">Search for news: </label>
          <input
            onChange={this.handleChange}
            type="text"
            value={this.formInput}
            name="searchTerm"
            id="searchTerm"
            required
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

export default SearchForm;
