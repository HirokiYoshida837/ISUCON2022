#!/usr/bin/env zx

console.log(chalk.yellow("--- --- --- logrotate --- --- ---"))

import { access, constants } from 'node:fs';

const NGINX_LOG_DIR = '/var/log/nginx'
const NGINX_LOG_FILE = NGINX_LOG_DIR + '/access.log'

// const MYSQL_LOG_DIR = '/var/log/nginx'
// const MYSQL_LOG_FILE = NGINX_LOG_DIR+'/access.log'

const dateString = await $`date +%Y%m%d-%H%M%S`

console.log(NGINX_LOG_DIR)
console.log(NGINX_LOG_FILE)


// move old binary files.
access(NGINX_LOG_FILE, constants.F_OK, async (err) =>
{
    console.log(`${NGINX_LOG_FILE} ${err ? 'does not exist' : 'exists'}`);
    if (!err)
    {
        await $`sudo mv ${NGINX_LOG_FILE} ${NGINX_LOG_FILE}.${dateString}`
    }
});

await $`sudo nginx -s reopen`