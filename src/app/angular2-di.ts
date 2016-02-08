import {Component} from 'angular2/core';
import {HeroesComponent} from '../app/heroes/heroes.component'
import {Logger} from './logger.service'


@Component({
  selector: 'angular2-di-app',
  providers: [Logger],
  templateUrl: 'app/angular2-di.html',
  directives: [HeroesComponent],
  pipes: []
})
export class Angular2DiApp {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
