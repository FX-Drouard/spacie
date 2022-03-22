import React from 'react';


const PopupModal = (props) => {
    return (
        <div className="popup_modal">
            <div className="fa-solid fa-xmark fa-xl" style={{ color: "red", position: 'absolute', right: "1cm" }}
                onClick={() => props.close()}

            ></div>


            {props.children}

        </div>
    );
};

export default PopupModal;