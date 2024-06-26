# Utils

Generic functions library

## Installation

Use the package manager npm to install utils.

```bash
npm install @ijx/utils
```

## Usage

```js
import "@ijx/utils"
```

## List of prototypes
- Array
	- filter2(func)
	- deleteElement(element)
	- concat2(...arrays)
	- mapAsync(func)
	- hasDuplicates()
- Object
	- getKeyByValue(value)
	- clone()
	- assign(obj)
	- defObject(fuente)
	- forEach(fn, thisArg)
	- filter(fn, thisArg)
	- map(fn, thisArg)
	- getName()
	- getMethods()
- String
	- camelToSnakeCase()
	- camelCase(sep="_", type=true)
	- rellenar(size, character=' ')
	- delExt()
	- getExt()
	- zeroPad(n = 2)
	- suspensivos(max, chars="...")
- Number
	- zeroPad(n = 2)
- Date
	- format(format="d/m/Y")

## List of functions
- isInteger(num)
- isFloat(num)
- isClass(entity)
- isNullable(data)
- isType(data, type)
- isTypeNotNull(data, type)
- isTypeStringNotEmpty(data)
- wait(time=1)
- thread(func)
- echo(cad)
- getTimestamp()
- getDate(...t)
- makeid(length=5)
- decToHex(num)
- base64_encode(data)
- base64_decode(data)
- decimalAdjust(value, exp=0, type="round")
- secondsToDhms(seconds)
- stringifyNoCircular(obj, space=null)
- readArgs(validArgs: object, initChar="-", defaultBool=false)
- replaceSqlValues(sqlQuery: string, data: (string | number | null)[])

## List of functions with dependencies
- createDirs(src: string)
- readable(src: string)
- writable(src: string)
- readableAndWritable(src: string)
- existsAsync(src: string)
- getRelative(metaurl, ...file)
- getImportPath(metaurl)
- pathToImport(metaurl, ruta)
- exec(command: string)
