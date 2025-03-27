import { useEffect } from "react"
import GetNotes from "./GetNotes";

function StringSearch(props){
    const {search, setSearch, setNotes} = props;
    const handleChange = async (e) => {
        // Убедимся, что search всегда объект
        setSearch((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    };
    useEffect(() => {
        const data = async () => {
            try{

                const fetchedNotes = await GetNotes(search.Search, search.SortItem, search.SortOrder);
                console.log(fetchedNotes)
                setNotes(fetchedNotes);
            }catch(err)
            {
                console.error("ошибка при запросе: ", err);
            }
        }
        data()
        },  [search, setNotes]);
    
    return (
        <div className="formDiv">
            <form>
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
            </form>
        </div>
    );
}

export default StringSearch