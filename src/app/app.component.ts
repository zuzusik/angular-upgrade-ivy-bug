import angular from 'angular';

angular
  .module('myApp')
  .component('appRoot', {
    template: `
      App Root <br><br>
      <downgraded-component></downgraded-component>
    `
  });
