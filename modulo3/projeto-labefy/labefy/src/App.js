import "./App.css";
import { Main, Pad, Card, Button, Div } from "./components/Style";
import React from "react";
import axios from "axios";
import PlaylistPage from "./pages/PlaylistPage/PlaylistPage";
import TracksPage from "./pages/TracksPage/TracksPage";
import HomePage from "./pages/Home/HomePage";
import { urlSemId, headers } from "./constants/urls";

export default class App extends React.Component {
  // ====  estado  ====
  state = {
    currentScreen: "home"
  };

  // ====  seletores para alterar o estado "currentScreen"  ====
  goToTrackPage = (id) => {
    this.setState({ currentScreen: "track", playlistId: id });
  };

  goToPlaylistPage = () => {
    this.setState({ currentScreen: "playlist", playlistId: "" });
  };

  goToCadastroPage = () => {
    this.setState({ currentScreen: "cadastro" });
  };

  goToHomePage =()=>{
    this.setState({currentScreen: "home"})
  }

  // ====  seletor para página atual  ====
  selectPage = () => {
    switch (this.state.currentScreen) {
      case "track":
        return (
          <TracksPage
            goToPlaylistPage={this.goToPlaylistPage}
            playlistId={this.state.playlistId}            
          />
        );
      case "playlist":
        return (
          <PlaylistPage
            goToCadastroPage={this.goToCadastroPage}
            goToTrackPage={this.goToTrackPage}
          />
        );
      case "cadastro":
        return(
          <TracksPage
          goToPlaylistPage={this.goToPlaylistPage}
        goToTrackPage={this.goToTrackPage}
          />
        );

      case "home":
        return (
        <HomePage
        goToPlaylistPage={this.goToPlaylistPage}
        goToTrackPage={this.goToTrackPage}
      />
      );
    }
  };

  render() {
    return <Main>{this.selectPage()}</Main>;
  }
}
