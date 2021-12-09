import { useState } from "react";

const UserInput = ({ handleForm }) => {
    const [input, setInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        handleForm(input)
        setInput("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="text" name="added" type="text" onChange={(e) => setInput(e.target.value)} value={input} />
            <button type="submit">+</button>
        </form>
    )
}

export default UserInput