import React, { useCallback, useMemo, useEffect } from "react";

import { useHistory, useLocation } from "react-router-dom";

import {useSelector, useDispatch} from "react-redux";
import {StateRoot} from 'store/reducers';
import * as actionsNotification from 'store/actions/notification';

import {Banner as TypeBanner} from 'store/reducers/notification';

import IconXCircle from 'svgs/basic/IconXCircle';

import IconSuccess from 'svgs/notification/IconSuccess';
import IconHint from 'svgs/notification/IconHint';
import IconError from 'svgs/notification/IconError';
import IconWarning from 'svgs/notification/IconWarning';


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
  
  
  const propsIconSituation = useMemo( (): any => {
    return ({
      width: '24px',
      height:'24px',
      listKeyTheme: ['color', 'Notification', `banner___icon__${banner['kindSituation']}`],
      className: banner['kindSituation'],
      kind: 'regular'  
    })
  }, []);

  
  return (
    <Styled.Div__Banner
      className={banner['kindSituation']}
      kindSituation={banner['kindSituation']}
    >
      <div>
        {banner['kindSituation'] === 'success' &&  <IconSuccess {...propsIconSituation} /> }
        {banner['kindSituation'] === 'hint' &&  <IconHint {...propsIconSituation} /> }
        {banner['kindSituation'] === 'error' &&  <IconError {...propsIconSituation} /> }
        {banner['kindSituation'] === 'warning' &&  <IconWarning {...propsIconSituation} /> }
      </div>
        
      <div> {banner['message']} </div>
      
      <div> 
        <Styled.Button__Banner_Delete
          onClick={()=>onClick_DeleteBanner(banner['id'])}
        >  
          <IconXCircle 
            width={'20px'} 
            height={'20px'} 
            listKeyTheme={['color', 'Notification', `banner___icon__${banner['kindSituation']}`]}
            className={banner['kindSituation']}
            kind={'light'}
          />
          <IconXCircle 
            width={'20px'} 
            height={'20px'} 
            listKeyTheme={['color', 'Notification', `banner___icon__${banner['kindSituation']}`]}
            className={banner['kindSituation']}
            kind={'solid'}
          />
        </Styled.Button__Banner_Delete>
      </div>
      
      
      
    </Styled.Div__Banner>
  );
}

Banner.defaultProps = {
  
};

export default Banner;


/*
전체 요소들이 리렌더링 되면 그 요소의 애니메이션이 없어지는 

<Styled.Div__Banner_Guage
        className={banner['situation']}
        banner={banner}
      />
*/