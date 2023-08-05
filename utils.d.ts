export declare function isInteger(num: any): boolean;
export declare function isFloat(num: any): boolean;
export declare function isClass(entity: any): boolean;
export declare function isNullable(data: any): boolean;
export declare function isType(data: any, type: string): boolean;
export declare function isTypeNotNull(data: any, type: string): boolean;
export declare function isTypeStringNotEmpty(data: any): boolean;
export declare function wait(time: number): Promise<void>;
export declare function thread(func: Function): Promise<void>;
export declare function echo(cad: string): void;
export declare function getTimestamp(): number;
export declare function getDate(...t: any): Date;
export declare function getRelative(metaurl: string, file: string[]): string;
export declare function getImportPath(metaurl: string): string;
export declare function pathToImport(metaurl: string, ruta: string): string;
export declare function makeid(length: number): string;
/**
 * Convierte un int en string hexadecimal
 * 
 * @param num: int comprendido en [0, 255]
 * @return: string con el dato en hexadecimal, ej: 0d
 */
export declare function decToHex(num: number): string;
export declare function base64_encode(data: string): string;
export declare function base64_decode(data: string): string;
/**
 * Ajuste decimal de un número.
 * 
 * @param {Number}  value El numero.
 * @param {Integer} exp   El exponente (el logaritmo 10 del ajuste base).
 * @param {String}  type  El tipo de ajuste (round, floor, ceil).
 * @returns {Number} El valor ajustado.
 */
export declare function decimalAdjust(value: number, exp: number, type: string): number;
export declare function secondsToDhms(seconds: number): object;
export declare function stringifyNoCircular(obj: object, space: string|null): string;
export declare function createDirs(src: string): boolean;
export declare function readable(src: string): boolean;
export declare function writable(src: string): boolean;
export declare function readableAndWritable(src: string): boolean;
export declare function existsAsync(src: string): Promise<boolean>;

/**
 * Lectura de parámetros de arranque al ejecutar un script.
 * Ejemplo:
 * Arranque: ./script.js a b --debug c --ip d e --port 32.4
 * validArgs = { debug: 0, ip: 1, port: 2 }
 * salida = { debug: true, ip: 'd', port: 32 }
 * 
 * @param {object} validArgs Objeto con los datos, los keys serán el nombre
 * para buscar y el valor será el tipo. 0 = boolean, 1 = string, 2 = integer, 3 = float
 * @param {string} initChar Caracter inicial de los parámetros, default -
 * @returns Objeto con los datos leídos
 */
export declare function readArgs(validArgs: object, initChar: string, defaultBool: boolean): object;