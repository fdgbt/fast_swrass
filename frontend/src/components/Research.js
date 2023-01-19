import { useState } from 'react';

import Button from '../UI/Button/Button';
import Types from '../UI/Types/Types';

import styles from "./Research.module.css";

const loadingPic = require('../assets/loading.webp');

const searchDatabase = async (formData) => {
    try {
        const data = await fetch('http://localhost:8080/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        const result = await data.json();
        console.log("POST search result:", result)
        return result;

    } catch (err) {
        console.log("error searchDatabase:", err);
        throw new Error(err);
    }
}

const Research = ({ setList }) => {

    const [request, setRequest] = useState();
    const [submiting, setSubmiting] = useState(false);
    const [filters, setFilters] = useState(false);
    const [typesFilter, setTypesFilter] = useState(Types.Filters);

    const checkboxHandler = (event) => {
        setTypesFilter((prevState) => {
            return ({
                ...prevState,
                [event.target.name]: event.target.checked,
            })
        });
    };

    const filterSwitchHandler = (event) => {
        setFilters((prevState) => {
            return (!prevState)
        });
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        setSubmiting(true);

        const searchResult = await searchDatabase({ search: request, filters: typesFilter });

        setList(searchResult);
        setSubmiting(false);
    };

    const checkboxes = Object.keys(Types.Icons).map((type, i) => (
        <label key={i} className={styles.filterLabel}>
            <input type="checkbox" id={type} name={type} onChange={checkboxHandler} defaultChecked={Types.Filters[type]} />
            <small className={styles.filterName}>{type}</small>
        </label>
    ));

    let filterSwitch;

    if (!filters) {
        filterSwitch = <small className={styles.filtersTitle} onClick={filterSwitchHandler} >Filters</small>
    } else {
        filterSwitch =
            <div className={styles.filters}>
                {checkboxes}
            </div>
    }

    let submit =
        <div>
            <Button type="submit">Search</Button>
        </div>;

    if (submiting) {
        submit =
            <div className={styles.submiting}>
                <img src={loadingPic} alt="Searching..." width="50px" />
            </div>;
    };

    return (
        <form className={styles.research} onSubmit={submitHandler}>
            <label className={styles.searchLabel}>
                <h2 className={styles.searchTitle}>⭐ - Star Wars Rebels Alliance Search System - ⭐</h2>
                <input className={styles.input} type="text" id="search" name="search" onChange={e => setRequest(e.target.value)} required />
            </label>
            {filterSwitch}
            {submit}
        </form>
    )
}

export default Research;