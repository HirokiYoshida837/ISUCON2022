#!/usr/bin/env zx

console.log(chalk.yellow("--- --- --- mysql-loadconfig --- --- ---"))

await $`{sudo systemctl restart mysql}`