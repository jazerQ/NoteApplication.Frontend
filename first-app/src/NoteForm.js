import { useState } from "react";
import GetNotes from "./GetNotes";

function NoteForm(props){
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => 
        {
            props.setFormData({...props.formData, [e.target.name]: e.target.value});
        };
    const handleSubmit = async (e) => 
        {
            e.preventDefault();
            setLoading(true);
            try{
                let response = await fetch('http://localhost:5062/Notes', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json;charset=utf-8"
                    },
                    body: JSON.stringify(props.formData)
                })
                if(!response.ok){
                    throw new Error("Ошибка при отправке формы");
                }
                const fetchedNotes = await GetNotes(props.search.Search, props.search.SortItem, props.search.SortOrder);
                props.setNotes(fetchedNotes);
            }catch(err)
            {
                console.error("Error: ", err)
            }finally{
               setLoading(false);
               props.setFormData({title: "", description:""});
            }
        }
        
    return (
        <div className="formDiv">
            <form onSubmit={handleSubmit}>
                <input name="title" value={props.formData.title} onChange={handleChange} placeholder="Введи название"/>
                <textarea name="description" value={props.formData.description} onChange={handleChange} placeholder="Введи описание"></textarea>
                <button type="submit" className="formDivBtn">Создать</button>
            </form>
            {loading ? <p>Создается...</p> : <p></p>}
        </div>
    );
}

export default NoteForm;