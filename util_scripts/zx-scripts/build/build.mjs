#!/usr/bin/env zx

console.log("--- --- --- build --- --- ---")

const APP_NAME = 'isucondition'

// build-app
await $`go build -o ${APP_NAME} -v`;