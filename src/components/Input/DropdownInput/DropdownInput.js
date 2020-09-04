import React from "react";

const DropdownInput = (props) => {
    let { selectData, input, select, handleSelect, handleInput } = props;

    selectData = [{ name: "Select", value: "" }, ...selectData];

    let selectOptions = selectData.map((e, index) => {
        return (
            <option value={e.value} key={index}>
                {e.name}
            </option>
        );
    });

    return (
        <div className="input-group p-0">
            <div className="input-group-prepend">
                <select
                    value={select ? select : ""}
                    style={{
                        cursor: "pointer",
                        backgroundColor: "black",
                        color: "white",
                        outline: "none",
                        border: "none",
                    }}
                    onChange={handleSelect}
                >
                    {selectOptions}
                </select>
            </div>
            <input
                className="px-2"
                placeholder="Search"
                style={{
                    backgroundColor: "black",
                    color: "white",
                    border: "none",
                    outline: "none",
                    borderBottom: "1px solid white",
                }}
                value={input}
                disabled={select ? false : true}
                onChange={handleInput}
            />
        </div>
    );
};

export default DropdownInput;
