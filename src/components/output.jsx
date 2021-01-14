
import button from './button'
import './output.css'
const OutPutField = (props) => {

    const listNotes = props.data.map((note, index) =>
        <div key={index} className="wrap">
            <div className="horizontal">
                <button.Button className={"btn"} eventHandler={props.moveUp} doWhat={index} btnName="Up" />
                <button.Button className={"btn"} eventHandler={props.moveDown} doWhat={index} btnName="Down" />
            </div>
            <div className="list">
                <div className="container"></div>
                <p>
                    <input type="text" value={note} onChange={(e) => { props.editNote(index, e.target.value)}}></input>
                    <span>
                        <i className="fas fa-minus-circle" onClick={() => { props.deleteNote(index);}}></i>
                    </span>
                </p>

            </div>
        </div>)

    return listNotes;
}

export default { OutPutField }
