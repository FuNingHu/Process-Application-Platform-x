import {ChangeDetectionStrategy, ChangeDetectorRef, Component, input, InputSignal, OnChanges, SimpleChanges} from '@angular/core';
import {
  RobotSettings,
  OperatorScreen,
  OperatorScreenPresenter,
  OperatorScreenPresenterAPI
} from '@universal-robots/contribution-api';


@Component({
  templateUrl: './pap-os1.component.html',
  styleUrls: ['./pap-os1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class PapOs1Component implements OperatorScreenPresenter {


}
