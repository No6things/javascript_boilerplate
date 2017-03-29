import './index.scss';

import uirouter from 'angular-ui-router';
import routerConfig from './index.route';
import runBlock from './index.run';
import home from 'Components/home/index'

'use strict';
/** @ngInject */
export default angular
  .module('app', [
    uirouter,
    home
    ])
  .config(routerConfig)
  .run(runBlock)
  .name;
