export class Users{
	public id_user: number;
	public name: string;
	public password: string;
	public email: string;

	constructor(id_user:number,name: string, password:string, email:string){
		this.id_user = id_user;
		this.name = name;
		this.password = password;
		this.email = email;

	}
}