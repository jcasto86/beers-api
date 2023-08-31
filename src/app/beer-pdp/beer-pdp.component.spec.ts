import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { BeerPdpComponent } from './beer-pdp.component';
import { PunkService } from '../punk.service';

describe('BeerPdpComponent', () => {
  let component: BeerPdpComponent;
  let fixture: ComponentFixture<BeerPdpComponent>;
  let mockPunkService: Partial<PunkService>;

  beforeEach(() => {
    mockPunkService = {
      getBeerById: jasmine.createSpy('getBeerById').and.returnValue(of([]))
    };

    TestBed.configureTestingModule({
      declarations: [BeerPdpComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => '1' } } } },
        { provide: PunkService, useValue: mockPunkService }
      ]
    });

    fixture = TestBed.createComponent(BeerPdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call punkService.getBeerById when ID is provided', () => {
    expect(mockPunkService.getBeerById).toHaveBeenCalledWith('1');
  });
});