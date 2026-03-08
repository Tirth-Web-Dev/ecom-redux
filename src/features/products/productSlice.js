import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../../data/products";
const productSlice = createSlice({
    name: "products",
    initialState: {
        items: productsData
    },
    reducers:{
        
    }
})

export default productSlice.reducer;