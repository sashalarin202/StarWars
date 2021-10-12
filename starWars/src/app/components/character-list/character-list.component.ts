import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Film, MainData } from 'src/app/interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characters: MainData = {results:[]};
  constructor(private http: HttpClient) { }
  film: string='Was in episode:';



  ngOnInit() {
    this.http.get<MainData>(`${environment.apiURL}/.json`)
      .subscribe(characters => {
        this.characters=characters;
      })
  }

}
