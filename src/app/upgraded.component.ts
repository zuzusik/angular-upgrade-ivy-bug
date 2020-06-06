import { Directive, ElementRef, Injector } from '@angular/core';
import {UpgradeComponent} from '@angular/upgrade/static';
import angular from 'angular';

@Directive({
  selector: 'upgraded-component'
})
export class UpgradedComponent extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super('upgradedComponent', elementRef, injector);
  }
}

angular
  .module('myApp')
  .directive('upgradedComponent', () => ({
    template: 'Upgraded Component'
  }));
