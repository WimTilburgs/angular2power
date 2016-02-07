import {Component} from 'angular2/core';


@Component({
  selector: 'angular2-di-app',
  providers: [],
  templateUrl: 'app/angular2-di.html',
  directives: [],
  pipes: []
})
export class Angular2DiApp {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
