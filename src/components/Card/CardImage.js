import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./CardImage.css";

const CardImage = (props) => {
    const history = useHistory();
    let { type, data, parentType } = props;
    let { name, title, backdrop_path, poster_path } = data;

    let dataName = type === "movie" ? title : name;

    const [hover, setHover] = useState(false);

    const toggle = () => setHover(!hover);

    const url_poster_path = `https://image.tmdb.org/t/p/original${poster_path}`;
    const url_backdrop_path = `https://image.tmdb.org/t/p/original${backdrop_path}`;

    const handleThis = () => {
        let { media_type, id } = data;
        if (media_type) return history.push(`/info?mt=${media_type}&id=${id}`);
        history.push(`/info?mt=${type}&id=${id}`);
    };

    let imageText,
        imageTag = (
            <img
                src={window.innerWidth > 480 ? url_backdrop_path : url_poster_path}
                alt=""
                style={{
                    width: window.innerWidth > 480 ? "16rem" : "8rem",
                    height: "100%",
                    transform: "scale(1)",
                    transition: "transform, width 0.5s",
                    display: !backdrop_path && poster_path ? "none" : "",
                }}
            />
        );

    if (hover && window.innerWidth > 480) {
        if (parentType === "y") {
            imageTag = (
                <img
                    className="x"
                    src={url_backdrop_path}
                    alt="IMA"
                    style={{
                        position: "relative",
                        transform: "scale(1.4)",
                        transition: "transform 0.5s",
                        width: "16rem",
                        opacity: "0.9",
                        height: "100%",
                        zIndex: "10",
                    }}
                />
            );
            imageText = (
                <div
                    style={{
                        position: "absolute",
                        left: "0",
                        bottom: "0",
                        marginLeft: "auto",
                        marginRight: "auto",
                        zIndex: "100",
                    }}
                >
                    <p style={{ fontSize: "16px", fontWeight: "bold" }}>{dataName}</p>
                </div>
            );
        }

        if (parentType === "x") {
            imageTag = (
                <img
                    className="x"
                    src={url_backdrop_path}
                    alt="IMA"
                    style={{
                        position: "relative",
                        width: "22rem",
                        height: "100%",
                        transition: "width 0.5s",
                        opacity: "0.4",
                        zIndex: "10",
                    }}
                />
            );
            imageText = (
                <div
                    style={{
                        position: "absolute",
                        left: "20px",
                        bottom: "0",
                        marginLeft: "auto",
                        marginRight: "auto",
                        zIndex: "100",
                    }}
                >
                    <p style={{ fontSize: "16px", fontWeight: "bold" }}>{dataName}</p>
                </div>
            );
        }
    }

    return (
        <div
            style={{
                cursor: "pointer",
                backgroundColor: "black",
                padding: "10px",
                position: "relative",
                alignSelf: "center",
                display: !backdrop_path && !poster_path ? "none" : "",
            }}
            onMouseEnter={toggle}
            onMouseLeave={toggle}
            onClick={handleThis}
        >
            {imageTag}
            {imageText}
        </div>
    );
};

export default CardImage;
