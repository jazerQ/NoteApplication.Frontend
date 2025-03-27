async function GetNotes(search, sortItem, sortOrder){
    let response = await fetch(`http://localhost:5062/Notes?Search=${search}&SortItem=${sortItem}&SortOrder=${sortOrder}`);
    let result = await response.json();
    return result;
}

export default GetNotes;