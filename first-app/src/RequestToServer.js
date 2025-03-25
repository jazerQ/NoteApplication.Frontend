function RequestToServer({result})
{
    return (
        <div className="notes">
            <ul>
                
                {result.length > 0 ? result.map((note) => (
                    <li className="note" key={note.id}>
                        <h5><b>{note.title}</b></h5>
                        <p>{note.description}</p>
                        <p><i>{new Date(note.createdAt).toLocaleString("ru-RU")}</i></p>

                    </li>
                )) : <p>Ничего не нашлось</p>} 
            </ul>
        </div>
    );

}

export default RequestToServer;