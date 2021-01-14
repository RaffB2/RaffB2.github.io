import { useState, useEffect } from 'react';
import input from './Input';
import output from './output';

const Todo = () => {
    const [thingsToDo, setThingsToDo] = useState([]);
    //storage
    useEffect(() => {
        const data = localStorage.getItem('saved-notes');
        if (data) {
            setThingsToDo(JSON.parse(data));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("saved-notes", JSON.stringify(thingsToDo));
    })

    const addNewNote = (newNote) => {
        if (newNote.length === 0 || !newNote.trim()) {
            window.alert(`Note cannot be empty`);
        }
        else {
            //TODO: Change to object {name: X, note:Y}.
            setThingsToDo([...thingsToDo.concat(newNote)]);
        }
    }

    const deleteNote = (idOfNote) => {
        const newArr = [...thingsToDo];
        newArr.splice(idOfNote, 1);
        setThingsToDo(newArr);
    }

    const moveUp = (idOfNote) => {
        if (idOfNote > 0) {
            const newArr = [...thingsToDo];
            swapElements(newArr, idOfNote - 1, idOfNote);
            setThingsToDo(newArr);
        }
    }

    const moveDown = (idOfNote) => {
        if (idOfNote + 1 < thingsToDo.length) {//prevents array out of bounds
            const newArr = [...thingsToDo];
            swapElements(newArr, idOfNote + 1, idOfNote);
            setThingsToDo(newArr);
        }
    }

    const editNote = (idOfNote, e) => {
        const newArr = [...thingsToDo];
        newArr[idOfNote] = e;
        if (e.length === 0 || !e.trim()) {
            newArr[idOfNote] = `Do not leave blank!`;
        }
        setThingsToDo(newArr);
    }

    return (
        <div>
            <h1>Your notes</h1>
            <input.InputField addNewNote={addNewNote} />
            <output.OutPutField data={thingsToDo} deleteNote={deleteNote} moveUp={moveUp} moveDown={moveDown} editNote={editNote} />
        </div>
    )

}
const swapElements = (arr, e1, e2) => {
    let temp = arr[e1];
    arr[e1] = arr[e2]
    arr[e2] = temp;
}

export default { Todo }

