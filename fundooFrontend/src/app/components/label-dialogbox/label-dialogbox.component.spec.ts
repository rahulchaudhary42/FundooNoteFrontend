import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelDialogboxComponent } from './label-dialogbox.component';

describe('LabelDialogboxComponent', () => {
  let component: LabelDialogboxComponent;
  let fixture: ComponentFixture<LabelDialogboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelDialogboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
