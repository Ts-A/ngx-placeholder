import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-placeholder',
  standalone: true,
  imports: [],
  templateUrl: './ngx-placeholder.component.html',
  styles: ``,
})
export class NgxPlaceholderComponent {
  @Input() width: number = 300;
  @Input() height: number = 200;
  @Input() text: string = '';
}
