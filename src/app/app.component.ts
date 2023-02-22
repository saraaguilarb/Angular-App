import { Component } from '@angular/core';
import { IEnlace } from './IEnlace';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Biografía Mac Miller';
  description = 'Esta es una biografía del cantante Mac Miller';
  link: IEnlace ={
    link:'https://www.rollingstone.com/wp-content/uploads/2018/11/mac-miller-left-behind.jpg'
  } 
}

