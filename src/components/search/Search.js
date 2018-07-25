import React from 'react';
import './Search.css';

const SearchComponent = ({handleChange}) => {

        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">search</i>
                            <input id="icon_prefix" name="productToSearch" className="fomr-control validate" type="text" 
                            onChange={(e) => handleChange(e.target.value)}/>
                            <label htmlFor="icon_prefix" className="placeholder">Escribe el nombre de los productos a buscar</label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

export default SearchComponent;