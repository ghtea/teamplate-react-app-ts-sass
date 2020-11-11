import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import * as Styled from './Nav1__Styled';

type PropsNav1 = {};

function Nav1({}: PropsNav1) {
  
  //const history = useHistory();

  return (
    <Styled.Div__Nav1>
      
      <Styled.Div__Bar> 
        <div>
          logo
        </div>
        
        <div>
          title
        </div>
        
        <div>
          hide/show
        </div>
      </Styled.Div__Bar> 
      
      <Styled.Div__Board>
        board
      </Styled.Div__Board>
      
    </Styled.Div__Nav1>
  );
}

Nav1.defaultProps = {};

export default Nav1;
