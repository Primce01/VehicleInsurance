import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InsuranceDeletePage } from './insurance-delete.page';

describe('InsuranceDeletePage', () => {
  let component: InsuranceDeletePage;
  let fixture: ComponentFixture<InsuranceDeletePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceDeletePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InsuranceDeletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
