import React, { Component } from 'react';
import SongList from '../components/SongList'

class SongBox extends Component{
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      songNames: []
    }
  }

  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

    fetch(url)
      .then(res => res.json())
      .then(songs => {
        const songNames = songs.map(song => song.feed);
        const uniqueSongNames = Array.from(new Set(songNames))
        this.setState({
          songs: songs,
          songNames: uniqueSongNames
        })
      })
      .catch(err => console.error(err))
  }

  render(){
    return(
      <div className="song-box">
        <SongList songs={this.state.songNames}/>
      </div>
    )
  }
}

export default SongBox;
