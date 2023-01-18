import { useState } from 'react';

import Card from './Card';

import Result from './Result';

const searchWookie = async (formData) => {

    const data = await fetch('http://localhost:8080/wookie', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })

    const result = await data.json();

    console.log("POST wookie result:", result)

    return result;

}

const checkNoResult = (list) => {
    let noResult = true;

    Object.keys(list).map((type, i) => {
        return list[type].map((result, i) => {
            if (noResult && result)
                noResult = false;
            return noResult;
        })
    })

    return noResult;
};

const Results = (props) => {

    const [selectedCard, setSelectedCard] = useState(false);
    const [wookieCard, setWoookieCard] = useState(false);

    const clickHandlerBack = (event) => {
        setWoookieCard(false);
        setSelectedCard(false);
    };

    const clickHandlerNew = (event) => {
        props.setList();
    };

    const clickHandlerWookie = async (event) => {
        const wookieData = await searchWookie(selectedCard.result.url)

        setWoookieCard(wookieData);
    };

    const clickHandlerClassic = async (event) => {
        setWoookieCard(false);
    };

    const resultsList =
        <ul>
            {
                Object.keys(props.list).map((type, i) => (
                    props.list[type].map((result, i) => (
                        <Result key={i} type={type} result={result} selectedCard={selectedCard} setSelectedCard={setSelectedCard} />
                    ))
                ))
            }
        </ul>;

    let results =
        <div>
            <p>Results</p>
            {resultsList}
        </div>;

    if (checkNoResult(props.list)) {
        results =
            <div>
                <p>No Result...</p>
            </div>
    }

    let list =
        <div>
            {results}
            <button onClick={clickHandlerNew}>New Search</button>
        </div>;

    if (selectedCard) {
        list =
            <div>
                <button onClick={clickHandlerBack}>Back to results</button>
                <Card result={selectedCard.result} />
                <button onClick={clickHandlerWookie}>Mode Wookie</button>
            </div>
    }

    if (wookieCard) {
        list =
            <div>
                <button onClick={clickHandlerBack}>Back to results</button>
                <Card result={wookieCard} />
                <button onClick={clickHandlerClassic}>Mode Classic</button>
            </div>
    }

    return (
        <div>
            {list}
        </div>
    )
}

export default Results;