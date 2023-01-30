import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(
    private ActivatedRoute:ActivatedRoute,
    private Router : Router) {
      let movieDetails = this.Router.getCurrentNavigation()?.extras.state
      console.log(movieDetails);
   }

  ngOnInit(): void {
    
  }

}
