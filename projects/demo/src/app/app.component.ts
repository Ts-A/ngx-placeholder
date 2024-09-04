import { Component, Input } from '@angular/core';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { RouterOutlet } from '@angular/router';
import { NgxPlaceholderComponent } from 'ngx-placeholder';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxPlaceholderComponent, MatGridTile, MatGridList],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
