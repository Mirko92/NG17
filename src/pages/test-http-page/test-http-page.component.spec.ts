import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHttpPageComponent } from './test-http-page.component';

describe('TestHttpPageComponent', () => {
  let component: TestHttpPageComponent;
  let fixture: ComponentFixture<TestHttpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHttpPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestHttpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
