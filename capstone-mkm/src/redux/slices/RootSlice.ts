import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        fruit_or_vegetable: 'Fruit or Vegetable',
        style_of_pack: 'Style of Pack',
        jar_size: 'Jar Size',
        one_to_three_thousand_ft: '1,000 to 3,000 ft',
        three_to_six_thousand_ft: '3,001 to 6,000 ft',
        over_six_thousand_ft:'Over 6,000 ft',
    },
    reducers: {
        chooseFruit_or_vegetable: (state, action) => { state.fruit_or_vegetable = action.payload},
        chooseStyle_of_pack: (state, action) => { state.style_of_pack = action.payload},
        chooseJar_size: (state, action) => { state.jar_size = action.payload},
        chooseOne_to_three_thousand_ft:(state,action) => {state.one_to_three_thousand_ft = action.payload},
        chooseThree_to_six_thousand_ft: (state, action) => { state.three_to_six_thousand_ft = action.payload},
        chooseOver_six_thousand_ft:(state,action) => {state.over_six_thousand_ft = action.payload},
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseFruit_or_vegetable, chooseStyle_of_pack, chooseJar_size, chooseOne_to_three_thousand_ft, chooseThree_to_six_thousand_ft, chooseOver_six_thousand_ft } = rootSlice.actions;