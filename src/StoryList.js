import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

class StoryList extends React.Component {
  state = {
    stories: [],
    query: "react",
  };

  async componentDidMount() {
    const response = await axios.get(
      `https://hn.algolia.com/api/v1/search?query=${this.state.query}`
    );
    const { hits } = response.data;
    this.setState({ stories: hits });
    console.log("STORIES", this.state.stories);
  }

  async componentDidUpdate() {
    const response = await axios.get(
      `https://hn.algolia.com/api/v1/search?query=${this.state.query}`
    );
    const { hits } = response.data;
    this.setState({ stories: hits });
  }

  setSearchTerm = (searchTerm) => {
    this.setState({ query: searchTerm });
  };

  render() {
    return (
      <div>
        <SearchForm setSearchTerm={this.setSearchTerm} />
        {this.state.stories.map((story) => (
          <p>
            <a href={`${story.url}`}>{story.title}</a>
          </p>
        ))}
      </div>
    );
  }
}

export default StoryList;
