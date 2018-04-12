export default function show (state = ['none','none'], action) {
    if (action.type === 'NONE') {
        return [action.payload,state[1]]

    }
    if (action.type === 'NONE_LIST') {
        return [state[0],action.payload]

    }
    return state;
}