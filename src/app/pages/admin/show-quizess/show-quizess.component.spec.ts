import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowQuizessComponent } from './show-quizess.component';

describe('ShowQuizessComponent', () => {
  let component: ShowQuizessComponent;
  let fixture: ComponentFixture<ShowQuizessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowQuizessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowQuizessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
