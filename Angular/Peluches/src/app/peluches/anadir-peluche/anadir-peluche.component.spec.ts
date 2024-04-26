import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirPelucheComponent } from './anadir-peluche.component';

describe('AnadirPelucheComponent', () => {
  let component: AnadirPelucheComponent;
  let fixture: ComponentFixture<AnadirPelucheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnadirPelucheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnadirPelucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
