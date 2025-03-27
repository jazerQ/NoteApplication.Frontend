import { useState } from "react";
import NoteForm from "./NoteForm";
import StringSearch from "./stringSearch";
import RequestToServer from "./RequestToServer";

function Note(){
    const [search, setSearch] = useState({Search: "", SortItem: "", SortOrder: ""});
    const [notes, setNotesArr] = useState([]);
    const [note, setNote] = useState({title: "", description: ""});
    return (
        <div className="mainNote">
            <div className="forms">
                <NoteForm setFormData = {setNote} formData = {note} search = {search} setNotes = {setNotesArr}/>
                <StringSearch setNotes = {setNotesArr} setSearch = {setSearch} search = {search}/>
            </div>
            <div>
                <RequestToServer result = {notes}/>
            </div>
        </div>
    )
}

export default Note