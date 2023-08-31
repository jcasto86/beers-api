import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeerCardComponent } from './beer-card.component';

describe('BeerCardComponent', () => {
  let component: BeerCardComponent;
  let fixture: ComponentFixture<BeerCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeerCardComponent]
    });

    fixture = TestBed.createComponent(BeerCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should format the name for URL correctly', () => {
    const inputName = 'Sample Beer Name';
    const expectedFormattedName = 'sample-beer-name';

    const formattedName = component.formatNameForURL(inputName);

    expect(formattedName).toEqual(expectedFormattedName);
  });
});