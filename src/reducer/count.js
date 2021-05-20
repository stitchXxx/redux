export const count = (state = 2000, action) => {
    const { type, payload } = action;
    switch(type) {
        case 'changeCount':
            return ++state;
            break;
        case 'changeCountBySome':
            return state + payload;
            break;
        default:
            return state;
            break;
    }
}