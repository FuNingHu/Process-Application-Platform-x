import {ChangeDetectionStrategy, ChangeDetectorRef, Component, input, InputSignal, OnChanges, SimpleChanges} from '@angular/core';
import {
  RobotSettings,
  SidebarItemPresenter,
  SidebarPresenterAPI
} from '@universal-robots/contribution-api';
import {TranslateService} from "@ngx-translate/core";
import {first} from "rxjs";


interface SignalSidebarItemPresenter
  extends Omit<SidebarItemPresenter, "robotSettings" | "presenterAPI"> {
  robotSettings: InputSignal<RobotSettings | undefined>;
  presenterAPI: InputSignal<SidebarPresenterAPI | undefined>;
}
@Component({
  templateUrl: './pap-bar2.component.html',
  styleUrls: ['./pap-bar2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class PapBar2Component implements SignalSidebarItemPresenter {

  readonly robotSettings = input<RobotSettings | undefined>();
  readonly presenterAPI = input<SidebarPresenterAPI | undefined>();
}
