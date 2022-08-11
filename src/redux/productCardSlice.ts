import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const blackSneaker = require('../img/sneakers/blackSneaker.png');
const greySneaker = require('../img/sneakers/greySneaker.png');
const blueSneaker = require('../img/sneakers/blueSneaker.png');
const yellowSneaker = require('../img/sneakers/yellowSneaker.png');
const miniBlack = require('../img/sneakers/miniblack.png');
const miniGrey = require('../img/sneakers/minigrey.png');
const miniBlue = require('../img/sneakers/miniblue.png');
const miniYellow = require('../img/sneakers/miniyellow.png');

interface IinitialState {
    colors: Array<{name: string, color: string, selected: boolean}>;
    count: number;
    tabs: Array<{tabName: string, active: boolean}>;
    price: string;
    slider1: Array<string>;
    slider2: Array<{src: string, selected: boolean}>;
}

let initialState: IinitialState = {
    colors: [{name:'Чёрный', color: '#39393A', selected: true},{name:'Серый', color: '#B9B3B0',selected: false},
    {name:'Синий', color: '#5D70CE',selected: false},{name:'Оранжевый', color: '#FF9200',selected: false}],
    count: 1,
    tabs: [{tabName: 'Описание', active: false},{tabName: 'Характеристики', active: true},
    {tabName: 'Отзывы', active: false},],
    price: '12 000',
    slider1: [blackSneaker, greySneaker, blueSneaker, yellowSneaker],
    slider2: [{src:miniBlack, selected: true}, {src:miniGrey, selected: false}, 
        {src:miniBlue, selected: false}, {src: miniYellow, selected: false}],
    
}


export const productCardSlice = createSlice({
    name: 'productCardSlice',
    initialState,
    reducers: {
        chooseColor: (state, action: PayloadAction<number>) => {
            for(let i = 0; i < state.colors.length; i++) {
                if(i === action.payload) {
                    state.colors[i].selected = true
                } else {
                    state.colors[i].selected = false
                }
            }
            
        },
        countPlus: state => {state.count++},
        countMinus: state => {
            if(state.count <= 1) {
                state.count = 1
            } else {
                state.count--
            }
        },
        chooseTab: (state, action: PayloadAction<string>) => {
            for(let i = 0; i < state.tabs.length; i++) {
                if(action.payload === state.tabs[i].tabName) {
                    state.tabs[i].active = true;
                } else {
                    state.tabs[i].active = false;
                }
            }
        },
        chooseSlide: (state, action: PayloadAction<number>) => {
            for(let i = 0; i < state.colors.length; i++) {
                if(i === action.payload) {
                    state.slider2[i].selected = true
                } else {
                    state.slider2[i].selected = false
                }
            }
        }
    }
})

export const {chooseColor, countPlus, countMinus, chooseTab, chooseSlide} = productCardSlice.actions;