import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartemensComponent } from './departemens.component';

describe('DepartemensComponent', () => {
  let component: DepartemensComponent;
  let fixture: ComponentFixture<DepartemensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepartemensComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepartemensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
