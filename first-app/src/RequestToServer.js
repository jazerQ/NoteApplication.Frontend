import { useState, useEffect } from "react";

function RequestToServer()
{
    console.log("test");
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7034/Notes")
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setNotes(data)
            })
        .catch((error) => console.error(`Ошибка: ${error}`))
    }, []); // [] означает что запрос выполняется лишь один раз

    return (
        <div>
            <ul>
                {notes.map((note) => (
                    <li>
                        <h5><b>{note.title}</b></h5>
                        <p>{note.description}</p>
                        <p><i>{new Date(note.createdAt).toLocaleString("ru-RU")}</i></p>
                        <p>Id = {note.id}</p>
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default RequestToServer;