import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next'

import {useSelector, useDispatch} from "react-redux";
import {StateRoot} from 'store/reducers';
import * as actionsStatus from 'store/actions/status';

import * as Styled from './CategoryDestination_Styled';
import IconHome from 'svgs/basic/IconHome';
import IconSignIn from 'svgs/basic/IconSignIn';
import IconGlobe from 'svgs/basic/IconGlobe';


type PropsCategoryDestination = {
  idCategory: string,
  listIdLink: string[]
};

function CategoryDestination({
  idCategory,
  listIdLink
}: PropsCategoryDestination) {
  
  let history = useHistory();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  
  
  // event: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, 
  const onClick_LinkInsideApp = useCallback(
    (destination:string) => {
      history.push(destination);
    },[history]
  );
  
  
  const [idSpotlighted, setIdSpotlighted] = useState("");
	
	const onMouseEnter_CategoryDestination = useCallback(
    (event, newIdSpotlighted) => {
    		setIdSpotlighted(newIdSpotlighted);
    },
    [idSpotlighted]
  );
  const onMouseLeave_CategoryDestination = useCallback(
    (event, newIdSpotlighted) => {
    		setIdSpotlighted("");
    },
    [idSpotlighted]
  );
  
	const onClick_CategoryDestination_Title  = useCallback(
    (event, newIdSpotlighted) => {
    	
    	if (idSpotlighted !== newIdSpotlighted){
    		setIdSpotlighted(newIdSpotlighted);
    	}
    	else {
    		setIdSpotlighted("");
    	}
    	console.log(idSpotlighted)
    },
    [idSpotlighted]
  );
  
  
  
  return (
    
		<Styled.Div__CategoryDestination
			onMouseEnter ={(event)=> onMouseEnter_CategoryDestination(event, 'Category1') }
      onMouseLeave ={(event)=> onMouseLeave_CategoryDestination(event, "") }
		>
		
			<Styled.Div__CategoryDestination_Title 
        onClick = {(event)=>onClick_CategoryDestination_Title (event, 'Category1') }
			> {t(`Nav.${idCategory}`)}  
			</Styled.Div__CategoryDestination_Title>
			
			<Styled.Div__CategoryDestination_Popup
				spotlighted={idSpotlighted===idCategory}
			> 
				<div>
				
				  {listIdLink.map( (idLink) => (
				    <Styled.Div__Link
  					  onClick={()=>onClick_LinkInsideApp(`/${idCategory}/${idLink}`)}
  					> <a> {t(`Nav.${idCategory}_${idLink}`)} </a> 
  					</Styled.Div__Link>
				  )}
				  
				</div>
			</Styled.Div__CategoryDestination_Popup>
			
		</Styled.Div__CategoryDestination>
  
  );
}

CategoryDestination.defaultProps = {};

export default CategoryDestination;



// <Div_Triangle lengthBasic={12} onClick = {(event)=>onClick_NavGroupItemTitle(event, 'Color') } />