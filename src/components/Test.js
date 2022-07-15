import {useState} from 'react';

export default function Test () {
    const [value, setValue] = useState()
    const [text, setText] = useState()

    const find =()=>{
        setText(value * 10)
    }

    return (
        <div>
            <input onChange={(e)=> setValue(e.target.value)} type="text" id="num1" />
            <button onclick={find}>Calculate</button>
            <input placeholder={text} type="text" id="result" />
        </div>
    )
}
