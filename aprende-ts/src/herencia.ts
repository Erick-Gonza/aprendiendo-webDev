/**
 * PRODUCTO
 * name
 * price
 * desc
 * created_at
 * created_by
 * stock
 * sku
 *
 * CATEGORIA
 * name
 * desc
 * created_at
 * created_by
 */

// abstract para que no se pueda instanciar la clase
abstract class DatosBasicos{
	constructor(
		public name: string,
		public desc: string,
		// protected permite acceder a la propiedad desde la clase y las clases que hereden
		protected created_at: Date,
		protected created_by: number,
	) {}

	get fullYear () {
		return this.created_at.getFullYear()
	}

	get fullDesc () {
		return `${this.name} - ${this.desc}`
	}

	// abstract para implementar el metodo en las clases que hereden.
	abstract save(): void;
}

// Herencia, usando extends y super()
class Producto extends DatosBasicos {
	constructor (
		public stock: number,
		public sku: number,
		name: string,
		desc: string,
		created_at: Date,
		created_by: number,
	) {
		super(name, desc, created_at, created_by)
	}

	// override para sobreescribir un metodo
	override get fullDesc (): string{
		return 'Producto: ' + super.fullDesc
	}

	save() {
		console.log('Guardando producto');
	}
}

// Herencia, usando extends y super()
class Categoria extends DatosBasicos {
	public productos: Producto[] = []
	constructor (
		name: string,
		desc: string,
		created_at: Date,
		created_by: number,
	) {
		super(name, desc, created_at, created_by)
	}

	addProducto(producto: Producto){
		this.productos.push(producto)
	}

	// override para sobreescribir un metodo
	override get fullDesc (): string{
		return 'Categoria: ' + super.fullDesc
	}

	save() {
		console.log('Guardando categoria');
	}
}

let producto1 = new Producto(100, 1, 'Iphone', 'Este es un smartphone', new Date(), 1)
let producto2 = new Producto(200, 1, 'Xiaomi', 'Este es un smartphone', new Date(), 1)

let categoria1 = new Categoria('Smartphones', 'Estos son smartphones', new Date(), 1)
categoria1.addProducto(producto1)
categoria1.addProducto(producto2)

console.log(producto1.fullDesc);
console.log(categoria1.fullDesc);