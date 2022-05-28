import "./App.css";
import { Main, Pad, Card, Button, Div } from "./components/Style";
import React from "react";
import axios from "axios";
import PlaylistPage from "./pages/PlaylistPage/PlaylistPage";
import TracksPage from "./pages/TracksPage/TracksPage";
import { urlSemId, headers } from "./constants/urls";

export default class App extends React.Component {

  // componentDidMount() {
  //   this.getAllPlaylists();
  // }


  searchPlaylist

  // getPlaylistTracks = async (id) => {
  //   const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;
  //   const body = {
  //     name: this.state.nameMusic,
  //     artist: this.state.artistMusic,
  //     url: this.state.urlMusic,
  //   };
  //   const headers = {
  //     headers: {
  //       Authorization: "wictor-feitosa-hooks",
  //     },
  //   };
  //   try {
  //     const response = await axios.get(url, headers, body);
  //     this.setState({ musicas: response.data.result.tracks });
  //   } catch (error) {
  //     alert("track não encontrada");
  //   }
  // };

  // createPlaylist = async () => {
  //   const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`;

  //   const body = {
  //     name: this.state.nome,
  //   };

  //   const headers = {
  //     headers: {
  //       Authorization: "wictor-feitosa-hooks",
  //     },
  //   };
  //   try {
  //     const response = await axios.post(url, body, headers);
  //     // alert("Usuário criado com sucesso");
  //     this.setState({ nome: "" });
  //     this.getAllPlaylists();
  //   } catch (error) {
  //     alert(error.response.data.message);
  //     this.setState({ nome: "" });
  //     this.getAllPlaylists();
  //   }
  // };

  // addTrackToPlaylist = async (id) => {
  //   const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;
  //   const body = {
  //     name: this.state.nameMusic,
  //     artist: this.state.musicas,
  //     url: this.state.musicas,
  //   };
  //   const headers = {
  //     headers: {
  //       Authorization: "wictor-feitosa-hooks",
  //     },
  //   };
  //   try {
  //     const response = await axios.post(url, headers, body);
  //     this.setState({ musicas: response.data.result.list });      
  //   } catch (error) {
  //     alert("Musica não adicionada");
  //   }
  // };
  
  // deletePlaylist = async (id) => {
  //   const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;

  //   const headers = {
  //     headers: {
  //       Authorization: "wictor-feitosa-hooks",
  //     },
  //   };

  //   const body = {
  //     name: this.state.nome,
  //     artist: this.state.playLists,
  //     url: this.state.playLists,
  //   };

  //   try {
  //     await axios.delete(url, headers, body);
  //     // alert("Deletado")
  //     this.getAllPlaylists();
  //   } catch (error) {
  //     alert(error.response.data.message);
  //     this.getAllPlaylists();
  //   }
  // };

  removeTrackFromPlaylist

  // nomeManual = (event) => {
  //   const newNameValue = event.target.value;
  //   this.setState({ nome: newNameValue });
  // };
  // musicNameManual = (event) => {
  //   const newMusicName = event.target.value;
  //   this.setState({ nameMusic: newMusicName });
  // };
  // musicArtistManual = (event) => {
  //   const newMusicArtis = event.target.value;
  //   this.setState({ artistMusic: newMusicArtis });
  // };
  // urlManual = (event) => {
  //   const newUrl = event.target.value;
  //   this.setState({ urlMusic: newUrl });
  // };

  state = {
    currentScreen: "playlist",
    idCurrent:"",
    // nome: "",
    // nameMusic: "",
    // artistMusic: "",
    // urlMusic: "",
    // playLists: [],
    // musicas: [],
  };

  goToTrackPage =(id)=>{
    this.setState({currentScreen: "track", idCurrent:id })
  }

  goToPlaylistPage =()=>{
    this.setState({currentScreen: "playlist", idCurrent:"" })
  }  

  gotCadastroPage =()=>{
    this.setState({currentScreen: "cadastro", idCurrent:"" })
  }


  selectPage = () => {
    switch (this.state.currentScreen) {
      case "track":
        return <TracksPage
        goToPlaylistPage={this.goToPlaylistPage}
        idCurrent={this.state.idCurrent}
        />    
      case "playlist":
        return <PlaylistPage
        gotCadastroPage={this.gotCadastroPage}
        goToTrackPage={this.goToTrackPage}
        />
        case "cadastro":
        return 
      default:
        return "404 sem página selecionada"
    }
  }

  render() {    
    return (
      <Main> 
        {this.selectPage()}              
        {/* <Div>
          <Pad
            placeholder="Playlist name"
            type="text"
            value={this.state.nome}
            onChange={this.nomeManual}
          />
          
          <Button onClick={this.createPlaylist}>Criar Playlist</Button>
        </Div>
        <Button onClick={this.addTrackToPlaylist}>alguma coisa aqui{AddTrack}</Button>
        {playListsCriadas}
        {trascksOnPlaylist} */}
      </Main>
    );
  }
}
