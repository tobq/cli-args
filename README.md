# cli-args

## usage
```javascript
import "./cli-args";
console.log(process.args);
```
```
$ node app optionalMainArg -flag --option value --options.first 1 --options.second 2
{
  __MAIN: 'optionalMainArg',
  flag: true,
  option: 'value',
  options: { first: '1', second: '2' }
}
```
