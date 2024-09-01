import { NgStyle } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-placeholder',
  standalone: true,
  imports: [NgStyle],
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
  public placeholderStyle: any | undefined;

  ngOnInit() {
    this.placeholderStyle = {
      width: `${this.width - 2 * this.border}px`,
      height: `${this.height - 2 * this.border}px`,
      border: `1px solid black`,
    };
  }
}
