

function FirstComponent(props){
    return (
        <div className="modal">
            <h1>{props.owner} Application</h1>
            <p>Its Application for {props.demo}</p>
            <button onClick={props.closeModal}>Click Here</button>
        </div>
    )
}

export default FirstComponent;