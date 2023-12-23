import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLifeCyclePageComponent } from './test-life-cycle-page.component';

describe('TestLifeCyclePageComponent', () => {
  let component: TestLifeCyclePageComponent;
  let fixture: ComponentFixture<TestLifeCyclePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestLifeCyclePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestLifeCyclePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
