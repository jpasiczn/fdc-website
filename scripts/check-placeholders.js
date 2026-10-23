#!/usr/bin/env node
'use strict';
const { execSync } = require('child_process');

let found;
try {
  found = execSync(
    "grep -rl '\\[\\[' _site/ --include='*.html'",
    { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] }
  ).trim();
} catch {
  found = '';
}

if (found) {
  console.error('\nERROR: [[ placeholder text found in build output:');
  console.error(found);
  console.error('\nRun: grep -rn "\\[\\[" _site/ --include="*.html"\n');
  process.exit(1);
}
console.log('OK: no placeholder text in build output');
