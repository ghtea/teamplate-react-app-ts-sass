import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import * as Styled from './Nav2__Styled';
import IconHome from 'svgs/basic/IconHome';


type PropsNav2 = {};

function Nav2({}: PropsNav2) {
  
  const history = useHistory();
  
  const onClick_LinkInsideApp = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>, destination:string) => {
      history.push(destination);
    },[history]
  );
  
  return (
    <Styled.Div__Nav2>
      <div>
        <button
          onClick={(event)=>onClick_LinkInsideApp(event, '/')}
        >
          <IconHome/>
        </button>
      </div>
      
      <Styled.Div__CollectionLink>
        <div> test </div>
        <div> test </div>
      </Styled.Div__CollectionLink>
      
      <div>
        right: login
      </div>
    </Styled.Div__Nav2>
  );
}

Nav2.defaultProps = {};

export default Nav2;
