import Types from '../UI/Types/Types'

import styles from './Card.module.css';

const Card = (props) => {

    const card = Object.keys(props.result).map((field, i) => {
        return (
            <div key={i}>
                <div className={styles.field}>-- {field} --</div>{props.result[field]}<br /><br />
            </div>
        )
    })

    const icon = Types.Icons[props.type];

    return (
        <div>
            <h2>{icon} - Detailed Card - 👀</h2>
            {card}
        </div>
    )
}

export default Card;