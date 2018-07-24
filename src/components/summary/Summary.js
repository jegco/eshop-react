import React from 'react';
import './Summary.css';
import { Link } from 'react-router-dom';
import productService from '../../services/ProductService';

class SummaryComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {stock: this.props.stock, quantity: 0}
        this.handleChange = this.handleChange.bind(this);
        this.addToPaycar = this.addToPaycar.bind(this);
    }

    render() {
        return (
            <div className="col s12 m6 l3" key={this.state.stock.id}>
                <div className="card">
                    <div className="card-image">
                        <img src={`../../${this.state.stock.product.imageUrl}`}/>
                        <span className="card-title">{this.state.stock.product.name}</span>
                    </div>
                    <div className="card-content">
                        <p className="card-text">precio: {this.state.stock.product.price}</p>
                        <p className="card-text">cantidad: {this.state.stock.quantity}</p>
                    </div>
                    <div className="card-action">
                        <Link to={ `/details/${this.state.stock.id}` }>ver mas</Link>
                        <a onClick={this.addToPaycar} >añadir</a>
                        <input type="number" name="quantity" value={this.state.quantity} onChange={this.handleChange} min="1" max={this.state.stock.quantity} />
                    </div>
                </div>
            </div >
        )
    }

    async addToPaycar(event) {
        event.preventDefault();
        await productService.addToCar({
            id: this.state.stock.id,
            product: this.state.stock.product,
            quantity: this.state.quantity
        })
        const quantity = this.state.stock.quantity - this.state.quantity
        const response = await productService.updateStack({
            id: this.state.stock.id,
            product: this.state.stock.product,
            quantity: quantity
        })
        this.setState({
            stock: response.data
        })
    }

    handleChange(event) {
        const {target: {name, value}} = event
        this.setState({
            [name]:value
        })
    }
}

export default SummaryComponent;