#!/usr/bin/env zx

console.log("--- --- --- datadog-apmlog --- --- ---")

await $`sudo tail -f /var/log/datadog/trace-agent.log`
