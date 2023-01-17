import { useState } from 'react';

import "./Research.css";

const searchDatabase = async (formData) => {

    const data = await fetch('http://localhost:8080/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })

    const result = await data.json();

    console.log("POST search result:", result)

    return result;

}

const Research = ({ setList }) => {

    const [request, setRequest] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const searchResult = await searchDatabase(request);

        setList(searchResult);
    }

    return (
        <form className="research" onSubmit={handleSubmit}>
            <label>
                <p>Star Wars Rebels Alliance Search System</p>
                <input type="text" onChange={e => setRequest(e.target.value)}/>
            </label>
            <div>
                <button type="submit">Search</button>
            </div>
        </form>
    )
}

export default Research;