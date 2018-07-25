import React from 'react'
import { Link } from 'react-router-dom'

class NavigationComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {carNotEmpty: this.props.carNotEmpty}
    }

    render() {
        const {carNotEmpty} = this.state;
        console.log(this.state.carNotEmpty);
        return (
            <div>
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">Mi Bodega</Link>
                    <a to="" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/shop"><i className="material-icons">apps</i></Link></li>
        <li><Link to="/paycar"><i className="material-icons">local_grocery_store {carNotEmpty ? <span className="new badge red">{this.state.counter}</span> : <div/> } </i></Link></li>
                        <li><Link to="/shop"><i className="material-icons">inbox</i></Link></li>
                        <li><Link to="/"><i className="material-icons">exit_to_app</i></Link></li>
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                <li><Link to="/shop"><i className="material-icons">apps</i>inicio</Link></li>
                <li><Link to="/paycar"><i className="material-icons">local_grocery_store<span className="new badge red">{this.state.counter}</span></i>mi compra</Link></li>
                <li><Link to="/shop"><i className="material-icons">inbox</i>ni idea</Link></li>
                <li><Link to="/"><i className="material-icons">exit_to_app</i>salir</Link></li>
            </ul>
            </div>
        )
    }
}

export default NavigationComponent;