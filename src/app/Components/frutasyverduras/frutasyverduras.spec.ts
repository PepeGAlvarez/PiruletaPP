import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Frutasyverduras } from './frutasyverduras';

describe('Frutasyverduras', () => {
  let component: Frutasyverduras;
  let fixture: ComponentFixture<Frutasyverduras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Frutasyverduras],
    }).compileComponents();

    fixture = TestBed.createComponent(Frutasyverduras);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
