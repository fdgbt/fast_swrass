'use strict';

exports.postSearch = async (request, h) => {
    try {
        const root = {
            films: "https://swapi.dev/api/films/",
            people: "https://swapi.dev/api/people/",
            planets: "https://swapi.dev/api/planets/",
            species: "https://swapi.dev/api/species/",
            starships: "https://swapi.dev/api/starships/",
            vehicles: "https://swapi.dev/api/vehicles/"
        };

        const list = {
            films: [],
            people: [],
            planets: [],
            species: [],
            starships: [],
            vehicles: []
        };

        let data = null;
        let result = null;

        for (const type in root) {
            data = await fetch(`${root[type]}?search=${h.request.payload.search}`);

            result = await data.json();
            list[type] = result.results;
        }

        return list;

    } catch (err) {
        console.log("error postSearch:", err);
        return err;
    }
}

exports.postWookie = async (request, h) => {
    try {

        let data = null;
        let result = null;

        data = await fetch(`${h.request.payload}?format=wookiee`);

        result = await data.json();

        return result;

    } catch (err) {
        console.log("error postSearch:", err);
        return err;
    }
}