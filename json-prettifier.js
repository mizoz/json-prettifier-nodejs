#!/usr/bin/env node
/** JSON prettifier */
const fs=require('fs');
const a=process.argv.slice(2);
if(!a[0]){console.log('Usage: json-prettifier.js <file.json>');process.exit(1);}
try{const d=JSON.parse(fs.readFileSync(a[0],'utf-8'));console.log(JSON.stringify(d,null,2));}catch(e){console.log('Error:',e.message);}
