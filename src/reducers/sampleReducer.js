import { income_cat, outcome_cat, source } from './db';

const initialState = {
    income_cat: income_cat,
    outcome_cat: outcome_cat,
    source: source
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SAMPLE':
            return {
                ...state,
                onboarding: false,
                isError: false
            };
        default:
            return state
    }
}