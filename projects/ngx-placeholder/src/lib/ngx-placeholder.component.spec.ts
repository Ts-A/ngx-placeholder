import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPlaceholderComponent } from './ngx-placeholder.component';

describe('NgxPlaceholderComponent', () => {
  let component: NgxPlaceholderComponent;
  let fixture: ComponentFixture<NgxPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxPlaceholderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
