import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManejoPage } from './manejo.page';

describe('ManejoPage', () => {
  let component: ManejoPage;
  let fixture: ComponentFixture<ManejoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ManejoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
