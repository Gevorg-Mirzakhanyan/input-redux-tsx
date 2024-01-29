import { useState } from "react";
import { useDispatch } from "react-redux"
import { setTextAndStyle } from "./textSlice";

const Title = () => {
    const dispatch = useDispatch();
    const [inputText, setInputText] = useState("");
    const [selectColor, setSelectColor] = useState("black");
    const [selectedSize, setSelectedSize] = useState('16px');
    

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };
    
    const handleColorChange = (e) => {
        setSelectColor(e.target.value)
    };

    const handleSizeChange = (e) => {
        setSelectedSize(e.target.value)
    };

    const handleClick = () => {
        dispatch(setTextAndStyle({
            text: inputText, 
            color: selectColor, 
            size: selectedSize,
        }))
    };

    return (
        <div>
            <input type="text" value={inputText} onChange={handleInputChange} />
            <input type="color" value={selectColor} onChange={handleColorChange} />
            <input type="text" value={selectedSize} onChange={handleSizeChange} />

            <button onClick={handleClick}>Add</button>

        </div>
    )
}

export default Title;