import React, {Component} from 'react';
import ReactPlayer from 'react-player';

class VideoPlayer extends Component {
    constructor(props){
        super(props);
    }
    render () {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url="https://www.youtube.com/watch?v=DScFlfN9vDk"
            width='100%'
            height='100%'
          />
          
        </div>
      )
    }
  }

export default VideoPlayer;  