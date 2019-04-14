const PRECEDER = "-";
const pargs = process.argv.slice(2); // preceding arguments

const processArgs = {};

function setArgument(arg, value) {
    const argKeys = arg.split(".");
    let currentArgs = processArgs;
    const lastIndex = argKeys.length - 1;
    for (let k = 0; k < lastIndex; k++) {
        const key = argKeys[k];
        if (!(key in currentArgs)) currentArgs[key] = {};
        currentArgs = currentArgs[key];
        if (typeof currentArgs !== "object")
            throw new Error(`Illegal argument '${arg}'
            Can not set option '${key}' of value '${currentArgs}'`)
    }
    const option = argKeys[lastIndex];
    if (option in currentArgs) throw new Error(`Argument '${arg}' has already been set`);
    currentArgs[option] = value;
}

let i = 0;
if (pargs.length !== 0) {
    const firstArg = pargs[0];
    if (firstArg[0] === PRECEDER) {
    } else {
        i++;
        processArgs.__MAIN = firstArg;
    }
}
while (i < pargs.length) {
    const arg = pargs[i];
    if (arg[0] === PRECEDER) {
        if (arg[1] === PRECEDER) {
            const option = arg.slice(2);
            i++;
            if (i < pargs.length) {
                setArgument(option, pargs[i]);
            } else throw new Error(`Missing value for argument '${option}'`);
        } else {
            setArgument(arg.slice(1), true);
        }
    } else throw new Error(`Unexpected argument value '${arg}'`);
    i++;
}

export default Object.freeze(processArgs);