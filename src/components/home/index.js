import './home.scss';

import uirouter from 'angular-ui-router';
import smartTable from 'angular-smart-table';
import materialize from 'angular-materialize';

import routing from './home.routes';
import HomeController from './home.controller';
import greeting from 'Directives/greeting.directive';

/** @ngInject */
export default angular.module('app.home', [uirouter, smartTable, greeting, materialize])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;
