import axios from "axios";
import React from "react";
import { urlSemId } from "../../constants/urls";
import LabeFy from "./video/LabeFY.mp4";
import {Video,ConteinerVideo} from "./styled"

const urlGet =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

export default class HomePage extends React.Component {
  render() {
    return (
      <ConteinerVideo> 
        <Video onClick={this.props.goToPlaylistPage} autoPlay muted >
          <source src={LabeFy} type="video/mp4" />
        </Video>
      </ConteinerVideo>
    );
  }
}
