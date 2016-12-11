import angular from 'angular';
import crTree from '../cr-tree';
import crVariableApi from '../cr-variable-api';
import crVariableTreeService from './cr-variable-tree-service';
import CrVariableTreeController from './cr-variable-tree-controller';
import crVariableTree from './cr-variable-tree-directive';

const module = angular.module('crVariableTree', [crTree, crVariableApi])
  .factory('crVariableTreeService', crVariableTreeService)
  .controller('CrVariableTreeController', CrVariableTreeController)
  .component('crVariableTree', crVariableTree);

export default module.name;