import * as actionTypes from './actionTypes'

const url = "http://localhost:3000/"

export function changeCategory(category) {
    return { type: actionTypes.CHANGE_CATEGORY, payload: category }
}

export function getCategoriesSuccess(categories){
    return {type:actionTypes.GET_CATEGORIES_SUCCESS,payload:categories}
}

export function getCategories() {
    //asenkron operasyonlarda thunk yapısını kullanıyoruz
    return function (dispatch) {
        let newUrl = url + "categories"
        return fetch(newUrl).then(response => response.json())
            .then(result => dispatch(getCategoriesSuccess(result)))
    }
}