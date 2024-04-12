import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CENEVALComponent } from './ceneval.component';

describe('CENEVALComponent', () => {
  let component: CENEVALComponent;
  let fixture: ComponentFixture<CENEVALComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CENEVALComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CENEVALComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
