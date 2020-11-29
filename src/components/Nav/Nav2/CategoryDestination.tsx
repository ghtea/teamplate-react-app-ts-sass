import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next'

import {useSelector, useDispatch} from "react-redux";
import {StateRoot} from 'store/reducers';
import * as convertName from 'tools/vanilla/convertName';

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
    (newIdSpotlighted) => {
    		setIdSpotlighted(newIdSpotlighted);
    },
    [idSpotlighted]
  );
  const onMouseLeave_CategoryDestination = useCallback(
    (newIdSpotlighted) => {
    		setIdSpotlighted("");
    },
    [idSpotlighted]
  );
  
	const onClick_CategoryDestination_Title  = useCallback(
    (newIdSpotlighted) => {
    	
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
		    onMouseEnter ={()=> onMouseEnter_CategoryDestination(idCategory) }
        onMouseLeave ={()=> onMouseLeave_CategoryDestination("") }
		>
		
			<Styled.Div__CategoryDestination_Title 
        onClick = {()=>onClick_CategoryDestination_Title(idCategory) }
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
			
			<Styled.Div__CategoryDestination_Modal
				spotlighted={idSpotlighted===idCategory}
				
			> 
				
				<Styled.Div__CategoryDestination_Modal_TriangleFront/>
				<Styled.Div__CategoryDestination_Modal_TriangleBack/>
				<Styled.Div__CategoryDestination_Modal_TriangleBackground/>
				
				<Styled.Div__CategoryDestination_Modal_Box>
				  {listIdLink.map( (idLink, index) => (
				    <Styled.Div__Link
				        key={`idLink-${index}`}
  					    onClick={()=>onClick_LinkInsideApp(`/${convertName.pascalToSnake(idCategory)}/${convertName.pascalToSnake(idLink)}`)}
  					> <a> {t(`Nav.${idCategory}_${idLink}`)} </a> 
  					</Styled.Div__Link>
				  ))}
				</Styled.Div__CategoryDestination_Modal_Box>
				
			</Styled.Div__CategoryDestination_Modal>
			
		</Styled.Div__CategoryDestination>
  
  );
}

CategoryDestination.defaultProps = {};

export default CategoryDestination;



// <Div_Triangle lengthBasic={12} onClick = {(event)=>onClick_NavGroupItemTitle(event, 'Color') } />