const Button = (props) => {
    return (
        <div>
            <button type={props.type || "button"} 
            onClick={props.click}>{props.children}</button>
        
        </div>
    )
};

export default Button;