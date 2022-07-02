#!/usr/bin/env zx

console.log("--- --- --- log --- --- ---")

const APP_NAME = 'isucondition'

await $`sudo journalctl -u ${APP_NAME}.go -n10 -f`
