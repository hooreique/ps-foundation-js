const main = ({ next, nextInt }) => { /* ... */ };

(_=>{const a=[];let b=-1;const $={next:()=>a[++b],nextInt:()=>parseInt($.next())};require('readline').createInterface({input:require('process').stdin}).on('close',()=>_($)).on('line',_=>_.trim().split(/\s+/).forEach(_=>a.push(_)));})(main);
