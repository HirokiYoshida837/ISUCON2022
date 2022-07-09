#!/usr/bin/env zx

console.log("--- --- --- postdeploy --- --- ---")

const APP_NAME = 'isucondition'

// mysql restart
const mysqlPromise = await $`sudo systemctl restart mysql`


// service restart
const servicePromise = await $`sudo systemctl restart ${APP_NAME}.go.service`


// nginx restart
const nginxPromise = await $`sudo systemctl restart nginx`