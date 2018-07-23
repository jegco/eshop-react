import React from 'react';
import './Summary.css';
import { Link } from 'react-router-dom';

const SummaryComponent = ({product}) => {
        return (
            <div className="col s12 m6 l3" key={product.id}>
                <div className="card">
                    <div className="card-image">
                        <img src={`../../${product.product.imageUrl}`} />
                        <span className="card-title">{product.product.name}</span>
                    </div>
                    <div className="card-content">
                        <p className="card-text">precio: {product.product.price}</p>
                        <p className="card-text">cantidad: {product.quantity}</p>
                    </div>
                    <div className="card-action">
                        <Link to={ `/details/${product.id}` }>ver mas</Link>
                        <a>añadir</a>
                        <input type="number" min="1" max={product.quantity} />
                    </div>
                </div>
            </div >
        )
    }

export default SummaryComponent;