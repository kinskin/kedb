import React, { Fragment } from "react";
import CardImage from "../Card/CardImage";

const YScrollable = (props) => {
    let { type, data } = props;

    let mapCardsDatas = data.map((detail) => {
        if (!detail.poster_path || !detail.backdrop_path) return;
        return (
            <Fragment key={detail.id}>
                <CardImage type={type} data={detail} parentType={"y"} />
            </Fragment>
        );
    });

    mapCardsDatas = mapCardsDatas.filter((e) => !!e);

    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                width: "100%",
                padding: "10px 10px",
                height: "100%",
            }}
        >
            {mapCardsDatas}
        </div>
    );
};

export default YScrollable;
