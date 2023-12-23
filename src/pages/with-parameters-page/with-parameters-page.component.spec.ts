import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithParametersPageComponent } from './with-parameters-page.component';

describe('WithParametersPageComponent', () => {
  let component: WithParametersPageComponent;
  let fixture: ComponentFixture<WithParametersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithParametersPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithParametersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
