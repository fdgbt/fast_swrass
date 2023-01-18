import Types from '../UI/Types/Types'

import styles from './Card.module.css';

const Card = (props) => {

    const card = Object.keys(props.result).map((field, i) => {
        const isArray = Array.isArray(props.result[field]);

        let fieldContent = props.result[field];

        if (isArray) {
            fieldContent = props.result[field].join('\n');
        }

        return (
            <div key={i}>
                <div className={styles.field}>-- {field} --</div><div className={styles.fieldContent}>{fieldContent}</div><br />
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