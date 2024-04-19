export class Services{
	public id_service: number;
	public email_demandeur: string;
	public numero_demandeur: number;
	public enveloppe: string;
	public type_service: string;
	public lieu_service: string;
	public objet_service: string;

	constructor(id_service:number, enveloppe:string, email_demandeur: string, numero_demandeur:number, type_service:string, lieu_service:string, objet_service:string){
		this.id_service = id_service;
		this.email_demandeur = email_demandeur;
		this.numero_demandeur = numero_demandeur;
		this.enveloppe = enveloppe;
		this.type_service = type_service;
		this.lieu_service = lieu_service;
		this.objet_service = objet_service;

	}
}