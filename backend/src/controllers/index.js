exports.indexSearch = async (request, h) => {
    try {
        const result = await fetch('https://swapi.dev/api/people/');

        return result.json();
        
    } catch (err) {
        console.log("error indexSearch:", err);
        return err;
    }
}