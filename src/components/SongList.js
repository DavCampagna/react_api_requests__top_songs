import React, { Component } from 'react';
import SongItem from './SongItem'

class SongList extends Component{

  render(){
    return(
      <div>
      <h2>Here are the top songs:</h2>
      <ul>
        <SongItem />
      </ul>
      </div>
    )
  }
}

export default SongList;
