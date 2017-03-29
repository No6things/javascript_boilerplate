import './index.scss';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routerConfig from './index.route.js';
import runBlock from './index.run.js';
import home from './components/home/index.js'

'use strict';

angular
  .module('app', [
    uirouter,
    home
    ])
  .config(routerConfig)
  .run(runBlock)
  .name;
