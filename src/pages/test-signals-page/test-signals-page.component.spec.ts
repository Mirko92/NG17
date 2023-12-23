import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSignalsPageComponent } from './test-signals-page.component';

describe('TestSignalsPageComponent', () => {
  let component: TestSignalsPageComponent;
  let fixture: ComponentFixture<TestSignalsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestSignalsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestSignalsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
