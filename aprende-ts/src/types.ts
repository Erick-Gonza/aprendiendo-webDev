/*
	Tipos de JS
		- number
		- string
		- boolean
		- null
		- undefined
		- object
		- function

	Tipos de TS
		- any
		- unknown
		- array
		- never
		- tuplas
		- enum

	Tipos inferidos
*/

let extincionDinosaurios:number = 76_000_000;
let dinosaurioFavorito: string = 'Tyrannosaurus Rex';
let extintos: boolean = true;

function chanchitoFeliz(config: boolean){
	return config
}

console.log(chanchitoFeliz(extintos))

let dinosaurios: string[] = ['Tyrannosaurus Rex', 'Triceratops', 'Stegosaurus', 'Velociraptor'];
let years: number[] = [76_000_000, 66_000_000, 65_000_000, 75_000_000];
let checks: boolean[] = []
let years2: Array<number> = [76_000_000, 66_000_000, 65_000_000, 75_000_000];

// years2.map((x)=> x.) el autocompletado sugiere metodos del tipo de dato

// tuplas
let tupla: [number, string[]] = [1, dinosaurios]
// tupla.push(2) // error

// enum
const chica = 's'
const mediana = 'm'
const grande = 'l'
const extraGrande = 'xl'

// PascalCase
const enum Tallas {
	Chica = 's',
	Mediana = 'm',
	Grande = 'l',
	ExtraGrande = 'xl'
}

const variable1 = Tallas.Chica
console.log(variable1)

const enum LoadingState {
	Idle, Loading, Success, Error
}

const state = LoadingState.Loading

type Direccion = {
	number: number,
	calle: string,
	pais: string
}

type Persona = {
	readonly id: number,
	nombre?: string,
	talla: Tallas,
	direccion: Direccion
}

const objeto: Persona = {
	id:1,
	nombre:'Hello world!',
	talla: Tallas.Grande,
	direccion: {
		number: 1,
		calle: 'Calle',
		pais: 'Mexico'
	}
}

const arr: Persona[] = []

console.log(objeto)

const fn: (edad: number) => string = (edad: number) => {
	if(edad > 17) {
		return 'puedes ingresar'
	} else {
		return 'no puedes ingresar'
	}
}

function validaEdad(edad: number, msg = 'Prueba'): string {
	if(edad > 17) {
		return `puedes ingresar ${msg}`
	} else {
		return `no puedes ingresar ${msg}`
	}
}

console.log(fn(25))
console.log(validaEdad(17))

function userError(): never {
	throw new Error('Error de usuario')
}

// UNION TYPES, se usa para definir tipos de datos que pueden ser de varios tipos

let puntaje: number | string = 100

puntaje = '100'

type Animal = {
	id: number,
	estado: string
}

type User = {
	id: number,
	name: string
}

let animal: Animal | User = {id: 1, name: ''}


function sumatoria(n: number | string):number{
	if(typeof n === 'number') {
		return n + 2
	}
	return parseInt(n) + 2
}

// Intersection types, se usa para unir tipos

type Audit = {
	createdAt: string,
	updatedAt: string
}

type Product = {
	name: string
}

const product: Audit & Product = {
	name: 'Producto',
	createdAt: '2021-01-01',
	updatedAt: '2021-01-01'
}

// Literal types, se usa para definir tipos de datos que solo pueden ser un valor especifico

type Fibo = 0 | 1 | 2 | 3 | 4 | 5
const nDeFibonacci: Fibo = 4

// Nullable types, se usa para definir tipos de datos que pueden ser nulos

function toNumber(s:string | null | undefined): number{
	if(!s) {
		return 0
	} else {
		return parseInt(s)
	}
}

const n = toNumber(null)

// Optional chaining, se usa para evitar errores al acceder a propiedades de objetos que pueden ser nulos

function getUser(id: number){
	if(id < 0) {
		return null
	} return {
		id: 1,
		name: 'Erick',
		createdAt: new Date()
	}
}

const user = getUser(1)
console.log('User: ', user?.createdAt)

const arr1 = null
arr1?.[0]

const fn5:any = null
fn5?.()

// Nullish coalescing, se usa para asignar un valor por defecto a una variable que puede ser nula

const difficulty: number | null = 2

const dbUser = {
	id: 1,
	name: 'Erick',
	createdAt: new Date(),
	difficulty: difficulty ?? 1
}

console.log(dbUser)

// type assertions, se usa para forzar el tipo de dato de una variable cuando se sabe que es de un tipo especifico

const elem: any = null;
const elem2 = elem as number;

const input1 = document.getElementById('username') as HTMLInputElement
const input2 = <HTMLInputElement>document.getElementById('username')

input1.value = 'Erick'
input2.value = 'Gzz'

// type narrowing, se usa para definir en base al tipo de dato que es una variable que acciones se pueden realizar

function print2(x: string | number) {
	if(typeof x  === 'number') {
		// all number methods
		console.log(x.toFixed(2))
	}

	if(typeof x === 'string') {
		// all string methods
		console.log(x.toUpperCase())
	}
}

// type unknown, se usa para definir un tipo de dato que puede ser de cualquier tipo

function procesarTodo(tarea: unknown) {
	if( typeof tarea === 'string'){
		tarea.toLowerCase()
	}
	if( typeof tarea === 'number'){
		tarea.toFixed(2)
	}

	// if(tarea instanceof String){

	// }
}
