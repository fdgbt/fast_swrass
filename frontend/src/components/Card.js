const Card = (props) => {

    const card = Object.keys(props.result).map((field, i) => {
        return (
            <div key={i}>
                -- {field} -- <br /> {props.result[field]} <br /><br />
            </div>
        )
    })

    return (
        <div>
            <p>Detailed Card</p>
            {card}
        </div>
    )
}

export default Card;