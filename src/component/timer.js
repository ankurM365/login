import { useState } from "react"

export default function Timer()
{
    const[labeltext, setLabel]=useState["60"];
    const countdown=()=>{
        setLabel("59");
    }
return[
    <div>
        <label text={labeltext} ></label>
    </div>
]

}