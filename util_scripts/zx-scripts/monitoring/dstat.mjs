#!/usr/bin/env zx

// import { $, chalk} from "zx";

console.log(chalk.yellow("--- --- --- dstat --- --- ---"))

await $`sudo dstat -ta --top-cpu`
