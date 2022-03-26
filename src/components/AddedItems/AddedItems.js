import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import "./AddedItems.css";

const AddedItems = (props) => {
    const { name, img } = props.product;

    return (
        <div className="added-items">
            <img src={img} alt="" />
            <p>{name}</p>
            <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
        </div>
    );
};

export default AddedItems;