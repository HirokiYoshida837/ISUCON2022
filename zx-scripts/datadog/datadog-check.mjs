#!/usr/bin/env zx

console.log(chalk.yellow("--- --- --- datadog-check --- --- ---"))
await $`sudo datadog-agent checkconfig`