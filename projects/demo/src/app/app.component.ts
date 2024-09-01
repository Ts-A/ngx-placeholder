import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxPlaceholderComponent } from 'ngx-placeholder';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxPlaceholderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
