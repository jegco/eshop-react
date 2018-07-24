import React from 'react';
import './Paycar.css';
import { Link } from 'react-router-dom'
import ProductService from '../../services/ProductService';
import NavigationComponent from '../navigation/Navigation';

class PaycarComponent extends React.Component {

    constructor() {
        super()
        this.state = { products: [], fetching: true, subtotal: 0, emptyCart: false }
        this.pay = this.pay.bind(this);
    }

    async componentDidMount() {
        const response = await ProductService.getPaycar();
        let currentSubtotal = 0

        if (response) {
            response.map(item => {
                if (item !== null) {
                    currentSubtotal += item.product.price * item.quantity
                }
            })
            this.setState({
                products: response,
                fetching: false,
                subtotal: currentSubtotal,
                emptyCart: false
            })
        } else {
            this.setState({
                products: response,
                fetching: false,
                subtotal: currentSubtotal,
                emptyCart: true
            })
        }
    }

    render() {
        const { products, fetching, subtotal, emptyCart } = this.state
        return (
            <div className="s12 container-fluid shop">
                <NavigationComponent />
                <div className="row">
                    {fetching ? <div className="progress">
                        <div className="indeterminate"></div>
                    </div> : <div id="container">
                            <div className="card">
                                <div className="card-content">
                                    <ul className="collection">
                                        {
                                         emptyCart ? <img src="../assets/images/empty-cart.jpg"/> :  products.map(item => {
                                            if (item != null)
                                                return (<div className="row collection-item" key={item.id}><li className="col s12 m12 l12">
                                                    <img src={`../${item.product.imageUrl}`} className="col s12 m9 l6 paycar-image" />
                                                    <p className="card-text">precio: {item.product.price}</p>
                                                    <p className="card-text">cantidad: {item.quantity}</p>
                                                </li></div>)
                                        })
                                        }
                                    </ul>
                                </div>
                                <div className="card-action">
                                    <p className="card-text">Subtotal: {subtotal}</p>
                                    <a className="waves-effect waves-light btn pagar" onClick={this.pay}>Pagar</a>
                                    <Link to="/shop" className="waves-effect waves-light btn cancelar">Cancelar</Link>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }

    async pay(event) {
        event.preventDefault();
        await ProductService.pay();
        this.props.history.push('/shop');
    }
}

export default PaycarComponent;