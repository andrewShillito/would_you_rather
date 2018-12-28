import { START_LOADING, END_LOADING } from "../actions/loading";

export default function loading(store = true, action) {
    switch(action.type) {
        case START_LOADING:
            return true;
        case END_LOADING:
            return false;
        default:
            return false;
    }
}