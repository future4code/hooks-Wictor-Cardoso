import React, { useState, useEffect } from "react";
import axios from "axios";
import CardMatch from "./Pages/CardMatch/CardMatch";
import { Main } from "./styles";

export default function App() {
  return (
    <Main>
      {/*styled component*/}
      <CardMatch>{}</CardMatch> {/*component*/}
    </Main>
  );
}
