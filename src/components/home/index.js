import './home.scss';
import datepicker from 'angular-ui-bootstrap/src/datepicker/index-nocss.js';

import uirouter from 'angular-ui-router';
import smartTable from 'angular-smart-table';

import routing from './home.routes';
import HomeController from './home.controller';
import greeting from 'Directives/greeting.directive';
/** @ngInject */
export default angular.module('app.home', [uirouter, datepicker, smartTable, greeting])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;
