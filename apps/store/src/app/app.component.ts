import { Component, OnInit } from '@angular/core';
import { formatRating } from '@bg-hoard/store/util-formatters';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Board Game Hoard';
  games: Observable<any[]>;
  formatRating = formatRating;
  constructor(private http: HttpClient) {
    this.games = this.http.get<[]>('/api/games');
  }
}
