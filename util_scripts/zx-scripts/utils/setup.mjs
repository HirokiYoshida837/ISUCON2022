#!/usr/bin/env zx

console.log(chalk.yellow("--- --- --- setup --- --- ---"))

// await setUpNpmCompletion();
await installPackages();
// await initializeGit(); // そもそもgit pushしてるはずなので不要

// async function setUpNpmCompletion()
// {
//     // 一回実行するだけでいいし、別になくても困らないので実行しない。
//     console.log(chalk.cyan("--- --- --- npm completion --- --- ---"))
//     await $`npm completion >> ~/.bashrc`
// }


async function installPackages()
{
    console.log(chalk.cyan("--- --- --- install packages --- --- ---"))

    const packages = [
        'htop', // for monitoring
        'dstat', // for monitoring
        'git',
        'unzip'
    ]

    return await $`sudo apt install -y ${packages}`
}


async function initializeGit()
{

    console.log(chalk.cyan("--- --- --- initialize git settings --- --- ---"))

    Promise.all([
        $`git config --global user.name "isucon"`,
        $`git config --global user.email "isucon@isucon"`
    ])
}
