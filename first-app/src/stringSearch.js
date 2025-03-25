import { useState } from "react";
import RequestToServer from "./RequestToServer";

function StringSearch(){
    const [search, setSearch] = useState({Search: "", SortItem: "", SortOrder: ""});
    
    const [notes, setNotes] = useState([])

    const handleChange = (e) => {
        // Убедимся, что search всегда объект
        setSearch((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            let response = await fetch(`http://localhost:5062/Notes?Search=${search.Search}&SortItem=${search.SortItem}&SortOrder=${search.SortOrder}`);
            let result = await response.json();

            setNotes(result.notes);
        }catch(err)
        {
            console.error("ошибка при запросе: ", err);
        }
    }
    return (
        <div className="stringSearch">
            <form onSubmit={handleSubmit}>
                <input name="Search" value={search.Search} onChange={handleChange} placeholder="Поиск"/>
                <select name="SortItem" value={search.SortItem} onChange={handleChange}>
                    <option value="">Выбери сортировку</option>
                    <option value="title">По заголовку</option>
                    <option value="description">По описанию</option>
                    <option value="createdAt">По дате</option>
                </select>
                <select name="SortOrder" value={search.SortOrder} onChange={handleChange}>
                    <option value="asc">По возрастанию</option>
                    <option value="desc">По убыванию</option>
                </select>
                <button type="submit">Поиск</button>
            </form>
            <RequestToServer result={notes}/>
        </div>
    );
}

export default StringSearch