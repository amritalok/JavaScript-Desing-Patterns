import React from 'React';
import { Button, Switch, FormControlLabel } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import observable from "./Observable";

function handleClick(){
    observable.notify('User Clicked');
}

function handleToggle(){
    observable.notify('User toggled switch');
}

function logger(data){
    console.log(`${Date.now()} ${data}`);
}

function toastify(data){
    toast(data, {
        position: toast.POSITION.BOTTOM_RIGHT,
        closeButton: false,
        autoClose: 2000
    })
}

observable.subscribe(logger);
observable.subscribe(toastify);

export default function App(){
    return (
        <div className='App'>
            <Button variant="contained" onClick={handleClick}> Click Me</Button>
            <FormControlLabel
                control={<Switch name="" onChange={handleToggle} />}
                label="Toggle me!"
            />
            <ToastContainer/>
        </div>
    )
}