import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import {useSelector, useDispatch} from "react-redux";
import {StateRoot} from 'store/reducers';

import * as Styled from './Nav2_Styled';
import IconHome from 'svgs/basic/IconHome';
import IconSignIn from 'svgs/basic/IconSignIn';


type PropsNav2 = {};

function Nav2({}: PropsNav2) {
  
  const history = useHistory();
  
  const showingNav:boolean = useSelector((state: StateRoot) => state['status']['showing']['nav']['all']);
  const nameTheme:string = useSelector((state: StateRoot) => state['status']['current']['theme']['name']);
  
  const onClick_LinkInsideApp = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, destination:string) => {
      history.push(destination);
    },[history]
  );
  
  return (
    <Styled.Header__Nav2
      showingNav={showingNav}
    >
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
      
        <Styled.Div__Tool>
          <a
            onClick={(event)=>onClick_LinkInsideApp(event, '/log-in')}
          >
            <IconSignIn
              color={'inherit'}
              width={'28px'}
              height={'28px'}
            />
            <div> Log In </div>
          </a>
        </Styled.Div__Tool>
        
      </Styled.Div__CollectionTool>
      
    </Styled.Header__Nav2>
  );
}

Nav2.defaultProps = {};

export default Nav2;
