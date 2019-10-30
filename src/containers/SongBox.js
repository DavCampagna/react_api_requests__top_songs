import React, { Component } from 'react';
import SongList from '../components/SongList'

class SongBox extends Component{
  constructor(props){
    super(props);
    this.state = {
      songs: []
    }
  }

  componentDidMount() {
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
      .then(res => res.json())
      .then(songs => this.setState({ songs: songs.feed.entry }))
      .catch(err => console.error(err))
  }

  render(){
    return(
      <div className="song-box">
        <SongList songs={this.state.songs}/>
      </div>
    )
  }
}

export default SongBox;
