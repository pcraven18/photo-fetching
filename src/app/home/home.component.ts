import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../images.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imageUrl: string;

  constructor(private imagesService: ImagesService) { 
    this.fetchPhoto()
  };

  onClick(){
    this.fetchPhoto()
  }

  fetchPhoto() {
    this.imagesService.getPhoto().subscribe((response) => {
      console.log(response)
      this.imageUrl = response;
    });
  }

  ngOnInit(): void {
  }

}
