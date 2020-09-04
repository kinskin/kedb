import React from "react";
import "./style.css";

const FloatingInput = (props) => {
    let { label, type, typeFor, inputData } = props;
    let spanStyle =
        window.innerWidth > 480
            ? { left: 0 }
            : { position: "absolute", left: 0, right: 0, marginLeft: "auto", marginRight: "auto" };

    return (
        <div className="input-group">
            <input type={type} required autoComplete="off" onChange={inputData} />
            <label for={typeFor} className="label-name">
                <span className="content-name " style={spanStyle}>
                    {label}
                </span>
            </label>
        </div>
    );
};

export default FloatingInput;
