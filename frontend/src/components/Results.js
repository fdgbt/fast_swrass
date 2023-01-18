import { useState } from 'react';

import Card from './Card';
import Result from './Result';
import Button from '../UI/Button/Button';

import styles from './Results.module.css'

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
        <ul className={styles.ul}>
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
            <h2>✨ - Results - ✨</h2>
            {resultsList}
        </div>;

    if (checkNoResult(props.list)) {
        results =
            <div>
                <p>No Result... 😱</p>
            </div>
    }

    let list =
        <div>
            {results}
            <Button onClick={clickHandlerNew}>New Search</Button>
        </div>;

    if (selectedCard) {
        let wookie;

        if (selectedCard.type !== "films")
            wookie = <Button onClick={clickHandlerWookie}>Mode Wookie</Button>;

        list =
            <div>
                <Button onClick={clickHandlerBack}>Back to results</Button>
                <Card result={selectedCard.result} type={selectedCard.type} />
                {wookie}
            </div>;
    }

    if (wookieCard) {
        list =
            <div>
                <Button onClick={clickHandlerBack}>Back to results</Button>
                <Card result={wookieCard} type={selectedCard.type} />
                <Button onClick={clickHandlerClassic}>Mode Classic</Button>
            </div>;
    }

    return (
        <div className={styles.results}>
            {list}
        </div>
    )
}

export default Results;