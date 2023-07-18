# Utils

Generic functions library

## Installation

Use the package manager npm to install foobar.

```bash
npm install @ijx/utils
```

## Usage

```js
import "@ijx/utils"
```

## List of functions

-   Array
	- filter2(func)
	- deleteElement(element)
	- concat2(...arrays)
	- mapAsync(func)
	- hasDuplicates()
-   Object
	- getKeyByValue(value)
	- clone()
	- assign(obj)
	- defObject(fuente)
	- map(fn, thisArg)
	- getName()
	- getMethods()
-   String
	- camelToSnakeCase()
	- camelCase(sep="_", type=true)
	- rellenar(size, character=' ')
	- delExt()
	- getExt()
	- zeroPad(n = 2)
	- suspensivos(max, chars="...")
-   Date
	- get()
	- format(format="d/m/Y")
-   Functions
	- isInteger(num)
	- isFloat(num)
	- isClass(entity)
	- isNullable(data)
	- isType(data, type)
	- isTypeNotNull(data, type)
	- isTypeStringNotEmpty(data )
	- wait(time=1)
	- thread(func)
	- echo(cad)
	- getTimestamp()
	- getDate(...t)
	- getRelative(metaurl, ...file)
	- makeid(length=5)
	- decToHex(num)
	- base64_encode(data)
	- base64_decode(data)
	- decimalAdjust(value, exp=0, type="round")
	- secondsToDhms(seconds)
	- stringifyNoCircular(obj, space=null)
	- createDirs(src)
