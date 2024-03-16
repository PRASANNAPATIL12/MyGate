import React from 'react'
import YouTube from "react-youtube";


class Youtube extends React.Component {
    render() {
      const options = {
        height: '390',
        width: '640',
        
        playerVars: {
          autoplay: 1,
          controls: 1,
        },
      };
  
      return <YouTube videoId="Icva4M6xiAI" options={options} onReady={this._onReady} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }} id="video"/>;
    }
  
    _onReady(event) {
      event.target.pauseVideo();
    }
  }

  export default Youtube;

{/* <iframe width="877" height="492" src="https://www.youtube.com/embed/Icva4M6xiAI" title="Find deep cleaning services in just a click | MyGate Home Services | Knock Knock Stories" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}