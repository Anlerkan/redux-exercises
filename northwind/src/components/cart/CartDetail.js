import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as cartActions from '../../redux/actions/cartActions'
import {Table,Button} from 'reactstrap'

class CartDetail extends Component {

    removeFromCart(product){
        return this.props.actions.removeFromCart(product);
    }
    render() {
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.map(cartItem => (
                            <tr key={cartItem.product.id}>
                                <th scope="row">{cartItem.product.id}</th>
                                <td>{cartItem.product.productName}</td>
                                <td>{cartItem.product.unitPrice}</td>
                                <td>{cartItem.product.quantity}</td>
                                <td>{cartItem.product.unitsInStock}</td>
                                <td>
                                    <Button color="danger" onClick={()=>this.removeFromCart(cartItem.product)} >Remove</Button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}
function mapDispatchToProps(dispatch){
    return {
        actions:{
            removeFromCart:bindActionCreators(cartActions.removeFromCart,dispatch)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartDetail)