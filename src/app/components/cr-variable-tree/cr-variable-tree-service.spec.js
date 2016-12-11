import angular from 'angular';
import crVariableTree from './index';

const variables = require('json-loader!../../../../fixtures/variables');
const order = require('json-loader!../../../../fixtures/order');
const tree = require('json-loader!../../../../fixtures/tree');

describe('crVariableLookup', () => {

  describe('crVariableLookupByPositionService', () => {
    let crVariableTreeService;

    beforeEach(() => {
      angular.mock.module(crVariableTree);
      angular.mock.inject((_crVariableTreeService_) => {
        crVariableTreeService = _crVariableTreeService_;
      });
    });

    describe('processStructure', () => {
      it('should process raw variables and graph into structure accepted by crTree', () => {
        expect(tree.data).toEqual(crVariableTreeService.processStructure(variables.index, order.graph));
      });
    });
  });
});