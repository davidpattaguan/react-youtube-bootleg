import React from "react";

class SearchBar extends React.Component {
  state = { term: " " };

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.onSubmitHandler(this.state.term);
  };

  render() {
    return (
      <div className="search-bar h10 bg-gray-900 p-5 flex">
        <div>
          <h1 className="font-bold text-2xl text-white">Yootube</h1>
        </div>
        <form
          className="form flex items-center"
          onSubmit={this.onSubmitHandler}
        >
          <div className="form-group md:w-[58rem]">
            <input
              className="rounded md:ml-16 ml-5 p-2 w-full bg-slate-800"
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
