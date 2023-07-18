// 13/04/2023

import readLine from "readline" // Libreria nativa
export default class KeyB {
	// Variables
	static interfaceConfig = { input: process.stdin, out: process.stdout };
	static cmdsExit = ["exit", "salir", "quit"];
	static teclado = null;
	static _onClose = function() {};
	static _onError = function(err) { throw err; };
	static _onExitError = function(err) { throw err; };

	// Funciones
	static get() {
		if(KeyB.teclado === null)
			KeyB.teclado = readLine.createInterface(KeyB.interfaceConfig);
		return KeyB.teclado;
	}
	static async stop() {
		if(!KeyB.isActive())
			return;
		KeyB.teclado.close();
		KeyB.teclado = null;
		try {
			await KeyB._onClose();
		} catch (error) {
			await KeyB._onExitError(error);
		}
	}
	static isActive() {
		return KeyB.teclado !== null && KeyB.teclado.closed !== true;
	}
	static readLine() {
		return new Promise(resolve => KeyB.get().question("", resolve));
	}
	static onClose(accion=function(){}) { KeyB._onClose = accion; }
	static onError(accion=function(){}) { KeyB._onError = accion; }
	static onExitError(accion=function(){}) { KeyB._onExitError = accion; }
	static async bucle(accion = async function(){}) {
		KeyB.get();
		while(KeyB.isActive()) {
			let cadena = await KeyB.readLine();
			let [ cmdName, ...args ] = cadena.split(" ").filter(e => e!="")
			if(KeyB.cmdsExit.includes(cadena.toLowerCase()))
				KeyB.stop();
			else {
				if(cadena.trim() != "") {
					try {
						await accion(cadena, cmdName, args);
					} catch (error) {
						await KeyB._onError(error);
					}
				}
			}
		}
	}
}