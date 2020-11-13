import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import {useSelector, useDispatch} from "react-redux";
import {StateRoot} from 'store/reducers';
import * as actionsStatus from 'store/actions/status';

import * as Styled from './Nav1__Styled';
import IconHome from 'svgs/basic/IconHome';
import IconThreeBars from 'svgs/basic/IconThreeBars';
import IconX from 'svgs/basic/IconX';



type PropsNav1 = {};

function Nav1({}: PropsNav1) {
  
  const history = useHistory();
  const dispatch = useDispatch();
  
  const showingNav1:boolean = useSelector((state: StateRoot) => state['status']['showing']['nav']['nav1']);
  
  const onClick_LinkInsideApp = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>, destination:string) => {
      history.push(destination);
    },[history]
  );
  
  
  const onClick_ShowHideBoard = useCallback(
    
    (event:React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      
      dispatch(actionsStatus.return_REPLACE({
        listKey:['showing', 'nav', 'nav1'],
        replacement: !showingNav1
      }))
    },
    
    [showingNav1]
  );
  

  
  return (
    <Styled.Div__Nav1>
      
      <Styled.Div__Bar> 
        <div>
          <button
            onClick={(event)=>onClick_LinkInsideApp(event, '/')}
          >
            <IconHome/>
          </button>
        </div>
        
        <div>
          title
        </div>
        
        <div>
          <button
            onClick={(event)=>onClick_ShowHideBoard(event)}
          >
            {showingNav1 ? (<IconX/>) : (<IconThreeBars/>)}
          </button>
        </div>
      </Styled.Div__Bar> 
      
      {showingNav1 && (
        <Styled.Div__Board>
          <div> home </div>
          <div> login </div>
        </Styled.Div__Board>
      )}
      
    </Styled.Div__Nav1>
  );
}

Nav1.defaultProps = {};

export default Nav1;
