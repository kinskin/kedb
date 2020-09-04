import React from "react";
import { Spinner } from "reactstrap";

const PageLoader = (props) => {
    return (
        <div className="my-3">
            <Spinner color="danger" size="lg" />
        </div>
    );
};

export default PageLoader;
