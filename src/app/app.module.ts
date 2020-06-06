import './app-ajs.module'
import './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {setAngularJSGlobal, UpgradeModule} from '@angular/upgrade/static';
import angular from 'angular';
import {DowngradedComponent} from './downgraded.component';
import {UpgradedComponent} from './upgraded.component';

setAngularJSGlobal(angular);

@NgModule({
  declarations: [
    DowngradedComponent,
    UpgradedComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ]
})
export class AppModule {
  static entryComponents = [
    DowngradedComponent
  ];

  constructor(private upgrade: UpgradeModule) { }

  ngDoBootstrap() {
    console.log('bootstrap');
    this.upgrade.bootstrap(document.body, ['myApp'], { strictDi: true });
  }
}
