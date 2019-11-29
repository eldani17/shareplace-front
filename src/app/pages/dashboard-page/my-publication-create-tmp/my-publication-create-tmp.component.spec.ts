import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPublicationCreateTmpComponent } from './my-publication-create-tmp.component';

describe('MyPublicationCreateTmpComponent', () => {
  let component: MyPublicationCreateTmpComponent;
  let fixture: ComponentFixture<MyPublicationCreateTmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPublicationCreateTmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPublicationCreateTmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
