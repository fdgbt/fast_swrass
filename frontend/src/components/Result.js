import Types from '../UI/Types/Types'

import styles from './Result.module.css'

const Result = (props) => {

    const clickHandler = (event) => {
        props.setSelectedCard({
            result: props.result,
            type: props.type
        });
    }

    const icon = Types.Icons[props.type];

    let resultName = props.result.name;

    if (!resultName)
        resultName = props.result.title;

    const result =
        <div>
            <li className={styles.result} onClick={clickHandler}>
                <span>Name: {resultName} | Type: {props.type} {icon}</span>
            </li>
        </div>;

    return (
        <div>
            {result}
        </div>
    )
}

export default Result;