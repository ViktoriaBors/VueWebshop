import {ref} from "vue"

const getProducts = ()=>{
    const products = ref([])
    const error = ref(null)

    const loadData = async  ()=>{
        try{
            
            let data = await fetch("https://fakestoreapi.com/products")
            if(!data.ok){
                throw new Error ("no data found")
            }
            products.value = await data.json()
            
        }
        catch(error){
            error.value = error.message
        }
    }

    loadData()

    return {products, error, loadData}
}

export default getProducts