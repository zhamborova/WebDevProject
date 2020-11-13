import React from "react";

const InputBox = ({field, hasType, type}) =>
    <div className={'form-group row'}>
        <label>{field}</label>
        {
            hasType && type ==="date" &&
            <input className={"form-control"} type={'date'}/>
        }
        {
            !hasType &&
            <input className={"form-control"}/>
        }

    </div>

export default InputBox;