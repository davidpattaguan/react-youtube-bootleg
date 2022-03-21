import "./App.css";
import SearchBar from "./components/search-bar/SearchBar";
import youtube from "./api/youtube";

import React from "react";
import VideoList from "./components/video-list/VideoList";
import VideoDetail from "./components/video-detail/VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSubmitHandler("titan");
  }

  onSubmitHandler = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: response.data.items });
    this.setState({ selectedVideo: response.data.items[0] });
  };

  onVideoSelect = (video) => {
    console.log(`This video is selected `, video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <>
        <SearchBar onSubmitHandler={this.onSubmitHandler} />
        <div className="container mx-auto mt-5">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            <div className="col-span-2">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div>
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
