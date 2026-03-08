import { useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom";

export const useProductFilter = () => {
    const [searchParms] = useSearchParams();

    const myproducts = useSelector((state) => state.products.items);// all products
    const category = searchParms.get("category"); //shoes
    const sort = searchParms.get("sort"); //low-high
    const search = searchParms.get("search") //Nike
    
    let filteredProducts = [...myproducts];
    

    //filter
    if(category){
       filteredProducts =  filteredProducts.filter((p) => (
            p.category === category
            
        ))

    }
        //search
    if(search){
        filteredProducts = filteredProducts.filter((p) => (
            p.title.toLowerCase().includes(search.toLowerCase())
        ))
    }
    //sort
    if(sort === "low-high"){
        filteredProducts.sort((a, b) => a.price - b.price);
    }
    if(sort === "high-low"){
        filteredProducts.sort((a, b) => b.price - a.price)
    }


    return filteredProducts;

}