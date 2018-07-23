import React from 'react';
import {Link} from 'react-router-dom'
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
            <div className="s12 shop">
                <NavigationComponent />
                <div className="row">
                    {fetching ? <div className="progress">
                        <div className="indeterminate"></div>
                    </div> : <div class="card">
                    {console.log(stock.product.name)}
                            <div class="card-image">
                                <img src={` ../../${stock.product.imageUrl} `} />
                                <span class="card-title">{ stock.product.name }</span>
                            </div>
                            <div class="card-content">
                                <p class="card-text">precio: { stock.product.price }</p>
                                <p class="card-text">cantidad: { stock.quantity }</p>
                            </div>
                            <div class="card-action">
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