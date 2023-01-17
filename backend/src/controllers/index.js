exports.postSearch = async (request, h) => {
    try {
        const root = {
            films: "https://swapi.dev/api/films/",
            people: "https://swapi.dev/api/people/",
            planets: "https://swapi.dev/api/planets/",
            species: "https://swapi.dev/api/species/",
            starships: "https://swapi.dev/api/starships/",
            vehicles: "https://swapi.dev/api/vehicles/"
        }

        const list = {
            films: [],
            people: [],
            planets: [],
            species: [],
            starships: [],
            vehicles: []
        }

        let data = null;
        let result = null;

        for (const category in root) {
            data = await fetch(`${root[category]}?search=${h.request.payload}`);
            
            result = await data.json();
            list[category] = result.results;
        }

        return list;

    } catch (err) {
        console.log("error indexSearch:", err);
        return err;
    }
}