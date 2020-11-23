
import catalogSituationAuth from './catalogSituation/auth';
import catalogSituationStatus from './catalogSituation/status';



export type KindSituation = 'success' | 'hint'| 'error' | 'warning';
export type TimeSituation = 'normal' | 'short' | 'long' | 'lasting';


export interface CatalogSituation {
    [index:string]: {
        kind: KindSituation;
        time?: TimeSituation;
    };
}

const catalogSituation: CatalogSituation = {
    
    ...catalogSituationAuth,
    ...catalogSituationStatus
    
}

export default catalogSituation;