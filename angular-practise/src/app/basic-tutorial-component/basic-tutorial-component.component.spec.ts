import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTutorialComponentComponent } from './basic-tutorial-component.component';

describe('BasicTutorialComponentComponent', () => {
  let component: BasicTutorialComponentComponent;
  let fixture: ComponentFixture<BasicTutorialComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicTutorialComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicTutorialComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
