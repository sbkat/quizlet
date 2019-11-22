import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocketRoomComponent } from './socket-room.component';

describe('SocketRoomComponent', () => {
  let component: SocketRoomComponent;
  let fixture: ComponentFixture<SocketRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocketRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocketRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
