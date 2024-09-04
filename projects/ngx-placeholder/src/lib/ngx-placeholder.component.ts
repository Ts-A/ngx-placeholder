import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-placeholder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngx-placeholder.component.html',
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
})
export class NgxPlaceholderComponent implements OnInit, OnDestroy {
  @Input() public width: string = '100%';
  @Input() public height: string = '100%';
  @Input() public border: string = '1px';
  @Input() public type: 'box' | 'image' | 'text' = 'box';
  @Input() phrase: string = 'P';
  public placeholderStyle: any | undefined;

  ngOnInit() {
    this.placeholderStyle = {
      width: `calc(${this.width} - 2 * ${this.border})`,
      height: `calc(${this.height} - 2 * ${this.border})`,
      border: `${this.border} solid black`,
      backgroundColor: '#dddddd',
      margin: '0px',
    };
    if (this.type === 'text') {
      this.placeholderStyle.display = 'flex';
      this.placeholderStyle['align-items'] = 'center';
      this.placeholderStyle['justify-content'] = 'center';
    }
  }

  ngOnDestroy(): void {
    this.placeholderStyle = undefined;
  }
}
