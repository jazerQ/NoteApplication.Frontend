import { useState, useEffect } from "react";

function NoteForm(){
    const [formData, setFormData] = useState({title: "", description: ""});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => 
        {
            setFormData({...formData, [e.target.name]: e.target.value});
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
                    body: JSON.stringify(formData)
                })
                if(!response.ok){
                    throw new Error("Ошибка при отправке формы");
                }
                const data = await response.json();

            }catch(err)
            {
                console.error("Error: ", err)
            }finally{
                setLoading(false);
            }
        }
        
    return (
        <div>
            <form on>

            </form>
        </div>
    );
}

export default NoteForm();