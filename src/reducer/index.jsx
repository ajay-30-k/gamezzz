
import {combineReducers}from 'redux'
import gamesreducer from'./gamesreducer';
import Detailreducer from './Detailreducer';
const rootreducer=combineReducers({
    games:gamesreducer,
    detail:Detailreducer,

})
export default rootreducer;