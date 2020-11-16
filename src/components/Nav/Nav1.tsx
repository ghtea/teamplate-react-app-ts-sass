import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import {useSelector, useDispatch} from "react-redux";
import {StateRoot} from 'store/reducers';
import * as actionsStatus from 'store/actions/status';

import * as Styled from './Nav1_Styled';
import IconHome from 'svgs/basic/IconHome';
import IconThreeBars from 'svgs/basic/IconThreeBars';
import IconX from 'svgs/basic/IconX';



type PropsNav1 = {};

function Nav1({}: PropsNav1) {
  
  const history = useHistory();
  const dispatch = useDispatch();
  
  const showingNav:boolean = useSelector((state: StateRoot) => state['status']['showing']['nav']['all']);
  const showingBoardNav1:boolean = useSelector((state: StateRoot) => state['status']['showing']['nav']['boardNav1']);
  
  const onClick_LinkInsideApp = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, destination:string) => {
      history.push(destination);
      dispatch(actionsStatus.return_REPLACE({
        listKey:['showing', 'nav', 'boardNav1'],
        replacement: false
      }))
    },[history]
  );
  
  
  const onClick_ShowHideBoard = useCallback(
    
    (event:React.MouseEvent<HTMLButtonElement> ) => {
      event.preventDefault();
      
      dispatch(actionsStatus.return_REPLACE({
        listKey:['showing', 'nav', 'boardNav1'],
        replacement: !showingBoardNav1
      }))
      
    },
    
    [showingBoardNav1]
  );
  

  
  return (
    <Styled.Header__Nav1
      showingNav={showingNav}
    >
      
      <Styled.Div__Bar> 
        <div>
          <button
            onClick={(event)=>onClick_LinkInsideApp(event, '/')}
          >
            <IconHome width={'30px'} height={'30px'} />
          </button>
        </div>
        
        <div>
          title
        </div>
        
        <div>
          <button
            onClick={(event)=>onClick_ShowHideBoard(event)}
          >
            {showingBoardNav1 ? (
            <IconX 
              className={"IconX"} width={'30px'} height={'30px'} />
            ) : (
            <IconThreeBars 
              className={"IconThreeBars"} width={'30px'} height={'30px'} />
            )}
          </button>
        </div>
      </Styled.Div__Bar> 
      
      {showingBoardNav1 && (
        <Styled.Div__Board>
          <div> 
            <a
              onClick={(event)=>onClick_LinkInsideApp(event, '/')}
            > Home
            </a>
          </div>
          <div> 
            <a
              onClick={(event)=>onClick_LinkInsideApp(event, '/log-in')}
            > Log In
            </a>
          </div>
        </Styled.Div__Board>
      )}
      
    </Styled.Header__Nav1>
  );
}

Nav1.defaultProps = {};

export default Nav1;
