import angular from 'angular';
import crVariableLookup from './index';

const variables = require('json-loader!../../../../fixtures/variables');
const order = require('json-loader!../../../../fixtures/order');

describe('crVariableLookup', () => {

  describe('crVariableLookupByPositionService', () => {
    let crVariableLookupByPositionService;

    beforeEach(() => {
      angular.mock.module(crVariableLookup);
      angular.mock.inject((_crVariableLookupByPositionService_) => {
        crVariableLookupByPositionService = _crVariableLookupByPositionService_;
      });
    });

    describe('getNameByPosition', () => {

      describe('should get the variable name by the position', () => {

        it('from a first level of the graph', () => {
          expect(crVariableLookupByPositionService.getNameByPosition(variables, order, [4])).toEqual('weight');
        });

        it('from a nested graph', () => {
          expect(crVariableLookupByPositionService.getNameByPosition(variables, order, [1, 0, 2])).toEqual('Usage');
        });

      });

      it('should return undefined when variable cannot be found', () => {
        expect(crVariableLookupByPositionService.getNameByPosition(variables, order, [2, 9999])).toEqual(undefined);
      });

    });

  });

});