import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import * as Styled from './Home_Styled';


type PropsHome = {};

function Home({}: PropsHome) {
  
  //const history = useHistory();

  return (
    <Styled.Div__Home>
        <div> This app is a template for React app </div>
    </Styled.Div__Home>
  );
}

Home.defaultProps = {};

export default Home;
