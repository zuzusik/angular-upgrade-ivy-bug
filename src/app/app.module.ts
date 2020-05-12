import './app-ajs.module'
import './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {setAngularJSGlobal, UpgradeModule} from '@angular/upgrade/static';
import angular from 'angular';
import {DowngradedComponent} from './downgraded.component';

setAngularJSGlobal(angular);

@NgModule({
  declarations: [
    DowngradedComponent
  ],
  entryComponents: [
    DowngradedComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }

  ngDoBootstrap() {
    console.log('bootstrap');
    this.upgrade.bootstrap(document.body, ['myApp'], { strictDi: true });
  }
}
