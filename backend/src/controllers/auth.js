'use strict';

const bcrypt = require('bcrypt');
const crypto = require('crypto');
const { promisify } = require('util');

const randomBytesAsync = promisify(crypto.randomBytes);

const userTab = require('../models/users');

const getKey = (size) => { 
    return randomBytesAsync(size);
  }

exports.postLogin = async (request, h) => {
    try {

        const username = h.request.payload.username;
        const password = h.request.payload.password;

        if (!username || !password) {
            return { token: false };
        }

        const users = userTab.Users;

        const user = users.find((user, index) => {
            if (user.username === username)
                return true;
        });

        if (!user ) {
            return { token: false };
        }

        const isValid = await bcrypt.compare(password, user.password);

        if (isValid) {
            const randomToken = await getKey(16);

            return { token: randomToken.toString('base64') };
        }

        return { token: false };

    } catch (err) {
        console.log("error postLogin:", err);
        return err;
    }
};