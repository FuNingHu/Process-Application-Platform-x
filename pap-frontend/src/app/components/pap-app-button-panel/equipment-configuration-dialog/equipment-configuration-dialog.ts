import { ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ApplicationPresenterAPI, RobotSettings } from '@universal-robots/contribution-api';
import { PapAppButtonPanelNode } from '../pap-app-button-panel.node';
import { first } from 'rxjs';
import { UIAngularComponentsModule } from '@universal-robots/ui-angular-components';
import { ButtonMapping } from '../button-mapping/button-mapping';
import { WeldingTorch } from '../welding-torch/welding-torch';

@Component({
  selector: 'app-equipment-configuration-dialog',
  imports: [CommonModule, TranslateModule, UIAngularComponentsModule, ButtonMapping, WeldingTorch],
  templateUrl: './equipment-configuration-dialog.html',
  styleUrl: './equipment-configuration-dialog.scss',
})
export class EquipmentConfigurationDialog implements OnChanges{
    @Input() applicationAPI: ApplicationPresenterAPI;
    @Input() robotSettings: RobotSettings;
    @Input() applicationNode: PapAppButtonPanelNode;

    // UI State
    torchOrientation = 'z-downward';

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

    onTorchOrientationChange(value: string) {
        this.torchOrientation = value;
        this.cd.detectChanges();
    }
}
