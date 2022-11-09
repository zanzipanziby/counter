import React from 'react';
import {Button} from "./Button";

type CounterPropsType = {
    number: number
    changeNumber: () => void
    resetNumber: () => void
}


export const Counter = (props: CounterPropsType) => {
    const className1 = props.number !== 5 ? 'button' : 'dis'
    const className2 = props.number !== 0 ? 'button' : 'dis'
    const disabled1 = props.number === 5;
    const disabled2 = props.number === 0;

    return (
        <div className={'counter'}>


            <div className={'display'}>
                <h1 className={props.number === 5 ? "red" : ""}>{props.number}</h1>
            </div>
            <div className={'button_container'}>
                {/*<button*/}
                {/*    className={props.number !== 5 ? 'button' : 'dis'}*/}
                {/*    disabled={props.number === 5}*/}
                {/*    onClick={props.changeNumber}>*/}
                {/*    inc*/}
                {/*</button>*/}
                {/*<button*/}
                {/*    className={props.number !== 0 ? 'button' : 'dis'}*/}
                {/*    disabled={props.number === 0}*/}
                {/*    onClick={props.resetNumber}>*/}
                {/*    reset*/}
                {/*</button>*/}
                <Button className={className1} disabled={disabled1} title={'inc'} callBack={props.changeNumber}/>
                <Button className={className2} disabled={disabled2} title={'reset'} callBack={props.resetNumber}/>
            </div>
            <div className={props.number === 5 ? 'fin' : ''}></div>
        </div>
    );
};

