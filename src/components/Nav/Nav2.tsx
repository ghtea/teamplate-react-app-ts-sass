import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import {useSelector, useDispatch} from "react-redux";
import {StateRoot} from 'store/reducers';

import * as Styled from './Nav2__Styled';
import IconHome from 'svgs/basic/IconHome';
import IconSignIn from 'svgs/basic/IconSignIn';


type PropsNav2 = {};

function Nav2({}: PropsNav2) {
  
  const history = useHistory();
  
  const nameTheme:string = useSelector((state: StateRoot) => state['status']['current']['theme']['name']);
  
  const onClick_LinkInsideApp = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>, destination:string) => {
      history.push(destination);
    },[history]
  );
  
  return (
    <Styled.Div__Nav2>
      <Styled.Div__Title>
        <button
          onClick={(event)=>onClick_LinkInsideApp(event, '/')}
        >
          <IconHome
            listKeyTheme={['color', 'Nav', 'nav2_title___logo']}
            width={'36px'}
            height={'36px'}
          />
        </button>
        <button
          onClick={(event)=>onClick_LinkInsideApp(event, '/')}
        >
          React App
        </button>
      </Styled.Div__Title>
      
      <Styled.Div__CollectionLink>
        <div> category1 </div>
        <div> category2 </div>
      </Styled.Div__CollectionLink>
      
      <Styled.Div__CollectionTool>
        <button
          onClick={(event)=>onClick_LinkInsideApp(event, '/log-in')}
        >
          <IconSignIn
            listKeyTheme={['color', 'Nav', 'nav2_tool___icon']}
            width={'28px'}
            height={'28px'}
          />
        </button>
      </Styled.Div__CollectionTool>
      
    </Styled.Div__Nav2>
  );
}

Nav2.defaultProps = {};

export default Nav2;
