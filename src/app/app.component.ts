import { Component } from '@angular/core';
import { HEROES } from '../mock-heroes';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
}

export class HeroesComponent implements OnInit {
  heroes = HEROES;
}
