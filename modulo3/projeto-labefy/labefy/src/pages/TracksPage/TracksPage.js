import axios from "axios";
import React from "react";
import { urlSemId } from "../../constants/urls";



const urlGet =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

  const headers = {
    headers: {
      Authorization: "wictor-feitosa-hooks",
    },
  };

export default class TracksPage extends React.Component {
   // ====  estado  ====
  state = {    
    todasAsTracks:[],
    nomeTrack: "",
    artistTrack: "",
    urlTrack: "",
  };

  // ==== executa primeira ação na página ao abrir ====
  // componentDidMount(){
  //   this.getPlaylistTracks()
  // }

// ==== pegar as músicas nas playlists ====
  getPlaylistTracks = (id) => {
    try {
      const response = axios.get(`${urlGet}/${id}/tracks`, headers);
       this.setState({todasAsTracks: response.data.result.tracks})
      // console.log(response.data.result.tracks);
    } catch (error) {
      alert(error);
      console.log(id);
    }
  };

  // ==== adicionar música na playlist ====
  addTrackToPlaylist = (id)=>{
    const body = {
      name: this.state.nomeTrack,
      artist: this.state.artistTrack,
      url: this.state.urlTrack,
    };
    try {
      const response = axios.post(`${urlGet}/${this.props.playlistId}/tracks`, headers, body)
      this.setState({})
    } catch (error) {
      
    }
  }

  // ==== input adicionar música em playlist ====
  nomeTrackManual = (event) => {
    const newNameValue = event.target.value;
    this.setState({ nomeTrack: newNameValue });
  };

  artistTrackManual = (event) => {
    const newNameValue = event.target.value;
    this.setState({ artistTrack: newNameValue });
  };

  urlTrackManual = (event) => {
    const newNameValue = event.target.value;
    this.setState({ urlTrack: newNameValue });
  };

  render() {
    const tracks = this.state.todasAsTracks.map((prm) => {
      return (
        <div key={prm.id}>          
            {prm.name}
            {prm.artist}
            {prm.url}                    
        </div>
      );
    }); 
    return (
      <div>
        <div>
          <button onClick={this.props.goToPlaylistPage}>Voltar</button>
        </div>
        <input
          placeholder="Nome para a música"
          type="text"
          value={this.state.nomeTrack}
          onChange={this.nomeTrackManual}
        />
        <input
          placeholder="Nome do artista"
          type="text"
          value={this.state.artistTrack}
          onChange={this.artistTrackManual}
        />
        <input
          placeholder="Link do YouTube"
          type="text"
          value={this.state.urlTrack}
          onChange={this.urlTrackManual}
        />
        <button onClick={() => this.addTrackToPlaylist()}>
          Adicionar música
        </button>
        <div>{tracks}Músicas aqui</div>
        <div>Músicas aqui</div>
        <div>Músicas aqui</div>
        <div>Músicas aqui</div>
        <div>Músicas aqui</div>
      </div>
    );
  }
}
