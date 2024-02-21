import { useState } from "react"
import { getResponse } from "../utils/GetApi"
import { DefaultData } from "../types"

const defaultData: DefaultData = {
    role: '',
    content: ''
}

export default function Inputs() {
    const [data, setData] = useState(defaultData)
    //send data
    function onSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        console.log(data)
        getResponse(data)
    }
    //save inputs change
    function onChange(e: React.ChangeEvent<HTMLInputElement>){
        setData((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        })
    )}
  return (
    <section>
        <h3>Inputs</h3>
        <form className="inputs-container" onSubmit={onSubmit}>
            <input type="text" name="role" id="role" placeholder="role" onChange={onChange}/>
            <input type="text" name="content" id="content" placeholder="content message" onChange={onChange}/>
            <button type="submit">Send</button>
        </form>
    </section>
  )
}