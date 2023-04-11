/**
 * Cuando no se comparte la logica de una clase padre que se hereda
 * se puede implementar una interface en vez de una clase padre
 * intefaces se utilizan para las clases, type para todo lo demas
 */

interface Animalito {
	name: string;

	caminar (): void;
	onomatopeya (): void;
}

class Caballo implements Animalito {
	name: string = 'Tiro al blanco';

	caminar() {
		console.log("Cabalgando")
	}

	onomatopeya() {
		return 'hin'
	}
}

class Cerdo implements Animalito {
	name: string = 'Puerquito valiente';

	caminar() {
		console.log("caminando")
	}

	onomatopeya() {
		return 'oinc'
	}
}

class Perro implements Animalito {
	name: string = 'Ahri';
	caminar() {
		console.log('gateando')
	}
	onomatopeya() {
		return 'guau'
	}
}

// index signature, se utiliza para crear un diccionario de objetos
class DiccionarioUsuarios {
	[id: string]: string;
}

let diccionarioUsuarios = new DiccionarioUsuarios();
diccionarioUsuarios['1a'] = 'Juan';
diccionarioUsuarios['2b'] = 'Pedro';
diccionarioUsuarios['3'] = 'Maria';

console.log(diccionarioUsuarios)