import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerPdpComponent } from './beer-pdp.component';

describe('BeerPdpComponent', () => {
  let component: BeerPdpComponent;
  let fixture: ComponentFixture<BeerPdpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerPdpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerPdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
