import { useSelector } from "react-redux"
import {selectColor, selectSize, selectText } from "../title/textSlice"

const Content = () => {

    const text = useSelector(selectText)
    const color = useSelector(selectColor)
    const size = useSelector(selectSize)
    return (
        <div>
            <p style={{ color, fontSize: size }}>{text}</p>
        </div>
    )
}

export default Content;