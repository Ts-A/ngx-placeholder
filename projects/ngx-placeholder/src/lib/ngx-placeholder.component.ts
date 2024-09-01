import { NgStyle } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-placeholder',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './ngx-placeholder.component.html',
  styles: ``,
})
export class NgxPlaceholderComponent implements OnInit {
  @Input() public width: number = 300;
  @Input() public height: number = 200;
  public placeholderStyle: any | undefined;

  ngOnInit() {
    this.placeholderStyle = {
      width: `${this.width}px`,
      height: `${this.height}px`,
      border: `1px solid black`,
    };
  }
}
