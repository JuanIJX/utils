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
- NOOP()
- isInteger(num: any)
- isFloat(num: any)
- isClass(entity: any)
- isNullable(data: any)
- isType(data: any, type: string)
- isTypeNotNull(data: any, type: string)
- isTypeStringNotEmpty(data: any)
- wait(time=1)
- thread(func: function)
- echo(cad: any)
- getDate(...t)
- basename(path: string, sep="/")
- dirname(path: string, sep="/")
- makeid(length=5)
- decToHex(num: number)
- base64_encode(data: any)
- base64_decode(data: any)
- decimalAdjust(value: number, exp=0, type="round")
- secondsToDhms(seconds: number)
- stringifyNoCircular(obj: object, space=null)
- replaceSqlValues(sqlQuery: string, data: (string | number | null)[])
- isJson(text: string)
- escapeHtml(str: string)
- unescapeHtml(str: string)
- readArgs(validArgs: object, initChar="-", defaultBool=false)

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
