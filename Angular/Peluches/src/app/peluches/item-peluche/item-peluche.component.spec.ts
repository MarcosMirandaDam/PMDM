import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPelucheComponent } from './item-peluche.component';

describe('ItemPelucheComponent', () => {
  let component: ItemPelucheComponent;
  let fixture: ComponentFixture<ItemPelucheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemPelucheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemPelucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
