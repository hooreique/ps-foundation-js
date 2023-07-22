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
