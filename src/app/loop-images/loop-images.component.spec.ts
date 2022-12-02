import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopImagesComponent } from './loop-images.component';

describe('LoopImagesComponent', () => {
  let component: LoopImagesComponent;
  let fixture: ComponentFixture<LoopImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoopImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoopImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
