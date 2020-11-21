import styled from 'styled-components';

export const Header__Nav2 = styled.header<{showingNav: boolean}>
`
  display: none;
  visibility: ${ (props)=> props.showingNav ?  'visible' : 'hidden'};
  
	@media (min-width: ${({theme})=>theme.size.device.minWidth_m}px) { // 320≤ xs < 576,   576 ≤ s < 768,   768 ≤ m < 992,   992 ≤ l < 1200,   1200 ≤ xl
	  
	  display: flex;
    flex-flow: row nowrap;   /* row */
    justify-content: space-evenly; align-items: center;
    
    box-sizing: border-box;
    border-bottom: 1px solid ${ ({theme})=>theme.color.Nav.nav2_name_app___border };  /* border: 2px dashed #aaa; */
    
    
    width: 100%;
    height: ${ ({theme})=>theme.size.nav.height_nav2 }px;   /* we should let 'Content' know this value too */ 
    font-size: 1rem;
    border-radius: 0px;
    
    position: fixed;
    z-index: 200;
    
    margin: 0px 0px 0px 0px; /* top right bottom left */
    padding: 0px 0px 0px 0px; /* top right bottom left */
  	
  	& > div:nth-child(1) {
      width: 200px;
    }
    & > div:nth-child(2) {
      width: calc(100% - 400px);  // 768-280 ~
    }
    & > div:nth-child(3) {
      width: 200px;
    }
  	
	}
  
`;


export const Div__NameApp = styled.div
`
  display: flex;
  flex-flow: row nowrap;   /* row */
  justify-content: flex-start; align-items: center;
  
  box-sizing: border-box;
  border: 0px solid #fff;  /* border: 2px dashed #aaa; */
  
  height: auto;
  font-size: 1rem;
  border-radius: 0px;
  
  position: static;
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
  
	
	& > *:nth-child(1) {
	  margin-left: 10px;
	}
  & > *:nth-child(2) {
    color: ${ ({theme})=>theme.color.Nav.nav2_name_app___font };  
  
	  font-size: 1.4rem;
	  font-weight: bold;
	  
	  margin-left: 10px;
	}
  
`;



export const Div__CollectionDestination = styled.div
`
  
  display: flex;
  flex-flow: row nowrap;   /* row */
  justify-content: center; align-items: center;
  
  box-sizing: border-box;
  border: 0px solid #fff;  /* border: 2px dashed #aaa; */
  background-color: transparent; 
  color: ${ ({theme})=>theme.color.Nav.nav2_link___font  };  
  
  /*width: 100%; */
  height: auto;
  font-size: 1rem;
  border-radius: 0px;
  
  position: static;
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
  
  & > div:nth-child(n+2){
    margin-left: 10px;
  }
  
  & > div {
    display: flex;
    flex-flow: column nowrap;   /* row */
    justify-content: center; align-items: center;
    
    box-sizing: border-box;
    border: 0px solid #fff;  /* border: 2px dashed #aaa; */
    
    
    width: auto;
    height: auto;
    
    border-radius: 0px;
    
    cursor: pointer;
    
    &:hover {
      color: ${ ({theme})=>theme.color.Nav.nav2_link___font__hover  };  
    }
  }
`;



export const Div__CollectionTool = styled.div
`
  display: flex;
  flex-flow: row nowrap;   /* row */
  justify-content: flex-end; align-items: center;
  
  box-sizing: border-box;
  border: 0px solid #fff;  /* border: 2px dashed #aaa; */
  
  background-color: transparent; 
  color: #000;
  
  height: auto;
  font-size: 1rem;
  border-radius: 0px;
  
  position: static;
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
  
	& > *:nth-child(1) {
	  margin-right: 10px;
	}
  
  
`;


export const Div__Tool = styled.div
`
  display: flex;
  flex-flow: row nowrap;   /* row */
  justify-content: flex-end; align-items: center;
  
  box-sizing: border-box;
  border: 0px solid #fff;  /* border: 2px dashed #aaa; */
  
  background-color: transparent; 
  color: #000;
  
  width: auto;
  height: auto;
  font-size: 1rem;
  border-radius: 0px;
  
  position: static;
  
  margin: 0px 0px 0px 0px; /* top right bottom left */
  padding: 0px 0px 0px 0px; /* top right bottom left */
  
  
	& > *:nth-child(1) {
	  margin-right: 10px;
	}
  
  & > a {
    display: flex;
    flex-flow: row nowrap;   /* row */
    justify-content: flex-end; align-items: center;
    color: ${ ({theme})=>theme.color.Nav.nav2_link___font  };  
    width: auto;
    
    
    & > div:nth-child(n+2){
      margin-left: 8px;
    }
    
    & > div {
      width: auto;
      color: 'inherit';  
    }
    
    &:hover {
      color: ${ ({theme})=>theme.color.Nav.nav2_link___font__hover};  
    }
    
    
  }
  
`;