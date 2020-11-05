import * as actionTypes from './actionTypes'

const url = "http://localhost:3000/"

export function getProductsSuccess(products) {
    return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products }
}
export function createProductSuccess(product) {
    return { type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product }
}
export function updateProductSuccess(product) {
    return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product }
}

export function saveProductApi(product) {
    return fetch(url + "products/" + (product.id || ""), { 
        method: product.id?"PUT":"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(product)
    }).then(handleResponse).catch(handleError)
}

export function saveProduct(product){
    return function (dispatch) {
        return saveProductApi(product).then(savedProduct=>{
            product.id
            ?dispatch(updateProductSuccess(saveProduct))
            :dispatch(createProductSuccess(savedProduct))
        }).catch(error=>{throw error})
    }
}

export function getProducts(categoryId) {
    //asenkron operasyonlarda thunk yapısını kullanıyoruz
    let newUrl = url + "products"
    if (categoryId) {
        newUrl += "?categoryId=" + categoryId
    }
    return function (dispatch) {
        return fetch(newUrl).then(response => response.json())
            .then(result => dispatch(getProductsSuccess(result)))
    }
}

export async function handleResponse(response){
    if(response.ok){
        return response.json();
    }

    const error = await response.text()
    throw new Error(error);
}
export function handleError(error){
    console.error("An error occured!")
    throw error;
}