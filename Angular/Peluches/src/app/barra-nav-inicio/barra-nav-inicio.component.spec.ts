import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavInicioComponent } from './barra-nav-inicio.component';

describe('BarraNavInicioComponent', () => {
  let component: BarraNavInicioComponent;
  let fixture: ComponentFixture<BarraNavInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarraNavInicioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarraNavInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
