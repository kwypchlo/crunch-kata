import angular from 'angular';
import crVariableLookup from './index';

const variables = require('json-loader!../../../../fixtures/variables');
const order = require('json-loader!../../../../fixtures/order');

describe('crVariableLookup', () => {

  describe('crVariableLookupByNameService', () => {
    let crVariableLookupByNameService;

    beforeEach(() => {
      angular.mock.module(crVariableLookup);
      angular.mock.inject((_crVariableLookupByNameService_) => {
        crVariableLookupByNameService = _crVariableLookupByNameService_;
      });
    });

    describe('getPositionByName', () => {

      describe('should get the position by variable name', () => {

        it('from a first level of the graph', () => {
          expect(crVariableLookupByNameService.getPositionByName(variables, order, 'weight')).toEqual([4]);
        });

        it('from a nested graph', () => {
          expect(crVariableLookupByNameService.getPositionByName(variables, order, 'Usage')).toEqual([1, 0, 2]);
        });

      });

      it('should return undefined when the position cannot be found', () => {
        expect(crVariableLookupByNameService.getPositionByName(variables, order, 'Not existing name')).toEqual(undefined);
      });

    });

  });

});