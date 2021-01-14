const Button = (props) => <button className={props.className} color="primary" onClick={() => { props.eventHandler(props.doWhat); }}>{props.btnName}</button>

export default { Button };