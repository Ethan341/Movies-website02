import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-dashboard',
  templateUrl: './movies-dashboard.component.html',
  styleUrls: ['./movies-dashboard.component.css']
})
export class MoviesDashboardComponent implements OnInit {

  constructor(private http : HttpClient,
    private Router: Router) { }
  moviesCollection: any= []
  ngOnInit(): void {
    this.fetchMovies()
    
  }

  fetchMovies(){
    this.http.get('https://api.tvmaze.com/shows').subscribe((Response)=>{
      console.log(Response);
      this.moviesCollection = Response
      this.filterAllGenere(Response)
    })
  }

  filterAllGenere(Response:any){
    let genere : any = []
    Response.forEach((movie: any) => {
      let exist = false; 
      for(let i = 0 ; i< genere.length; i++){
          if(genere[i].genereName == movie.genres[0]){
            exist = true;
            genere[i].speceficGenereCollection.push(movie);
          }
      }
      if(!exist){
        genere.push({genereName: movie.genres[0], speceficGenereCollection:[movie] })
      }
    });
    console.log(genere);
    this.moviesCollection = genere
  }

  showMovieDetails(movie:any){
    console.log("Routing to details");
    this.Router.navigate(['details'],{state: movie});
  }
}
