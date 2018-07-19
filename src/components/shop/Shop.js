import React from 'react';
import Summary from '../summary/Summary';
import ProductService from '../../services/ProductService';

class ShopComponent extends React.Component {

    constructor() {
        super()
        this.state = {products: [], fetching: true}
    }

    async componentDidMount() {
        const response = await ProductService.getProducts();
        this.setState({
            products: response,
            fetching: false
        })
        console.log(response);
    }

    render() {
        const {products, fetching} = this.state
        return (
            <div className="s12 shop">
                <div className="row">
                    { fetching ?  <div className="progress">
                        <div className="indeterminate"></div>
                    </div>: <div id="container">
                        <div>
                            { products.map(item => <Summary product={item} key={item.id}/>) }
                        </div>
                        <div>
                            <div></div>
                        </div>
                    </div>
                }
                </div>
            </div>
        )
    }
}

export default ShopComponent;