
import notificationAuth from './notification/auth';
import notificationStatus from './notification/status';



export type Situation = 'success' | 'hint'| 'error' | 'warning';



export interface Notification {
    [index:string]: {
        situation: Situation;
        time?: 'normal' | 'short' | 'long' | 'lasting';
    };
}

const notification: Notification = {
    
    ...notificationAuth,
    ...notificationStatus
    
}

export default notification;