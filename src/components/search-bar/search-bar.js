import React from "react";
import './search-bar.css';

const SearchBar = () =>
    <div className={'form-group row search-padding pad-elements justify-content-center'}>
        <div className={'pad-elements col-8'}>
            <input className={'form-control'}/>
        </div>
        <div className={'pad-elements col-2'}>
            <button className={"btn btn-success form-control"}>Submit</button>
            </div>
    </div>


export default SearchBar;