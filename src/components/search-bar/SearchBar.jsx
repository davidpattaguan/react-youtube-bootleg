import React from "react";

class SearchBar extends React.Component {
  state = { term: " " };

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.onSubmitHandler(this.state.term);
  };

  render() {
    return (
      <div className="search-bar h10 bg-gray-800 p-5 flex">
        <div>
          <h1 className="font-bold text-2xl text-white">Utube</h1>
        </div>
        <form
          className="form flex items-center"
          onSubmit={this.onSubmitHandler}
        >
          <div className="form-group w-64">
            <input
              className="rounded ml-5 p-2 w-full"
              type="text"
              placeholder="Search Videos"
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
