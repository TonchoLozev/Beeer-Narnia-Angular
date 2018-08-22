import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerBoxComponent } from './beer-box.component';

describe('BeerBoxComponent', () => {
  let component: BeerBoxComponent;
  let fixture: ComponentFixture<BeerBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
