import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from './models';
import { User } from './models/User';
import { Store } from '@ngrx/store';
import * as fromRoot from './store/reducers';
import * as filmAction from './store/actions/films';
import { FilmService } from './store/film.service';


@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})

export class ExampleComponent implements OnInit {
  films$: Observable<Film[]>;
  users$: Observable<User[]>;
  selected$: Observable<any>;
  users;
  constructor(private store: Store<fromRoot.State>, private filmService: FilmService) {
    this.films$ = store.select(fromRoot.getAllFilms);
    this.selected$ = store.select(fromRoot.getSelectedFilm);
    this.users$ = store.select(fromRoot.getUsers);
  }

  ngOnInit(): void {
    this.filmService.getUsers().subscribe((data) => {
      this.users = data;
      console.log(this.users);
      this.store.dispatch(new filmAction.GetAllUsers(this.users));
    });

  }

  onSelect(id: number) {
    this.store.dispatch(new filmAction.Select(id));
  }


}

