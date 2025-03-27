function RequestToServer({result})
{
    console.log(result.notes)
    if(result.notes === undefined) return (<div className="notes"></div>);
    return (
        <div className="notes">
            <ul>
                {result.notes.length > 0 ? result.notes.map((note) => (
                    <li className="note" key={note.id}>
                        <h5><b>{note.title}</b></h5>
                        <p className="noteString">{note.description}</p>
                        <p className="noteString"><i>{new Date(note.createdAt).toLocaleString("ru-RU")}</i></p>
                    </li>
                )) : <p className="note">Ничего не нашлось</p>}
            </ul>
        </div>
    );

}

export default RequestToServer;