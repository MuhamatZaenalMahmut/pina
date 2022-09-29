import { income_cat, outcome_cat, source, detail } from './db';

const initialState = {
    income_cat: income_cat,
    outcome_cat: outcome_cat,
    source: source,
    detail: detail
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SAMPLE':
            return {
                ...state,
                isError: false
            };
        default:
            return state
    }
}