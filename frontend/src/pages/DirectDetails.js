import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Button from '../UI/Button/Button';
import Card from '../components/Card';

import styles from './DirectDetails.module.css';

const loadingPic = require('../assets/loading.webp');

const DirectDetails = () => {

    const params = useParams();
    const navigate = useNavigate();
    const [details, setDetails] = useState(false);
    const [enabledWookie, setEnabledWookie] = useState(false);
    const wookie = useRef(false);

    useEffect(() => {
        const detailsDatabase = async (formData) => {
            try {
                const data = await fetch('http://localhost:8080/details', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })

                if (!data.ok) {
                    throw new Error('POST Wookie failed');
                }

                const result = await data.json();
                console.log("POST details result:", result);
                setDetails(result);

            } catch (err) {
                console.log("error detailsDatabase:", err);
                throw new Error(err);
            }
        }

        const detailsWookie = async (formData) => {
            try {

                const data = await fetch('http://localhost:8080/detailswookie', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })

                if (!data.ok) {
                    throw new Error('POST Wookie failed');
                }
                wookie.current = await data.json();
                console.log("POST detailsWookie result:", wookie.current);

            } catch (err) {
                console.log("error detailsDatabase:", err);
                throw new Error(err);
            }
        };

        if (details && params.type !== "films") {
            detailsWookie({
                type: params.type,
                id: params.id
            });
        } else if (details === false) {
            detailsDatabase({
                type: params.type,
                id: params.id
            })
        }

    }, [details, params.type, params.id]);

    const clickHandlerNew = (event) => {
        navigate('/');
    };

    const clickHandlerWookie = (event) => {
        setEnabledWookie(true);
    };

    const clickHandlerClassic = (event) => {
        setEnabledWookie(false);
    };

    const clickHandlerNewSearch = (event) => {
        setDetails(false);
    };

    let searchDetails =
        <div className={styles.searchDetails}>
            <img src={loadingPic} alt="Loading..." />
        </div>;

    if (details) {
        let wookieDetails;

        if (details.type !== "films")
            wookieDetails = <Button onClick={clickHandlerWookie}>Mode Wookie</Button>;

        searchDetails =
            <div className={styles.searchDetails}>
                <Button onClick={clickHandlerNew}>New Search</Button>
                <div onClick={clickHandlerNewSearch}><Card result={details.result} type={details.type} /></div>
                
                {wookieDetails}
            </div>;

        if (enabledWookie) {
            searchDetails =
                <div className={styles.searchDetails}>
                    <Button onClick={clickHandlerNew}>New Search</Button>
                    <Card result={wookie.current} type={details.type} />
                    <Button onClick={clickHandlerClassic}>Mode Classic</Button>
                </div>;
        }
    }

    return (
        <div className={styles.DirectDetails}>
            <header className={styles.DirectDetailsHeader}>
                {searchDetails}
            </header>
        </div>
    );
}

export default DirectDetails;