import { combineReducers } from 'redux';
import { filmsOmdb } from './filmsOmdb';

const rootReducer = combineReducers({
    filmsOmdb,
});

export default rootReducer;
