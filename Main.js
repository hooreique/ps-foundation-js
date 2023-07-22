const main = ({ next, nextInt }) => {
    const foo = next();
    const bar = nextInt();
    // ...
};

(func => {
    const { stdin } = require('process');
    // const { Readable } = require('stream');

    const input = stdin;
    // const input = Readable.from('3 2\nB A R\nA\nB');

    const tokens = [];
    let i = -1;
    const scanner = {
        next: () => tokens[++i],
        nextInt: () => parseInt(scanner.next()),
    };
    require('readline')
        .createInterface({ input })
        .on('close', () => func(scanner))
        .on('line', line =>
            line
                .trim()
                .split(/\s+/)
                .forEach(token => tokens.push(token))
        );
})(main);
