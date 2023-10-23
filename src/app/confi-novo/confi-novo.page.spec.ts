import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfiNovoPage } from './confi-novo.page';

describe('ConfiNovoPage', () => {
  let component: ConfiNovoPage;
  let fixture: ComponentFixture<ConfiNovoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfiNovoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
