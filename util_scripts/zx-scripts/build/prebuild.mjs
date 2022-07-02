#!/usr/bin/env zx

console.log("--- --- --- prebuild --- --- ---")

import { access, constants, rename } from 'node:fs';

const APP_NAME = 'isucondition'


// move old binary files.
access(APP_NAME, constants.F_OK, (err) =>
{
    console.log(`${APP_NAME} ${err ? 'does not exist' : 'exists'}`);
    if (!err)
    {
        rename(APP_NAME, `${APP_NAME}.old`, (err) =>
        {
            if (err) throw err;
            console.log(`move file to ${APP_NAME}.old`);
        });
    }
});