import {Component} from '@angular/core';
import angular from 'angular';
import {downgradeComponent} from '@angular/upgrade/static';

@Component({
  selector: 'downgraded-component',
  template: `Downgraded Component`,
})
export class DowngradedComponent {}


angular
  .module('myApp')
  .directive('downgradedComponent', downgradeComponent({ component: DowngradedComponent }));
