function Button({text, color, handleClick}) {
    const buttonStyle = {
        color : "green",
        fontSize : 12 + "px"
    };

    return <button style={buttonStyle} color={color} onClick={handleClick}>{text}</button>;
}

export default Button

