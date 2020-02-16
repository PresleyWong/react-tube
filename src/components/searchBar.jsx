import React, { Component } from "react";
import InputBase from "@material-ui/core/InputBase";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <InputBase
        onChange={event => this.onInputChange(event.target.value)}
        placeholder="Search…"
        classes={{
          root: this.props.style.inputRoot,
          input: this.props.style.inputInput
        }}
        inputProps={{ "aria-label": "search" }}
      />
    );
  }
}

export default SearchBar;
