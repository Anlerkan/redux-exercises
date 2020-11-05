import * as actionTypes from './actionTypes'

const url = "http://localhost:3000/"

export function getProductsSuccess(products){
    return {type:actionTypes.GET_PRODUCTS_SUCCESS,payload:products}
}

export function getProducts(categoryId) {
    //asenkron operasyonlarda thunk yapısını kullanıyoruz
    let newUrl = url+"products"
    if(categoryId){
         newUrl += "?categoryId="+categoryId
    }
    return function (dispatch) {
        return fetch(newUrl).then(response => response.json())
            .then(result => dispatch(getProductsSuccess(result)))
    }
}