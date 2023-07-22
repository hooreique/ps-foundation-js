# ps-foundation-js

Foundational JavaScript for problem-solving

## Code

[Main.js](Main.js)

```javascript
const main = ({ next, nextInt }) => {
    const foo = next();
    const bar = nextInt();
    // ...
};

(func => {
    const tokens = [];
    let i = -1;
    const scanner = {
        next: () => tokens[++i],
        nextInt: () => parseInt(scanner.next()),
    };
    require('readline')
        .createInterface({ input: require('process').stdin })
        .on('close', () => func(scanner))
        .on('line', line =>
            line
                .trim()
                .split(/\s+/)
                .forEach(token => tokens.push(token))
        );
})(main);
```

## Compressed

[Main.min.js](Main.min.js)

```javascript
const main = ({ next, nextInt }) => { /* ... */ };

(_=>{const a=[];let b=-1;const $={next:()=>a[++b],nextInt:()=>parseInt($.next())};require('readline').createInterface({input:require('process').stdin}).on('close',()=>_($)).on('line',_=>_.trim().split(/\s+/).forEach(_=>a.push(_)));})(main);
```
