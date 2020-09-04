import React from "react";
import CardImage from "../Card/CardImage";

const XScrollable = (props) => {
    let { type, data } = props;

    let mapCardsDatas = data.map((detail) => {
        return (
            <div key={detail.id}>
                <CardImage type={type} data={detail} parentType="x" />
            </div>
        );
    });
    return (
        <div
            style={{
                display: "flex",
                overflowX: "scroll",
                padding: "10px 10px",
                overflowY: "hidden",
                position: "relative",
                height: "100%",
            }}
        >
            {mapCardsDatas}
        </div>
    );
};

export default XScrollable;
