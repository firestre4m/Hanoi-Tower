import {MOVE_DISC, RESET, GAMEOVER, ADD_DICS, DEC_DICS} from '../actions/action';
import merge from 'lodash/merge';
import generateDiscs from '../../utils/generate_discs';

const DEFAULT_NUM = 3;

const initState = {
    count: DEFAULT_NUM,
    towers:[generateDiscs(DEFAULT_NUM),[],[]],
    discs:generateDiscs(DEFAULT_NUM),
    finish: false,
}

const rootReducer = (state = initState, action) => {
    let tempState = {};
    switch(action.type) {
        case MOVE_DISC:
            let temp = merge({}, state);
            const currDisc = temp.towers[action.from].shift();
            currDisc.loc = action.to;
            temp.towers[action.to].unshift(currDisc);
            return temp;
        case RESET:
            return initState;
        case GAMEOVER:
            let old = merge({}, state);
            return Object.assign({}, old, {finish:true});
        case ADD_DICS:
            tempState = merge(tempState, state);
            if (tempState.count < 7)
                tempState.count ++;
            tempState.towers = [generateDiscs(tempState.count), [], []];
            tempState.discs = generateDiscs(tempState.count);
            return tempState;
        case DEC_DICS:
            tempState = merge(tempState, state);
            if (tempState.count > 0)
                tempState.count --;
            tempState.towers = [generateDiscs(tempState.count), [], []];
            tempState.discs = generateDiscs(tempState.count);
            return tempState;
        default:
            return state;
    }
}

export default rootReducer;