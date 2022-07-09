#!/usr/bin/env zx

console.log(chalk.yellow("--- --- --- git-pull-f --- --- ---"))


// 1) リモートの最新を取ってきておいて・・
// 2) ローカルのmasterを、リモート追跡のmasterに強制的に合わせる！
await $`git pull origin main`
await $`git reset --hard origin/main`


