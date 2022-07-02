#!/usr/bin/env zx

console.log(chalk.yellow("--- --- --- collect-instanceinfo --- --- ---"))

await $`sudo systemctl restart mysql`