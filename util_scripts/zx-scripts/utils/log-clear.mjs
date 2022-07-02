#!/usr/bin/env zx

console.log(chalk.yellow("--- --- --- log-clear --- --- ---"))

import { access, constants } from 'node:fs';

const NGINX_LOG_DIR = '/var/log/nginx'
const NGINX_LOG_FILE = NGINX_LOG_DIR + '/access.log'

await $`sudo systemctl stop nginx`
await $`sudo rm -rf ${NGINX_LOG_DIR}/*`
await $`sudo systemctl restart nginx`