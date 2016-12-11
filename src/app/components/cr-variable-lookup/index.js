import angular from 'angular';
import crVariableLookupByNameService from './cr-variable-lookup-by-name-service';
import crVariableLookupByPositionService from './cr-variable-lookup-by-position-service';

const module = angular.module('crVariableLookup', [])
  .factory('crVariableLookupByNameService', crVariableLookupByNameService)
  .factory('crVariableLookupByPositionService', crVariableLookupByPositionService);

export default module.name;