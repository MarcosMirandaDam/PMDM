import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueDedicamosComponent } from './que-dedicamos.component';

describe('QueDedicamosComponent', () => {
  let component: QueDedicamosComponent;
  let fixture: ComponentFixture<QueDedicamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QueDedicamosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QueDedicamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
