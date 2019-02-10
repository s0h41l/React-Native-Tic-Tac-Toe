import {Text} from 'react-native';
import React from 'react';


const Reducer=(state={board:["","","","","","","","",""],player:0,turn:0},action)=>{
    switch(action.type){
        case "PLACE_PEG_P_1":
            b=state.board;
            b[action.pos]="X";
            return {...state,board:b};
        case "PLACE_PEG_P_2":
            b=state.board;
            b[action.pos]="O";
            return {...state,board:b};
        case "CHANGE_PLAYER":
            return {...state,player:1-state.player};
        case "RESET_GAME":
            return {...state,board:["","","","","","","","",""]};
        default:
            return state;
        
    }
}


export default Reducer;