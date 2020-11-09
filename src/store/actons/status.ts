//const prefix: string = 'status/';


export const REPLACE_STATUS = `REPLACE_STATUS`;

export const return_REPLACE_STATUS = (payload:any) => {
    return {
        type: REPLACE_STATUS,
        payload: payload
    }
};

type typeAction = ReturnType<typeof return_REPLACE_STATUS>;

// typescript 안의 type 과 redux 의 type 구분 주의!
