import { Component } from '@angular/core';
import {Goal} from './goal';


@Component({
  selector: 'app-root',
  template: `
    <h1> My Goals </h1>
    <p> My goal for today is {{goal}} </p>
  `
})
export class AppComponent {
  goal = 'Watch Finding feysal';
}


