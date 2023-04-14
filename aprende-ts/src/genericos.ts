// function log<T, V>(a: T, b: V): V {
// 	console.log(a, b)
// 	return b
// }

// log<string, number>('dato', 23)
// log<string, string>('dato', 'texto')

// log(true, 23)

async function fetchData<T>(recurso: string): Promise<T> {
	const respuesta = await fetch(`${recurso}`)
	return respuesta.json()
}

type UserT = {
	id: number,
	name: string
}

async function main() {
	const user = await fetchData<UserT>('/usuarios')
}

type Computadora = {
	encender: () => void,
	apagar: () => void,
}

class Programador<T> {
	computadora: T;
	constructor(t: T){
		this.computadora = t;
	}
}

const programador = new Programador<Computadora>({encender: () => {}, apagar: () => {}})

const programador2 = new Programador<string>('texto')

// programador.computadora.apagar()
// programador2.computadora

interface KeyValue<T, V> {
	key: T,
	value: V
}

interface ProductT {
	id: number,
	name: string
}

function fetchProduct(): KeyValue<string, ProductT>{
	return {
		key: 'id producto',
		value: {id: 1, name: 'producto'}
	}
}

function fetchStock(): KeyValue<string, number>{
	return {
		key: 'id producto',
		value: 1200
	}
}

interface UserV {
	id: string,
	name: string
}

function print<T extends UserV>(t: T): T{
	console.log(t)

	return t
}

print({id: '1', name: 'nombre'})

class Estado<T> {
	private data: T[] = []

	add(item: T): void {
		this.data.push(item)
	}

	get(): T[] {
		return this.data
	}
}

const estadoUser = new Estado<UserV>
// estadoUser.get()

class EstadoEliminar<T> extends Estado<T> {
	eliminar(id: string){
		//
	}
}

const estadoEliminar = new EstadoEliminar<UserV>()
// estadoEliminar.


type Calendar = {
	id: number,
	fuente: string
	dueno: string
}

const calendar: Calendar = { id: 1, fuente: 'google', dueno: 'yo' }

function getProp<T>(objeto: T, property: keyof T): unknown{
	return objeto[property]
}

getProp<Calendar>(calendar, 'id')
getProp<Calendar>(calendar, 'fuente')
// getProp<Calendar>(calendar, 'propnoexiste')

type Punto = {
	x: number,
	y: number
	desc?: string
}

// Opcional basado en type Punto
type PuntoOp = Partial<Punto>
type PuntoReq= Required<Punto>

const keyVal: Record<string, number> = {
	'string': 22
}

// Lo mismo que record
type kv = {[key:string]: number}

// Omit una prop
const p: Omit<Punto, 'desc'> = {
	x: 1,
	y: 2
}

// Omitr multiple props
const z: Omit<Punto, 'desc' | 'y'> = {
	x: 1,
}

//
const p1: Pick<Punto, 'x' | 'y'> = {
	x: 1,
	y: 2
}

// no se puede modificar
const readOnly: Readonly<Punto> = {
	x: 1,
	y: 2,
	desc: 'texto'
}