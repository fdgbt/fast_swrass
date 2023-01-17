'use strict';

const bcrypt = require('bcrypt');

const userTab = require('../models/users');

exports.getLogin = async (request, h) => {
    try {
        return ({ response: 'Nothing Here' });
    } catch (err) {
        console.log("error getLogin:", err);
        return err;
    }
}

exports.postLogin = async (request, h) => {
    try {

        const username = h.request.payload.username;
        const password = h.request.payload.password;

        const users = userTab.Users;

        const user = users.find((user, index) => {
            if (user.username === username)
                return true;
        });

        if (!user) {
            return { token: false };
        }

        const isValid = await bcrypt.compare(password, user.password);

        if (isValid) {
            return { token: 'test123' }
        }

        return { token: false };
    } catch (err) {
        console.log("error postLogin:", err);
        return err;
    }
};