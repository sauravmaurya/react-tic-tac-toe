function Box({ id, onChange, children }) {
    console.log("box")

    return (
        <div id={id} className={children === "O" ? "box turno" : "box turnx"} onClick={() => onChange(id)}>{children}</div>
    )
}
export default Box
