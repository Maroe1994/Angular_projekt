import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Homepage } from '../components/homepage';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Homepage],
  standalone: true,
  template: `
    <h1 class="text-3xl font-bold underline text-blue-500 ">Welcome to {{title}}!</h1>
    <app-homepage/>
    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected title = 'my-ap';
}
