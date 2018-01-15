import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector : 'card',
    templateUrl : 'card.component.html'
})

export class CardComponent implements OnInit {
    @Input() header : string = "This is Header";
    @Input() footer : string = "This is Footer";
    ngOnInit(){

    }
}