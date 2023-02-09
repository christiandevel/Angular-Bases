import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
	selector: 'app-nuevo',
	templateUrl: './nuevo.component.html',
	styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent {

	@Input() nuevo: Personaje = {
		nombre: '',
		poder: 0
	};
	
	constructor(private DBZService: DbzService) { }
	
	// @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

	agregar(): void {
		if (this.nuevo.nombre.trim().length === 0) { return; }
		this.DBZService.agregarPersonaje(this.nuevo);
	}

}
