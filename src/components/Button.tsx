import React from 'react';
type ButtonPropsType = {
    title: string
    callBack: () => void
    className: string
    disabled?: boolean
}

export const Button = (props:ButtonPropsType) => {
    return (
        <button
            className={props.className}
            disabled={props.disabled}
            onClick={props.callBack}>
            {props.title}
        </button>
    );
};

