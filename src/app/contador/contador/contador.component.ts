import { Component } from '@angular/core';

@Component({
	selector: 'app-contador',
	template: `
			<h1> {{ title }}</h1>
			<h3>La base es <strong>{{ base }}</strong></h3>
			<button (click)="operation(base)"> + {{ base }} </button>
			<span>{{ number }}</span>
			<button (click)="operation(-base)"> - {{ base }} </button>
		`
})
export class ContadorComponent {
	title: string = 'Contador APP';
	number: number = 0;
	base: number = 5;

	operation(value: number) {
		// No permitir que el contador sea negativo
		if (this.number + value < 0) {
			this.number = 0;
			return;
		}
		this.number += value;
	}
}