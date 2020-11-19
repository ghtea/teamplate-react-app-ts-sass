import React, { useCallback, useEffect } from "react";

import { useHistory, useLocation } from "react-router-dom";

import {useSelector, useDispatch} from "react-redux";
import {StateRoot} from 'store/reducers';
import * as actionsNotification from 'store/actions/notification';

import {Banner as TypeBanner} from 'store/reducers/notification';

import IconXCircle from 'svgs/basic/IconXCircle';
//import IconBanner from 'svgs/basic/IconBanner';

import * as Styled from './Banner_Styled';


type PropsBanner = {
  banner: TypeBanner
};


function Banner({
  banner
}: PropsBanner) {
  
  const dispatch = useDispatch();
  
  const onClick_DeleteBanner = useCallback(
    (id:string) => {
      dispatch(actionsNotification.return__DELETE_BANNER({
        id: id
      }) )
    }, []
  );
  
  return (
    <Styled.Div__Banner
      className={banner['situation']}
    >
      
      <div>
        <IconXCircle 
          width={'24px'} 
          height={'24px'} 
          listKeyTheme={['color', 'Notification', `banner___font__${banner['situation']}`]}
          className={banner['situation']}
          kind={'light'}
        />
      </div>
        
      <div> {banner['message']} </div>
      
      <div> 
        <Styled.Div__Banner_ButtonClose
          onClick={()=>onClick_DeleteBanner(banner['id'])}
        >  
          <IconXCircle 
            width={'20px'} 
            height={'20px'} 
            listKeyTheme={['color', 'Notification', `banner___font__${banner['situation']}`]}
            className={banner['situation']}
            kind={'light'}
          />
          <IconXCircle 
            width={'20px'} 
            height={'20px'} 
            listKeyTheme={['color', 'Notification', `banner___font__${banner['situation']}`]}
            className={banner['situation']}
            kind={'solid'}
          />
        </Styled.Div__Banner_ButtonClose>
      </div>
    
    </Styled.Div__Banner>
  );
}

Banner.defaultProps = {
  
};

export default Banner;
