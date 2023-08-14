import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProiezioneComponent } from './modal-proiezione.component';

describe('ModalProiezioneComponent', () => {
  let component: ModalProiezioneComponent;
  let fixture: ComponentFixture<ModalProiezioneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalProiezioneComponent]
    });
    fixture = TestBed.createComponent(ModalProiezioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
