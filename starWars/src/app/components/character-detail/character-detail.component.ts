import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Character, Film } from 'src/app/interfaces';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  @Input() character!:Character;
  films:Film[]=[]

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    forkJoin(this.character.films.map(film=>this.http.get<Film>(`${film}`)))
      .subscribe(results=> {
        this.films=results
      })
  }
  get titles(){
    return this.films.map(f=>"Episode "+f.episode_id).join(", ")
  }
}
