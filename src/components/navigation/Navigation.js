import React from 'react'

class NavigationComponent extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
            <nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo">Mi Bodega</a>
                    <a href="" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><a ><i class="material-icons">apps</i></a></li>
                        <li><a ><i class="material-icons">local_grocery_store</i></a></li>
                        <li><a ><i class="material-icons">inbox</i></a></li>
                        <li><a ><i class="material-icons">exit_to_app</i></a></li>
                    </ul>
                </div>
            </nav>
            <ul class="sidenav" id="mobile-demo">
                <li><a ><i class="material-icons">apps</i>inicio</a></li>
                <li><a><i class="material-icons">local_grocery_store</i>mi compra</a></li>
                <li><a ><i class="material-icons">inbox</i>ni idea</a></li>
                <li><a ><i class="material-icons">exit_to_app</i>salir</a></li>
            </ul>
            </div>
        )
    }
}

export default NavigationComponent;