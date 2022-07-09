#!/usr/bin/env zx

console.log(chalk.yellow("--- --- --- datadog-setup --- --- ---"))

// install
await $`DD_AGENT_MAJOR_VERSION=7 DD_API_KEY=XXXXXX DD_SITE="us5.datadoghq.com" bash -c "$(curl -L https://s3.amazonaws.com/dd-agent/scripts/install_script.sh)"`