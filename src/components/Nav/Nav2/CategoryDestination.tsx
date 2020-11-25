import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next'

import {useSelector, useDispatch} from "react-redux";
import {StateRoot} from 'store/reducers';
import * as actionsStatus from 'store/actions/status';

import * as Styled from './CategoryDestination_Styled';

import IconAngle from 'svgs/basic/IconAngle';


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
		    onMouseEnter ={(event)=> onMouseEnter_CategoryDestination(event, idCategory) }
            onMouseLeave ={(event)=> onMouseLeave_CategoryDestination(event, "") }
		>
		
			<Styled.Div__CategoryDestination_Title 
        onClick = {(event)=>onClick_CategoryDestination_Title (event, idCategory) }
			> 
			  <div> 
			    <a> {t(`Nav.${idCategory}`)}  </a>
			  </div>
			  <div> 
			    <IconAngle 
			      width={'20px'} 
			      height={'20px'}
			      color={'inherit'}
			      directon={'down'}
			    /> 
			   </div>
			</Styled.Div__CategoryDestination_Title>
			
			<Styled.Div__CategoryDestination_Popup
				spotlighted={idSpotlighted===idCategory}
				
			> 
				
				<Styled.Div__CategoryDestination_Popup_TriangleFront/>
				<Styled.Div__CategoryDestination_Popup_TriangleBack/>
				<Styled.Div__CategoryDestination_Popup_TriangleBackground/>
				
				<Styled.Div__CategoryDestination_Popup_Box>
				  {listIdLink.map( (idLink, index) => (
				    <Styled.Div__Link
				        key={`idLink-${index}`}
  					    onClick={()=>onClick_LinkInsideApp(`/${idCategory}/${idLink}`)}
  					> <a> {t(`Nav.${idCategory}_${idLink}`)} </a> 
  					</Styled.Div__Link>
				  ))}
				</Styled.Div__CategoryDestination_Popup_Box>
				
			</Styled.Div__CategoryDestination_Popup>
			
		</Styled.Div__CategoryDestination>
  
  );
}

CategoryDestination.defaultProps = {};

export default CategoryDestination;



// <Div_Triangle lengthBasic={12} onClick = {(event)=>onClick_NavGroupItemTitle(event, 'Color') } />