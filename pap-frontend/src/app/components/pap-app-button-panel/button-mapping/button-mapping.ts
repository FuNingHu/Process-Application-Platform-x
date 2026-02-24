import { ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ApplicationPresenterAPI, RobotSettings } from '@universal-robots/contribution-api';
import { PapAppButtonPanelNode } from '../pap-app-button-panel.node';
import { first } from 'rxjs';
import { UIAngularComponentsModule } from '@universal-robots/ui-angular-components';

@Component({
  selector: 'app-button-mapping',
  imports: [CommonModule, TranslateModule, UIAngularComponentsModule],
  templateUrl: './button-mapping.html',
  styleUrl: './button-mapping.scss',
})
export class ButtonMapping implements OnChanges {
    @Input() applicationAPI: ApplicationPresenterAPI;
    @Input() robotSettings: RobotSettings;
    @Input() applicationNode: PapAppButtonPanelNode;

    buttonMapping = {
        up: 'B1',
        down: 'B2',
        moveJ: 'B3',
        moveL: 'B4',
        weldL: 'B5',
        weldC: 'B6',
        touchSense: 'B7',
        searchL: 'B8',
        torchWaypoint: 'B9',
        delete: 'B10'
    };

    buttonOptions = [
        { label: 'B1', value: 'B1' },
        { label: 'B2', value: 'B2' },
        { label: 'B3', value: 'B3' },
        { label: 'B4', value: 'B4' },
        { label: 'B5', value: 'B5' },
        { label: 'B6', value: 'B6' },
        { label: 'B7', value: 'B7' },
        { label: 'B8', value: 'B8' },
        { label: 'B9', value: 'B9' },
        { label: 'B10', value: 'B10' }
    ];

    constructor(
      protected readonly translateService: TranslateService,
      protected readonly cd: ChangeDetectorRef
    ){}
    
    ngOnChanges(changes: SimpleChanges): void {
      if (changes?.robotSettings) {
        if (!changes?.robotSettings?.currentValue) return;
        if (changes?.robotSettings?.isFirstChange()) {
          if (changes?.robotSettings?.currentValue) {
            this.translateService.use(changes?.robotSettings?.currentValue?.language);
          }
          this.translateService.setDefaultLang('en');
        }
        this.translateService
          .use(changes?.robotSettings?.currentValue?.language)
          .pipe(first())
          .subscribe(() => this.cd.detectChanges());
      }
    }

    onButtonMappingChange(field: keyof typeof this.buttonMapping, event: any) {
        this.buttonMapping[field] = event.value;
        this.cd.detectChanges();
    }
}
