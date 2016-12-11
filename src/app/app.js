import angular from 'angular';
import crVariableTree from './components/cr-variable-tree';
import AppController from './app-controller';

import '../style/app.css';

const app = {
  template: require('./app.html'),
  controller: 'AppController',
};

const module = angular
  .module('app', [
    crVariableTree
  ])
  .controller('AppController', AppController)
  .component('app', app);

export default module.name;