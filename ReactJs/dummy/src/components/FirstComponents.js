

function FirstComponent(props){
    return (
        <div className="modal">
            <h1>{props.owner} Application</h1>
            <p>Its Application for {props.demo}</p>
            <button onClick={props.closeModal}>Close Modal</button>
        </div>
    )
}

export default FirstComponent;