import { Component } from '@angular/core';
@Component ({
	selector : 'my-Successapp',
	template : '<h1>{{message}}</h1>',
	styles : [`h1{background-color : green}`]
})

export class SuccessAlertComponent{
	public message = "It's success message";
}