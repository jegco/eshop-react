import React from 'react';
import './Paycar.css';
import ProductService from '../../services/ProductService';
import NavigationComponent from '../navigation/Navigation';

class PaycarComponent extends React.Component {

    constructor() {
        super()
        this.state = { products: [], fetching: true, subtotal: 0 }
    }

    async componentDidMount() {
        const response = await ProductService.getPaycar();
        let currentSubtotal = 0
    
        response.map(item =>{ if(item !== null) {currentSubtotal += item.product.price * item.quantity} })
        this.setState({
            products: response,
            fetching: false,
            subtotal: currentSubtotal
        })
    }

    render() {
        const { products, fetching, subtotal } = this.state
        return (
            <div className="s12 shop">
                <NavigationComponent />
                <div className="row">
                    {fetching ? <div className="progress">
                        <div className="indeterminate"></div>
                    </div> : <div id="container">
                            <div className="card">
                                <div className="card-content">
                                    <ul className="collection">
                                        {products.map(item => {
                                            if (item !== null) {
                                            <li className="collection-item col s12 m6 l3">
                                                <img src={`../../${item.product.imageUrl}`} className="col s12 m6 l3" />
                                                <p className="card-text">precio: {item.product.price}</p>
                                                <p className="card-text">cantidad: {item.quantity}</p>
                                        </li> }})
                                        }
                                    </ul>
                                </div>
                                <div className="card-action">
                                    <p className="card-text">Subtotal: {subtotal}</p>
                                    <a className="waves-effect waves-light btn">Pagar</a>
                                    <a className="waves-effect waves-light btn">Cancelar</a>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default PaycarComponent;