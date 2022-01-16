import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './state/index'
const Shop = () => {
    const dispatch = useDispatch();
    const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators,dispatch)

    return (
        <div className="card" style={{'width': '18rem'}}>
            <img className="card-img-top" src="..." alt="Some Error"/>
                <div className="card-body">
                    <h5 className="card-title">Adidas Shoes</h5>
                    <p className="card-text">Rs = 50</p>
                    <div className="container d-flex">
                    <button className="btn btn-primary" onClick={()=>depositMoney(50)}>-</button>
                    <p className='mx-2'>Add to cart</p>
                    <button className="btn btn-primary" onClick={()=>withdrawMoney(50)}>+</button>
                    </div>
                </div>
        </div>
    )
}

export default Shop
