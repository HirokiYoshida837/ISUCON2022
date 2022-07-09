#!/usr/bin/env zx

console.log("--- --- --- postbuild --- --- ---")

cd('/home/isucon/webapp/go')
await $`ls -la | grep "isucondition"`