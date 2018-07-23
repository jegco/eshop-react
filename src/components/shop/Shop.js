import React from 'react';
import Summary from '../summary/Summary';
import './Shop.css';
import ProductService from '../../services/ProductService';
import NavigationComponent from '../navigation/Navigation';

class ShopComponent extends React.Component {

    constructor() {
        super()
        this.state = {stocks: [], fetching: true}
    }

    async componentDidMount() {
        const response = await ProductService.getProducts();
        console.log(response)
        this.setState({
            stocks: response,
            fetching: false
        })
    }

    render() {
        const {stocks, fetching} = this.state
        return (
            <div className="s12 shop">
            <NavigationComponent />
                <div className="row">
                    { fetching ?  <div className="progress">
                        <div className="indeterminate"></div>
                    </div>: <div id="container">
                        <div>
                            { stocks.map(item => <Summary stock={item} key={item.id}/>) }
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