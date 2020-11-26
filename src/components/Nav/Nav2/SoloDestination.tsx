import React, { useCallback, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next'

import {useSelector, useDispatch} from "react-redux";
import {StateRoot} from 'store/reducers';
import * as actionsStatus from 'store/actions/status';

import * as convertName from 'tools/vanilla/convertName';

import * as Styled from './SoloDestination_Styled';
import IconHome from 'svgs/basic/IconHome';
import IconSignIn from 'svgs/basic/IconSignIn';
import IconGlobe from 'svgs/basic/IconGlobe';


type PropsSoloDestination = {
  idSolo: string
  
};

function SoloDestination({idSolo}: PropsSoloDestination) {
  
  let history = useHistory();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  
  // event: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>,
  const onClick_LinkInsideApp = useCallback(
    ( destination:string) => {
      history.push(destination);
    },[history]
  );
  
  const idSolo_SnakeCase = useMemo(()=>{
    
    return convertName.convertPascalToSnake(idSolo)
    
  },[idSolo])

  return (

	  <Styled.Div__SoloDestination>
      <div> 
        <a
          onClick={()=>onClick_LinkInsideApp(`/${ idSolo_SnakeCase}`)}
        > 
          {t(`Nav.${idSolo}`)} 
        </a> 
      </div>
    </Styled.Div__SoloDestination>
  
  );
}

SoloDestination.defaultProps = {};

export default SoloDestination;



// <Div_Triangle lengthBasic={12} onClick = {(event)=>onClick_NavGroupItemTitle(event, 'Color') } />