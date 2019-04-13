# cli-args

## usage

```javascript
import args from ".";
console.log(args);
```
```
$ node test optionalMainArg -flag --option value --options.first 1 --options.second 2
{
  __MAIN: 'optionalMainArg',
  flag: true,
  option: 'value',
  options: { first: '1', second: '2' }
}
```

---
### Illegal usage

```node test -a -a```
> Error: Argument 'a' has already been set

`node test --a value -a.b`
> Error: Illegal argument 'a.b'
              Can not set option 'a' of value 'value'


`node test main unexpected`
> Error: Unexpected argument value 'unexpected'


