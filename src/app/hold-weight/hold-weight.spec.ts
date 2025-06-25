import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoldWeight } from './hold-weight';

describe('HoldWeight', () => {
  let component: HoldWeight;
  let fixture: ComponentFixture<HoldWeight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoldWeight],
    }).compileComponents();

    fixture = TestBed.createComponent(HoldWeight);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
