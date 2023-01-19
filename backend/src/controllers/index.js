'use strict';

const Types = require('../models/types');

exports.postSearch = async (request, h) => {
    try {
        let data = null;
        let res = null;

        const filters = h.request.payload.filters;

        for (const type in Types.Root) {
            if (filters[type]) {
                data = await fetch(`${Types.Root[type]}?search=${h.request.payload.search}`);
                res = await data.json();
                Types.List[type] = res.results;
            } else {
                Types.List[type] = [];
            }
        }

        return Types.List;

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
        console.log("error postWookie:", err);
        return err;
    }
}

exports.postDetails = async (request, h) => {
    try {

        let data = null;
        let result = null;

        data = await fetch(`https://swapi.dev/api/${h.request.payload.type}/${h.request.payload.id}/`);

        result = await data.json();

        return {
            type: h.request.payload.type,
            result: result
        };

    } catch (err) {
        console.log("error postDetails:", err);
        return err;
    }
}

exports.postDetailsWookie = async (request, h) => {
    try {

        let data = null;
        let result = null;

        data = await fetch(`https://swapi.dev/api/${h.request.payload.type}/${h.request.payload.id}/?format=wookiee`);

        result = await data.json();
        return result;

    } catch (err) {
        console.log("error postDetailsWookie:", err);
        return err;
    }
}