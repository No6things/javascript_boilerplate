import './home.scss';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import smartTable from 'angular-smart-table';

import routing from './home.routes';
import HomeController from './home.controller';
import greeting from 'Directives/greeting.directive';

export default angular.module('app.home', [uirouter, smartTable, greeting])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;
