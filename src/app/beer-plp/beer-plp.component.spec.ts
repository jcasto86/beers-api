import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerPlpComponent } from './beer-plp.component';

describe('BeerPlpComponent', () => {
  let component: BeerPlpComponent;
  let fixture: ComponentFixture<BeerPlpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerPlpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerPlpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
