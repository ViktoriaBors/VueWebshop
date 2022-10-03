import {ref, shallowRef} from "vue"

const getProducts = ()=>{
    const products = shallowRef([])
    const error = ref(null)
    
    const loadData = async (search, category)=>{          
            try{
                let data = await fetch("https://fakestoreapi.com/products")
                console.log("load data")
                if(category){
                    console.log("just category")
                    data = await fetch("https://fakestoreapi.com/products/category/" + category)
                    if(!data.ok){
                        throw new Error ("no data found")
                    }
                    products.value = await data.json()
                    if(search){
                        console.log("category+search")
                        products.value = products.value.filter(product => product.title.match(search))
                    }
                } else if(search){
                    if(!data.ok){
                        throw new Error ("no data found")
                    }
                    console.log("just search")
                    products.value = products.value.filter(product => product.title.match(search))
                } else {
                    console.log("no filter option")
                    products.value = await data.json()
                }
            }
            catch(error){
                error.value = error.message
            }
        }

    loadData()

    return {products, error, loadData}
}

export default getProducts