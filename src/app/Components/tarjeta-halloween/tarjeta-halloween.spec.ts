import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TarjetaHalloweenComponent } from './tarjeta-halloween';

describe('TarjetaHalloween', () => {
  let component: TarjetaHalloweenComponent;
  let fixture: ComponentFixture<TarjetaHalloweenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaHalloweenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaHalloweenComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
