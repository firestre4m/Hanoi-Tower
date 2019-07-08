export const MOVE_DISC = 'MOVE_DISC';
export const RESET = 'RESET';
export const GAMEOVER = 'GAMEOVER';
export const ADD_DICS = 'ADD_DICS';
export const DEC_DICS = 'DEC_DICS';

export const moveDisc = (from, to)  => ({
    type: MOVE_DISC,
    from: from,
    to: to
});

export const reset = () => ({
    type: RESET
});

export const gameover = () => ({
    type: GAMEOVER
});

export const addDics = () => ({
    type: ADD_DICS,
})

export const decDics = () => ({
    type:DEC_DICS,
})
