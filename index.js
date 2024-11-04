/**
 * Last modified: 18/12/2023
 */

import path from "path"
import fsPromise from "fs/promises"
import fs, { constants } from "fs"
import { fileURLToPath } from "url"
import { exec as exec2 } from "child_process"

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
};
export const readable = src => { try { fs.accessSync(src, constants.R_OK); return true; } catch (error) { return false; } };
export const writable = src => { try { fs.accessSync(src, constants.R_OK | constants.W_OK); return true; } catch (error) { return false; } };
export const readableAndWritable = src => { try { fs.accessSync(src, constants.R_OK | constants.W_OK); return true; } catch (error) { return false; } };
export const existsAsync = async src => { try { await fsPromise.access(src); return true; } catch (error) { return false; } };
export const getRelative = (metaurl, ...file) => path.join(path.relative(process.cwd(), path.dirname(fileURLToPath(metaurl))), ...file);
export const getImportPath = metaurl => path.dirname(fileURLToPath(metaurl));
export const pathToImport = (metaurl, ruta) => "./" + path.relative(getImportPath(metaurl), ruta).replaceAll("\\", "/");
export const exec = command => new Promise((resolve, reject) => exec2(command, (error, stdout, stderr) => {
	if (error)		reject(error);
	else if(stderr)	reject(stderr);
	else			resolve(stdout);
}));