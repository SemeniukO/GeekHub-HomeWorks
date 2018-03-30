
export  default function disableButton(state = [true], action) {
    if (action.type === 'DISABLE_BUTTON') {
        return [action.payload]}

    return state;
}