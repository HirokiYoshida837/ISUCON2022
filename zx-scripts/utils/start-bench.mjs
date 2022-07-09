#!/usr/bin/env zx

console.log(chalk.yellow("--- --- --- start-bench --- --- ---"))

cd('/home/isucon/bench/')
await $`/home/isucon/bench/bench -all-addresses 127.0.0.11 -target 127.0.0.11:443 -tls -jia-service-url http://127.0.0.1:4999`


