
import './Result.css'

const Result = (props) => {

    const clickHandler = (event) => {
        props.setSelectedCard({
            result: props.result,
            type: props.type
        });
    }

    const result =
        <div>
            <li className="result" onClick={clickHandler}>
                <span>Name: {props.result.name} | Type: {props.type}</span>
            </li>
        </div>;

    return (
        <div>
            {result}
        </div>
    )
}

export default Result;