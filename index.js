/**
 * Last modified: 25/08/2023
 */

import fs, { constants } from "fs"
import fsPromise from "fs/promises"
import { fileURLToPath } from "url"
import path from "path"

export * from "@ijx/utils-base"

// Need import npm modules
export const createDirs = src => {
	let ret = false;
	if(!fs.existsSync(src)) {
		var totalpath = ".";
		for(const dir of src.split(path.sep)) {
			totalpath = path.join(totalpath, dir);
			if(!fs.existsSync(totalpath)) {
				fs.mkdirSync(totalpath);
				ret = true;
			}
		}
	}
	return ret;
}
export const readable = src => { try { fs.accessSync(src, constants.R_OK); return true; } catch (error) { return false; } }
export const writable = src => { try { fs.accessSync(src, constants.R_OK | constants.W_OK); return true; } catch (error) { return false; } }
export const readableAndWritable = src => { try { fs.accessSync(src, constants.R_OK | constants.W_OK); return true; } catch (error) { return false; } }
export const existsAsync = async src => { try { await fsPromise.access(src); return true; } catch (error) { return false; } }
export const getRelative = (metaurl, ...file) => path.join(path.relative(process.cwd(), path.dirname(fileURLToPath(metaurl))), ...file);
export const getImportPath = metaurl => path.dirname(fileURLToPath(metaurl));
export const pathToImport = (metaurl, ruta) => "./" + path.relative(getImportPath(metaurl), ruta).replaceAll("\\", "/");