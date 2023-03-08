function Box({ id, onChange, children }) {
    console.log("box")

    return (
        <div id={id} className={children === "O" ? "box turn0" : "box turnx"} onClick={() => onChange(id)}>{children}</div>
    )
}
export default Box
