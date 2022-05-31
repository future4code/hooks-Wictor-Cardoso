import React from "react";
import axios from "axios";
import {Input, BordaCard, MainStyle ,Main, Pad, Card, Button, Div, ContinerCard } from "./styled";
import { urlSemId, urlSearch } from "../../constants/urls";

export default class PlaylistPage extends React.Component {
  state = {
    playlistArray: [], //array com as playlists (id, name)
    playlistState: "",
    //
    textQuery: "",
    //
  };

  componentDidMount(){
    this.getAllPlaylists();
  }

  // ====  primeira ação a ser feita ao abrir a página ====

  // componentDidMount() {
  //   this.getAllPlaylists();
  // }

  // ====  pegar todas as litas de playlist criadas ====
  getAllPlaylists = async () => {
    const headers = {
      headers: {
        Authorization: "wictor-feitosa-hooks",
      },
    };
    try {
      const response = await axios.get(`${urlSemId}`, headers);
      this.setState({ playlistArray: response.data.result.list });
      //   this.setState({ nome: "" });
    } catch (err) {
      console.log("Nada de playlist por aqui");
      //   this.setState({ nome: "" });
    }
  };

  getPlaylistTracks = async (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;
    const headers = {
      headers: {
        Authorization: "wictor-feitosa-hooks",
      },
    };
    try {
      const response = await axios.get(url, headers);
      this.setState({ playlistDetailState: response.data.result.tracks });
    } catch (err) {
      return "Músicas não buscadas na playlist";
    }
  };

  // ====  criar playist ====

  createPlaylist = async () => {
    const body = {
      name: this.state.playlistState,
    };

    const headers = {
      headers: {
        Authorization: "wictor-feitosa-hooks",
      },
    };
    try {
      const response = await axios.post(`${urlSemId}`, body, headers);
      // alert("Usuário criado com sucesso");
      this.setState({ playlistState: "" });
      this.getAllPlaylists();
    } catch (error) {
      alert("lista não criada");
      this.setState({ playlistState: "" });
      this.getAllPlaylists();
    }
  };

  
  // ====  inputs controladores de estado onChange  ====
  criarPlaylistManual = (event) => {
    const newNameValue = event.target.value;
    this.setState({ playlistState: newNameValue });
  };

  
  render() {
    const playlists = this.state.playlistArray.map((parameter) => {
      return (
        <Card key={parameter.id}>
          <div onClick={() => this.props.goToTrackPage(parameter.id)}>
            {parameter.name}
          </div>
          <button onClick={() => this.deletePlaylist(parameter.id)}>Delete</button>
        </Card>
      );
    });   

    return (
      <>
      <div>
      <Input
          placeholder="Nome para a playlist"
          type="text"
          value={this.state.playlistState}
          onChange={this.criarPlaylistManual}
        ></Input>
        <Button onClick={() => this.createPlaylist()}>Criar Playlist</Button> 
        </div>
      <MainStyle>
        <h1>Playlists LabeFy</h1>
      </MainStyle>
      <BordaCard>{playlists}</BordaCard>
      </>
    );
  }
}
