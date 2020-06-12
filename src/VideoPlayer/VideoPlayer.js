import React, { Component } from "react";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import "./VideoPlayer.scss";

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
  }

  handleEnded(videoKey){
    alert('videoKey is '+videoKey);
  }

  render() {
    let videoPlay = [];
    let videoKey = [];
    for (let i = 0; i < this.props.todoItems.length; i++) {
      videoPlay.push(this.props.todoItems[i].text);
      videoKey.push(i);
    }

    return (
      <div className="player-wrapper">
        {videoPlay.length > 0 ? (
          <ReactPlayer key={videoKey}
            className="react-player"
            url={videoPlay}
            controls={true}
            onEnded={()=>{this.handleEnded(videoKey)}}
            width="620px"
            height="420px"
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("todoval" + state);
  return {
    todoItems: state.items,
  };
};

export default connect(mapStateToProps)(VideoPlayer);
