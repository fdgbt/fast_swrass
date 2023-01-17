import Result from './Result';

const Results = (props) => {

    let list =
        <ul>
            {Object.keys(props.list).map((category, i) => (
                props.list[category].map((result, i) => (
                    <Result key={i} category={category} result={result} />
                ))
            ))}
        </ul>

    return (
        <div>
            <p>Results</p>
            {list}
        </div>
    )
}

export default Results;