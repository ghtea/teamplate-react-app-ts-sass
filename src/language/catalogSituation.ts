
import catalogSituationAuth from './catalogSituation/auth';
import catalogSituationStatus from './catalogSituation/status';
import {TimeBanner} from 'store/actions/notification';


export type KindSituation = 'success' | 'hint'| 'error' | 'warning';

export interface CatalogSituation {
    [index:string]: {
        kind: KindSituation;
        time?: TimeBanner;
    };
}

const catalogSituation: CatalogSituation = {
    
    ...catalogSituationAuth,
    ...catalogSituationStatus
    
}

export default catalogSituation;