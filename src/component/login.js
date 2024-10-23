import { useState } from "react";
export default function Login() {
    const[textemail,setemailtext]=useState("Enter Email Here")
    const onclickofCancelhandler = () => {
        document.getElementById("contact");
    };

    const onclickofsubmithandler = (event) => {

    };
    const emailchangeHandler = () => {
alert("email changed")
    };
    const contactchangeHandler = () => {
        alert("contact changed")
    };

    const emailtextchangedhandler=(event)=>{
       setemailtext(event.target.value);
    }
    // const onchangeofcontact = () => {
    // };

    return [
        <div>
            <textarea className="form-control" rows="10"  text={textemail} onClick={emailtextchangedhandler} color="red">Start aligned text on all viewport sizes.</textarea>
            <input border="solid" onClick={emailchangeHandler}></input>
            <input border="solid" onClick={contactchangeHandler} className="my-4" ></input>
            <button className="btn btn-principal" onClick={onclickofsubmithandler}>Submit</button>
            <button className="btn btn-principal" onClick={onclickofCancelhandler}>Cancel</button>
        </div>
    ];
}


