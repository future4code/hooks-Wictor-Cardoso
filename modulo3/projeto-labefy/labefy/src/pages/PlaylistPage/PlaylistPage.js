import React from "react";
import axios from "axios";
import { Main, Pad, Card, Button, Div, ContinerCard } from "./styled";
import { urlSemId, urlSearch } from "../../constants/urls";

export default class PlaylistPage extends React.Component {
  state = {
    playListArray: [], //array com as playlists (id, name)
    playlistTrack: [], //array com as tracks(id, name, artist, url)
    nome: "",
    nomeTrack: "",
    artistTrack: "",
    urlTrack: "",
  };

  componentDidMount() {
    this.getAllPlaylists();
  }

  getAllPlaylists = async () => {
    const headers = {
      headers: {
        Authorization: "wictor-feitosa-hooks",
      },
    };
    try {
      const response = await axios.get(`${urlSemId}`, headers);
      this.setState({ playListArray: response.data.result.list });
      //   this.setState({ nome: "" });
    } catch (err) {
      console.log("Nada de playlist por aqui");
      //   this.setState({ nome: "" });
    }
  };

  searchPlaylist = async (id) => {
    const headers = {
      headers: {
        Authorization: "wictor-feitosa-hooks",
      },
    };
    try {
      const response = await axios.get(`${urlSearch}`, headers);
      this.setState({ playlistState: response.data.result.list });
    } catch (err) {
      console.log("Nada de playlist por aqui");
      this.setState({ nome: "" });
    }
  };

  getPlaylistTracks = async () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks`;
    const headers = {
      headers: {
        Authorization: "wictor-feitosa-hooks",
      },
    };
    try {
      const response = await axios.get();
      this.setState({ playlistTrack: response.data.result.tracks });
    } catch (err) {
      return "Músicas não buscadas na playlist";
    }
  };

  createPlaylist = async () => {
    const body = {
      name: this.state.nome,
    };

    const headers = {
      headers: {
        Authorization: "wictor-feitosa-hooks",
      },
    };
    try {
      const response = await axios.post(`${urlSemId}`, body, headers);
      // alert("Usuário criado com sucesso");
      this.setState({ nome: "" });
      this.getAllPlaylists();
    } catch (error) {
      alert("lista não criada");
      this.setState({ nome: "" });
      this.getAllPlaylists();
    }
  };

  addTrackToPlaylist = async (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;
    const headers = {
      headers: {
        Authorization: "wictor-feitosa-hooks",
      },
    };
    const body = {
      name: this.state.nomeTrack,
      artist: this.state.artistTrack,
      url: this.state.urlTrack,
    };
    try {
      const response = await axios.post(url, headers, body);
    } catch (err) {
      console.log("Track não adicionada a playlist");
    }
  };

  deletePlaylist = async (id) => {
    const headers = {
      headers: {
        Authorization: "wictor-feitosa-hooks",
      },
    };
    try {
      const response = await axios.delete(`${urlSemId}/${id}`, headers);
      //us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/`${id}`
      // this.getAllPlaylists();
      //   this.setState({ nome: "" });
      console.log(this.state.playlistState);
      this.getAllPlaylists();
    } catch (err) {
      console.log("Nada de playlist por aqui");
      //   this.setState({ nome: "" });
    }
  };

  removeTrackFromPlaylist;

  nomeManual = (event) => {
    const newNameValue = event.target.value;
    this.setState({ nome: newNameValue });
  };

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
    const listPlay = this.state.playListArray.map((user) => {
      return (
        <Card key={user.id}>
          {user.name}
          {/* <button onClick={() => this.addTrackToPlaylist(i.id)} >add track</button> */}
          {/* <button onClick={() => this.getPlaylistTracks(i.id)}>detalhes</button>  */}
          <button onClick={() => this.deletePlaylist(user.id)}>X</button>
        </Card>
      );
    });

    return (
      <div>
        <p>PlaylistPage.js</p>
        <input
          placeholder="Nome para a playlist"
          type="text"
          value={this.state.nome}
          onChange={this.nomeManual}
        />
        <button onClick={this.createPlaylist}>Criar playlist</button>
        <br />
        <input
          placeholder="Nome para a música"
          type="text"
          value={this.state.nomeTrack}
          onChange={this.nomeTrackManual}
        />{" "}
        <input
          placeholder="Nome do artista"
          type="text"
          value={this.state.artistTrack}
          onChange={this.artistTrackManual}
        />{" "}
        <input
          placeholder="Link do YouTube"
          type="text"
          value={this.state.urlTrack}
          onChange={this.urlTrackManual}
        />
        <button
          onClick={() => this.addTrackToPlaylist(this.state.playListArray.id)}
        >
          Add Track
        </button>
        <br />
        <input placeholder="Pesquisar lista" />
        <button onClick={this.searchPlaylist}>Pesquisar</button>
        <ContinerCard>{listPlay}</ContinerCard>
      </div>
    );
  }
}
