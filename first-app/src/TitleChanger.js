import { useState, useEffect } from "react";

function TitleChanger()
{
    const [text, setText] = useState("Привет, Салтан");

    useEffect(() => {
        document.title = text;
    }, [text]);
    return (
        <div>
            <h2>{text}</h2>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
    );

}
export default TitleChanger;