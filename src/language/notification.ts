
import notificationAuth from './notification/auth';
import notificationStatus from './notification/status';




export interface Notification {
    [index:string]: {
        situation: 'success' | 'hint' | 'error' | 'warning';
        time?: 'normal' | 'short' | 'long' | 'lasting';
    };
}

const notification: Notification = {
    
    ...notificationAuth,
    ...notificationStatus
    
}

export default notification;