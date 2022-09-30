import {ref} from "vue"

const getOneProduct = (pathName)=>{
    const product = ref([])
    const error = ref(null)

    const loadData = async  ()=>{
        try{
            
            let data = await fetch("https://fakestoreapi.com" + pathName)
            if(!data.ok){
                throw new Error ("no data found")
            }
            product.value = await data.json()
            
        }
        catch(error){
            error.value = error.message
        }
    }

    loadData()

    return {product, error, loadData}
}

export default getOneProduct