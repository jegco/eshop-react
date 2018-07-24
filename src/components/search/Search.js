import React from 'react';
import './Search.css';

const SearchComponent = ({handleChange}) => {

        return (
            <div class="row">
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s6">
                            <i class="material-icons prefix">search</i>
                            <input id="icon_prefix" name="productToSearch" class="fomr-control validate" type="text" 
                            onChange={(e) => handleChange(e.target.value)}/>
                            <label for="icon_prefix" class="placeholder">Escribe el nombre de los productos a buscar</label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

export default SearchComponent;