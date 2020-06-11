import React, { Component } from "react";
import ReactPlayer from "react-player";
import { connect } from "react-redux";

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoItems: [
        {
          id: 1,
          url:
          "https://www.youtube.com/watch?v=rpIlP6pI8fo&list=RDDScFlfN9vDk&index=2",
        },
        {
          id: 2,
          url:
          "https://www.youtube.com/watch?v=_fTN72GPgIU&list=RDDScFlfN9vDk&index=4",
        },

      
      ],
    };
  }

  render() {
    let videoPlay = [];
    videoPlay = this.state.videoItems.map(item=>{
      return(
        <ReactPlayer
        className='react-player'
        url={[item.url]}
        width='100%'
        height='100%'
      />
      )
    })

    return (
      <div className="player-wrapper">
        
        {videoPlay}
        
        {/* <p>URLs</p>
           {this.props.todoItems.map((item)=>{
            return <p>{item.text}</p>
          })} */}
        {/* <DataContext.Consumer>
          {(context)=>{context.state.items.map((item)=>
           {
            return <p>{item.text}</p>
          })}}
          </DataContext.Consumer> */}
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
