import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import {useSelector, useDispatch} from "react-redux";
import {StateRoot} from 'store/reducers';
import * as actionsStatus from 'store/actions/status';

import * as Styled from './Nav1__Styled';

type PropsNav1 = {};

function Nav1({}: PropsNav1) {
  
  //const history = useHistory();
  const dispatch = useDispatch();
  
  const showingNav1:boolean = useSelector((state: StateRoot) => state['status']['showing']['nav']['nav1']);
  
  
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
          logo
        </div>
        
        <div>
          title
        </div>
        
        <div>
          <button
            onClick={(event)=>onClick_ShowHideBoard(event)}
          >
            hide/show
          </button>
        </div>
      </Styled.Div__Bar> 
      
      {showingNav1 && (
        <Styled.Div__Board>
          board
        </Styled.Div__Board>
      )}
      
    </Styled.Div__Nav1>
  );
}

Nav1.defaultProps = {};

export default Nav1;
