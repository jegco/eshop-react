import React from 'react';
import {Link} from 'react-router-dom'
import './Details.css';
import productService from '../../services/ProductService';
import NavigationComponent from '../navigation/Navigation';

class DetailsComponent extends React.Component {

    constructor() {
        super();
        this.state = {stock: {}, fetching: true}
    }

    async componentDidMount() {
        const response = await productService.getProduct(this.props.match.params.id);
        this.setState({
            stock: response,
            fetching: false
        });
    }

    render() {
        const {stock, fetching} = this.state
        return (
            <div className="s12 details container-fluid">
                <NavigationComponent />
                <div className="row">
                    {fetching ? <div className="progress">
                        <div className="indeterminate"></div>
                    </div> : <div className="card">
                            <div className="card-image">
                                <img src={` ../../${stock.product.imageUrl} `} />
                                <span className="card-title">{ stock.product.name }</span>
                            </div>
                            <div className="card-content">
                                <p className="card-text">precio: { stock.product.price }</p>
                                <p className="card-text">cantidad: { stock.quantity }</p>
                            </div>
                            <div className="card-action">
                                <Link to="/shop">Atras</Link>
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default DetailsComponent;