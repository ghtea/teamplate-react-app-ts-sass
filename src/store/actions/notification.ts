//const department: string = 'notification';


export const REPLACE = `notification_REPLACE`;    // 뒤에 as const 를 붙이면 reducer 에서 notification.REPLACE 로 쓸때 오류 뜬다. 아직 이해못

export const return_REPLACE = (payload:any) => {
    return {
        type: REPLACE,
        payload: payload
    }
};

export type type_REPLACE = ReturnType<typeof return_REPLACE>;

/*
type typeAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;
  */
// typescript 안의 type 과 redux 의 type 구분 주의!
