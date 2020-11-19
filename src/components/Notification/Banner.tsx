import React, { useCallback, useEffect } from "react";

import { useHistory, useLocation } from "react-router-dom";

import {useSelector, useDispatch} from "react-redux";
import {StateRoot} from 'store/reducers';
import * as actionsNotification from 'store/actions/notification';

import {Banner as TypeBanner} from 'store/reducers/notification';

//import IconBanner from 'svgs/basic/IconBanner';

import * as Styled from './Banner_Styled';


type PropsBanner = {
  banner: TypeBanner
};


function Banner({
  banner
}: PropsBanner) {
  

  return (
    <Styled.Div__Banner
      className={banner['situation']}
    >
      
      <div> {banner['situation']} </div>
        
      <div> {banner['message']} </div>
      
      <div> close </div>
    
    </Styled.Div__Banner>
  );
}

Banner.defaultProps = {
  
};

export default Banner;
