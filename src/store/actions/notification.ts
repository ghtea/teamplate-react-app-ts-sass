//const department: string = 'notification';


export const name__ADD_NOTIFICATION: string = `notification/ADD_NOTIFICATION`;    // 뒤에 as const 를 붙이면 reducer 에서 notification.REPLACE 로 쓸때 오류 뜬다. 아직 이해못

interface Payload__ADD_NOTIFICATION {
    code: string;
    id?: string;
}

export const return__ADD_NOTIFICATION = (payload: Payload__ADD_NOTIFICATION) => {    
    return {
        type: name__ADD_NOTIFICATION,
        payload: payload
    }
};

export type type__ADD_NOTIFICATION = ReturnType<typeof return__ADD_NOTIFICATION>;



export const name__DELETE_NOTIFICATION: string = `notification/DELETE_NOTIFICATION`;    // 뒤에 as const 를 붙이면 reducer 에서 notification.REPLACE 로 쓸때 오류 뜬다. 아직 이해못

interface Payload__DELETE_NOTIFICATION {
    idNotification: string;
}

export const return__DELETE_NOTIFICATION = (payload: Payload__DELETE_NOTIFICATION) => {    
    return {
        type: name__DELETE_NOTIFICATION,
        payload: payload
    }
};

export type type__REMOVE_NOTIFICATION = ReturnType<typeof return__DELETE_NOTIFICATION>;





export const name__ADD_DELETE_NOTIFICATION: string = `notification/ADD_DELETE_NOTIFICATION`;    // 뒤에 as const 를 붙이면 reducer 에서 notification.REPLACE 로 쓸때 오류 뜬다. 아직 이해못

interface Payload__ADD_DELETE_NOTIFICATION {
    code: string;
}

export const return__ADD_DELETE_NOTIFICATION = (payload: Payload__ADD_DELETE_NOTIFICATION) => {    
    return {
        type: name__ADD_DELETE_NOTIFICATION,
        payload: payload
    }
};

export type type__ADD_DELETE_NOTIFICATION = ReturnType<typeof return__ADD_DELETE_NOTIFICATION>;


/*
type typeAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;
  */
// typescript 안의 type 과 redux 의 type 구분 주의!




/*
    Notification
        {
            id: 'ddd',
            situation: '',
            message: 'ddd',
            created: 2020. ...
        }
*/