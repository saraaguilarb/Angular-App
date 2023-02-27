import { Component } from '@angular/core';
import { IHeading } from './IHeading';
import { IDisco } from "./IDisco";

@Component({
  selector: 'app-discography',
  templateUrl: './discography.component.html',
  styleUrls: ['./discography.component.css']
})
export class DiscographyComponent {
  heading1 = 'Top 3 Albums';
  description = 'Best of Mac Miller';  

  discos: IDisco [] = [

    {title: 'Faces',
      img: 'https://upload.wikimedia.org/wikipedia/en/7/77/MacMillerFaces.jpg',
      link: 'https://en.wikipedia.org/wiki/Faces_%28mixtape%29'},

      {title: 'Swimming',
      img: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Mac_Miller_-_Swimming.png',
      link: 'https://en.wikipedia.org/wiki/Swimming_%28Mac_Miller_album%29'},

      {title: 'Circles',
      img: 'https://tiendavinilos.es/wp-content/uploads/2022/10/imagen-1.png',
      link: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCircles_%2528Mac_Miller_album%2529&psig=AOvVaw0cSEKNRCmYBYtNBSmruUMX&ust=1677555367496000&source=images&cd=vfe&ved=0CBEQjhxqFwoTCLC9ofDitP0CFQAAAAAdAAAAABAO'}      
  ]

}
