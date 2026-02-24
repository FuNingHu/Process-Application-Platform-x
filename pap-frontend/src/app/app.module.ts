import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { PapAppButtonPanelComponent } from './components/pap-app-button-panel/pap-app-button-panel.component';
import { PapPgWeldPathComponent } from './components/pap-pg-weld-path/pap-pg-weld-path.component';
import { PapPgWeldReplayComponent } from './components/pap-pg-weld-replay/pap-pg-weld-replay.component';
import { PapSk1Component } from './components/pap-sk1/pap-sk1.component';
import { PapSk2Component } from './components/pap-sk2/pap-sk2.component';
import { PapSk3Component } from './components/pap-sk3/pap-sk3.component';
import { PapBar1Component } from './components/pap-bar1/pap-bar1.component';
import { PapBar2Component } from './components/pap-bar2/pap-bar2.component';
import { PapOs1Component } from './components/pap-os1/pap-os1.component';

import { UIAngularComponentsModule } from '@universal-robots/ui-angular-components';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { HttpBackend, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {MultiTranslateHttpLoader} from 'ngx-translate-multi-http-loader';
import { PATH } from '../generated/contribution-constants';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { EquipmentConfigurationDialog } from './components/pap-app-button-panel/equipment-configuration-dialog/equipment-configuration-dialog';
import { ProcessPlatformDialog } from './components/pap-app-button-panel/process-platform-dialog/process-platform-dialog';
import { WeldParametersDialog } from './components/pap-app-button-panel/weld-parameters-dialog/weld-parameters-dialog';
import { WeldPathDialog } from './components/pap-app-button-panel/weld-path-dialog/weld-path-dialog';
import { WeldSetupDialog } from './components/pap-app-button-panel/weld-setup-dialog/weld-setup-dialog';
import { ButtonMapping } from './components/pap-app-button-panel/button-mapping/button-mapping';
import { WeldingTorch } from './components/pap-app-button-panel/welding-torch/welding-torch';
import { FormsModule } from '@angular/forms';

export const httpLoaderFactory = (http: HttpBackend) =>
    new MultiTranslateHttpLoader(http, [
      { prefix: PATH + '/assets/i18n/', suffix: '.json' },
      { prefix: './ui/assets/i18n/', suffix: '.json' },
    ]);

@NgModule({

  declarations: [
      PapAppButtonPanelComponent,
      PapPgWeldPathComponent,
      PapPgWeldReplayComponent,
      PapSk1Component,
      PapSk2Component,
      PapSk3Component,
      PapBar1Component,
      PapBar2Component,
      PapOs1Component
],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      UIAngularComponentsModule,
      FormsModule,
      HttpClientModule,
      TranslateModule.forRoot({
        loader: { provide: TranslateLoader, useFactory: httpLoaderFactory, deps: [HttpBackend] },
        useDefaultLang: false,
      }),
      // import pap-app-button-panel's standalone components
      EquipmentConfigurationDialog,
      ProcessPlatformDialog,
      WeldParametersDialog,
      WeldPathDialog,
      WeldSetupDialog,
      ButtonMapping,
      WeldingTorch
    ],
    providers: [],
})

export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const papappbuttonpanelComponent = createCustomElement(PapAppButtonPanelComponent, {injector: this.injector});
    customElements.define('pc-gae-pap-pap-app-button-panel', papappbuttonpanelComponent);
    const pappgweldpathComponent = createCustomElement(PapPgWeldPathComponent, {injector: this.injector});
    customElements.define('pc-gae-pap-pap-pg-weld-path', pappgweldpathComponent);
    const pappgweldreplayComponent = createCustomElement(PapPgWeldReplayComponent, {injector: this.injector});
    customElements.define('pc-gae-pap-pap-pg-weld-replay', pappgweldreplayComponent);
    const papsk1Component = createCustomElement(PapSk1Component, {injector: this.injector});
    customElements.define('pc-gae-pap-pap-sk1', papsk1Component);
    const papsk2Component = createCustomElement(PapSk2Component, {injector: this.injector});
    customElements.define('pc-gae-pap-pap-sk2', papsk2Component);
    const papsk3Component = createCustomElement(PapSk3Component, {injector: this.injector});
    customElements.define('pc-gae-pap-pap-sk3', papsk3Component);
    const papbar1Component = createCustomElement(PapBar1Component, {injector: this.injector});
    customElements.define('pc-gae-pap-pap-bar1', papbar1Component);
    const papbar2Component = createCustomElement(PapBar2Component, {injector: this.injector});
    customElements.define('pc-gae-pap-pap-bar2', papbar2Component);
    const papos1Component = createCustomElement(PapOs1Component, {injector: this.injector});
    customElements.define('pc-gae-pap-pap-os1', papos1Component);
  }

  // This function is never called, because we don't want to actually use the workers, just tell webpack about them
  registerWorkersWithWebPack() {
    new Worker(new URL('./components/pap-app-button-panel/pap-app-button-panel.behavior.worker.ts'
        /* webpackChunkName: "pap-app-button-panel.worker" */, import.meta.url), {
      name: 'pap-app-button-panel',
      type: 'module'
    });new Worker(new URL('./components/pap-pg-weld-path/pap-pg-weld-path.behavior.worker.ts'
        /* webpackChunkName: "pap-pg-weld-path.worker" */, import.meta.url), {
      name: 'pap-pg-weld-path',
      type: 'module'
    });new Worker(new URL('./components/pap-pg-weld-replay/pap-pg-weld-replay.behavior.worker.ts'
        /* webpackChunkName: "pap-pg-weld-replay.worker" */, import.meta.url), {
      name: 'pap-pg-weld-replay',
      type: 'module'
    });new Worker(new URL('./components/pap-sk1/pap-sk1.behavior.worker.ts'
        /* webpackChunkName: "pap-sk1.worker" */, import.meta.url), {
      name: 'pap-sk1',
      type: 'module'
    });new Worker(new URL('./components/pap-sk2/pap-sk2.behavior.worker.ts'
        /* webpackChunkName: "pap-sk2.worker" */, import.meta.url), {
      name: 'pap-sk2',
      type: 'module'
    });new Worker(new URL('./components/pap-sk3/pap-sk3.behavior.worker.ts'
        /* webpackChunkName: "pap-sk3.worker" */, import.meta.url), {
      name: 'pap-sk3',
      type: 'module'
    });new Worker(new URL('./components/pap-bar1/pap-bar1.behavior.worker.ts'
        /* webpackChunkName: "pap-bar1.worker" */, import.meta.url), {
      name: 'pap-bar1',
      type: 'module'
    });new Worker(new URL('./components/pap-bar2/pap-bar2.behavior.worker.ts'
        /* webpackChunkName: "pap-bar2.worker" */, import.meta.url), {
      name: 'pap-bar2',
      type: 'module'
    });new Worker(new URL('./components/pap-os1/pap-os1.behavior.worker.ts'
        /* webpackChunkName: "pap-os1.worker" */, import.meta.url), {
      name: 'pap-os1',
      type: 'module'
    });
  }
}

