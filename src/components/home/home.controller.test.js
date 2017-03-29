import {expect} from 'chai';
import home from './index.js';

describe('Controller: Home', function() {
  let $controller;

  beforeEach(angular.mock.module(home));

  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it('name is initialized to Users', function() {
    let ctrl = $controller('HomeController');
    expect(ctrl.name).toBe('Users');
  });
});
