import React, { Component } from "react";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import Youtube from "./components/api";
import _ from "lodash";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.handleSearch("malaysia");
  }

  handleSearch = async term => {
    const response = await Youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  handleSelect = video => {
    debugger;
  };

  render() {
    const videoSearch = _.debounce(term => {
      this.handleSearch(term);
    }, 400);

    return (
      <React.Fragment>
        <Header onSearch={videoSearch} />
        <Body
          videos={this.state.videos}
          selectedVideo={this.state.selectedVideo}
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        />
        <Footer />
      </React.Fragment>
    );
  }
}
