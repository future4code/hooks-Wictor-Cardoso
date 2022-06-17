import React, { useState, useEffect } from "react";
import { useNavigation } from "react-router-dom";

export default HomePage = () => {
  const navigate = useNavigation
  return(
    <div>
      <p>HomePage</p>
      <button>Voltar</button>
    </div>
    );
};
