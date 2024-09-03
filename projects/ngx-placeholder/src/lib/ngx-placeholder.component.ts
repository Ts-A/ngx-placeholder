import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-placeholder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngx-placeholder.component.html',
  styles: [
    `
      :host {
        display: inline-flex;
      }
    `,
  ],
})
export class NgxPlaceholderComponent implements OnInit {
  @Input() public width: number = 300;
  @Input() public height: number = 200;
  @Input() public border: number = 1;
  @Input() public type: 'box' | 'image' | 'text' = 'box';
  public placeholderStyle: any | undefined;

  ngOnInit() {
    this.placeholderStyle = {
      width: `${this.width - 2 * this.border}px`,
      height: `${this.height - 2 * this.border}px`,
      border: `1px solid black`,
    };
  }
}
