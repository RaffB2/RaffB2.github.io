import { useState } from 'react'
import button from './button';
import './input.css'

const InputField = (props) => {
    const [textInput, setTextInput] = useState('');

    return (
        <div >
            <input type="text" className="input" onChange={(e) => { setTextInput(e.target.value); }}></input>
            <button.Button className={"button button2"} btnName="Add" doWhat={textInput} eventHandler={props.addNewNote} />

        </div>
    )
}

export default { InputField }