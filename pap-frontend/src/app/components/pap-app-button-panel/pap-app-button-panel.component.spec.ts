import {ComponentFixture, TestBed} from '@angular/core/testing';
import { PapAppButtonPanelComponent} from "./PapAppButtonPanel.component";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {Observable, of} from "rxjs";

describe('PapAppButtonPanelComponent', () => {
  let fixture: ComponentFixture<PapAppButtonPanelComponent>;
  let component: PapAppButtonPanelComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PapAppButtonPanelComponent],
      imports: [TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader, useValue: {
            getTranslation(): Observable<Record<string, string>> {
              return of({});
            }
          }
        }
      })],
    }).compileComponents();

    fixture = TestBed.createComponent(PapAppButtonPanelComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
