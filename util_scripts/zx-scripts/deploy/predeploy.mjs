#!/usr/bin/env zx

console.log("--- --- --- predeploy --- --- ---")

const APP_NAME = 'isucondition'


// nginx stop
const nginxPromise = await $`sudo systemctl stop nginx`

// service stop
const servicePromise = await $`sudo systemctl stop ${APP_NAME}.go.service`

