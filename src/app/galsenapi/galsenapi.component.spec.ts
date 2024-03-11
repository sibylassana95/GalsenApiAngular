import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalsenapiComponent } from './galsenapi.component';

describe('GalsenapiComponent', () => {
  let component: GalsenapiComponent;
  let fixture: ComponentFixture<GalsenapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalsenapiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalsenapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
