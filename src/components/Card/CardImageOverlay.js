import React from "react";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from "reactstrap";

const CardImageOverlay = (props) => {
    let { type, subType, typeTitle, data } = props;
    let { backdrop_path, poster_path, title, overview } = data;
    let image = backdrop_path ? backdrop_path : poster_path;
    image = `https://image.tmdb.org/t/p/original${image}`;

    let width = window.innerWidth > 480 ? "70%" : "100%";
    return (
        <div className="row">
            <div className="sm-12 lg-4" style={{ display: "flex", justifyContent: "center" }}>
                <Card inverse style={{ backgroundColor: "black", width }}>
                    <CardImg
                        src={image}
                        style={{ width: "100%", opacity: "0.3", position: "relative" }}
                    />
                    <CardImgOverlay
                        style={{
                            position: "absolute",
                            top: window.innerWidth > 480 ? "50%" : "",
                        }}
                    >
                        <CardTitle style={{ fontSize: "20px", fontWeight: "bold" }}>
                            {title}
                        </CardTitle>

                        <CardText
                            style={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                        >
                            {overview}
                        </CardText>
                        <CardText>
                            <small className="text-muted" style={{ fontWeight: "bold" }}>
                                {typeTitle}
                            </small>
                        </CardText>
                    </CardImgOverlay>
                </Card>
            </div>
        </div>
    );
};

export default CardImageOverlay;
