import productsAPI from '../API/api'

const SET_PRODUCTS = 'SET_PRODUCTS'
const SET_SEARCH = 'SET_SEARCH'


let initialState = {
    productsData: [],
    categories: [],
    search: '',

}



const productsReducer = (state = initialState, action ) => {
    switch (action.type) {
        case SET_PRODUCTS:
            const allCategories = action.payload.products.map(product => product.bsr_category)
            const categories = [... new Set(allCategories)]
            return {...state, productsData: action.payload.products, categories}
        case SET_SEARCH: 
            return {...state, search: action.payload }
        default: 
        return state; 
    } 

}

export const actions = {
    setProducts: (data)  => ({type: SET_PRODUCTS, payload: data}),
    setSearch: (search)  => ({type: SET_SEARCH, payload: search}) 
}



    
export const getArrayData = () => async (dispatch) => {

    const data = await productsAPI.getProducts()
    dispatch(actions.setProducts(data))

}

export default productsReducer