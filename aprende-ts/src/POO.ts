class Personaje {
	profession?: string;
	private static team: number = 0;
	constructor(
		public readonly id: number,
		public name: string,
		public level: number,
		private _hp: number)
		{}

	levelUp(): number {
		this.level = this.level + 1;
		return this.level;
	}

	changeHp(quantity: number): number{
		this._hp = this._hp + quantity;
		return this._hp
	}

	static addCharacter(): void {
		Personaje.team = Personaje.team + 1;
	}

	static getTeam(): number {
		return Personaje.team;
	}

	get hp(): number {
		return this._hp;
	}
}

const goku = new Personaje(1, 'Goku', 100, 1500);
Personaje.addCharacter();
const vegeta = new Personaje(2, 'Vegeta', 100, 1300);
Personaje.addCharacter();

goku.levelUp();
goku.changeHp(200)
console.log(goku)
console.log(vegeta)
console.log(Personaje.getTeam())
// narrow type
// if(goku instanceof Personaje){
// 	console.log('Es una instancia de Personaje')
// }