import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManejoNovoPage } from './manejo-novo.page';

describe('ManejoNovoPage', () => {
  let component: ManejoNovoPage;
  let fixture: ComponentFixture<ManejoNovoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ManejoNovoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
