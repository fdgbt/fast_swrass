import { useState } from 'react';

import Card from './Card';

import './Result.css'

const Result = (props) => {

    const [selectedCard, setSelectedCard] = useState(false);

    const clickHandler = (event) => {
        setSelectedCard(true);
    }

    let result =
        <div>
            <li className="result" onClick={clickHandler}>
                <span>Name: {props.result.name} | Category: {props.category}</span>
            </li>
        </div>

    if (selectedCard) {
        result =
            <Card result={props.result} category={props.category} />
    }

    return (
        <div>
            {result}
        </div>
    )
}

export default Result;