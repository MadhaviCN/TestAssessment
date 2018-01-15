import { Component, ViewChild, ElementRef} from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('serverContent') servercontent:ElementRef;

  ngOnInit(){
    console.log(this.servercontent);
  }
  
  title = 'app';
  username = "test";
  enableButton = false;
  onEmptyString(){
  	this.username = "";
  }

  // (...z) => {
  // 	console.log(z);
  // }
  // print(1,2,3);
}
