import React from 'react';
import Summary from '../summary/Summary';
import './Shop.css';
import ProductService from '../../services/ProductService';
import NavigationComponent from '../navigation/Navigation';
import SearchComponent from '../search/Search';

class ShopComponent extends React.Component {

    constructor() {
        super()
        this.state = {stocks: [], fetching: true, productToSeach: '', counter: 0}
        this.handleChange = this.handleChange.bind(this);
        this.addToCar = this.addToCar.bind(this);
    }

    async componentDidMount() {
        const response = await ProductService.getProducts();
        this.setState({
            stocks: response,
            fetching: false
        })
    }

    render() {
        const {stocks, fetching, productToSeach, counter} = this.state

        const filtered = stocks.filter(item => item.product.name.includes(productToSeach) )
        return (
            <div className="s12 shop container-fluid">
            <NavigationComponent carNotEmpty={counter !== 0}/>
            <SearchComponent handleChange={this.handleChange}/>
                <div className="row">
                    { fetching ?  <div className="progress">
                        <div className="indeterminate"></div>
                    </div>: <div id="container">
                        <div>
                            { filtered.map(item => <Summary stock={item} key={item.id} addToCar={this.addToCar}/>) }
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

    handleChange(value) {
        this.setState({
            productToSeach: value
        })
    }

    addToCar() {
        console.log(this.state.counter)
        this.setState({
            counter: this.state.counter + 1
        })
    }
}

export default ShopComponent;