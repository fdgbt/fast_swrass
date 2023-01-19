import { Link } from 'react-router-dom';

import Types from '../UI/Types/Types'

import styles from './Card.module.css';

const Card = (props) => {

    const card = Object.keys(props.result).map((field, i) => {
        const isArray = Array.isArray(props.result[field]);

        let fieldContent = props.result[field];

        if (typeof fieldContent === 'string' && fieldContent.includes('https://')) {
            fieldContent = <Link to={fieldContent.substring(21)} className={styles.DirectDetails}>{fieldContent}</Link>
        }

        if (isArray) {
            fieldContent = fieldContent.map((url, i) => {
                if (url.includes('https://')) {
                    url = <div key={i}><Link to={url.substring(21)} className={styles.DirectDetails}>{url}</Link></div>
                } else {
                    url = <div key={i}>{url}</div>
                }
                return url;
            });
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