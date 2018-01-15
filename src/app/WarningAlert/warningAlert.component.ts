import { Component } from '@angular/core';
@Component ({
	selector : 'my-Warningapp',
	template : '<h1>{{message}}</h1>',
	styles : [`h1{background-color : red}`]
})

export class WarningAlertComponent{
	public message = "It's warning message";
}