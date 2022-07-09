#!/usr/bin/env zx

// 初期の状態をdumpして手元に持ってこれるようにする。
console.log(chalk.yellow("--- --- --- mysql-dump --- --- ---"))

// 適宜ユーザ、パスワードを書き換えて
await $`mysqldump --single-transaction -u isucon -p isucon isucondition > /tmp/isucondition2.dump`