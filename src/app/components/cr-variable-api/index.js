import angular from 'angular';
import crVariableApiService from './cr-variable-api-service';

const module = angular.module('crVariableApi', [])
  .factory('crVariableApiService', crVariableApiService);

export default module.name;