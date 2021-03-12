import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LicenceAddPage } from './licence-add.page';

describe('LicenceAddPage', () => {
  let component: LicenceAddPage;
  let fixture: ComponentFixture<LicenceAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicenceAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LicenceAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
