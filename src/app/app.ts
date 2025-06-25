import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HoldWeight } from './hold-weight/hold-weight';

@Component({
  imports: [RouterModule, HoldWeight],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
})
export class App {
  protected title = 'archery-hand-challenge';
}
