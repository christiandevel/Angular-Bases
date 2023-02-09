import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.moduel';
import { HeroesModule } from './heroes/heroes.module';


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		HeroesModule,
		ContadorModule,
		BrowserModule,
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
