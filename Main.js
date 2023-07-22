const main = ({ next, nextInt }) => {
    const foo = next();
    const bar = nextInt();
    // ...
};

(func => {
    const { createInterface } = require('readline');
    const { stdin } = require('process');
    // const { Readable } = require('stream');

    const input = stdin;
    // const input = Readable.from('3 2\nB A R\nA\nB');

    const tokens = [];
    let cursor = -1;
    const scanner = {
        next: () => tokens[++cursor],
        nextInt: () => parseInt(scanner.next()),
    };

    createInterface({ input })
        .on('close', () => func(scanner))
        .on('line', line =>
            line
                .trim()
                .split(/\s+/)
                .forEach(token => tokens.push(token))
        );
})(main);
