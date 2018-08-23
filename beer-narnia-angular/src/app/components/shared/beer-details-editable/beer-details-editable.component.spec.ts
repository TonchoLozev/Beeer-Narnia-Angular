import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerDetailsEditableComponent } from './beer-details-editable.component';

describe('BeerDetailsEditableComponent', () => {
  let component: BeerDetailsEditableComponent;
  let fixture: ComponentFixture<BeerDetailsEditableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerDetailsEditableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerDetailsEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
