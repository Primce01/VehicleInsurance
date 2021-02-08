import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubmitClaimPage } from './submit-claim.page';

describe('SubmitClaimPage', () => {
  let component: SubmitClaimPage;
  let fixture: ComponentFixture<SubmitClaimPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitClaimPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubmitClaimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
