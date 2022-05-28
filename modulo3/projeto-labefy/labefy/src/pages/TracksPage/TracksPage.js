import axios from "axios";
import React from "react";
import { urlSemId } from "../../constants/urls";

export default class TracksPage extends React.Component{
    state = {
        playlistId:{},
    } 

getTrack = () => {      
    const body = {
      name: this.state.nameMusic,
      artist: this.state.musicas,
      url: this.state.musicas,
    };
    const headers = {
      headers: {
        Authorization: "wictor-feitosa-hooks",
      },
    };
     try {
       axios.get(`${urlSemId}`, headers, body);
      // alert("Deletado")
    //   this.getAllPlaylists();
    } catch (error) {
      alert(error.response.data.message);
    //   this.getAllPlaylists();
    }
  };
   
    render(){
    return <div>{this.props.idCurrent}
    <br/>
    <button onClick={this.props.goToPlaylistPage}>Voltar</button>
    </div>    
}
}