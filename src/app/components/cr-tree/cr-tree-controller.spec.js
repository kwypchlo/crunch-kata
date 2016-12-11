import angular from 'angular';
import crTree from './index';

describe('crTree', () => {

  describe('crVariableLookupByPositionService', () => {
    let crTreeController;

    const nodes = {
      withChildren: {
        title: 'withChildren',
        children: [{}, {}, {}]
      },
      withoutChildren: {
        title: 'withoutChildren'
      }
    };

    beforeEach(() => {
      angular.mock.module(crTree);
      angular.mock.inject(($controller) => {
        crTreeController = $controller('CrTreeController');
      });
    });

    describe('constructor', () => {

      it('should initialize with no expanded nodes', () => {
        expect(crTreeController.expandedNodes).toEqual([]);
      });

    });

    describe('isExpandable', () => {

      it('should accept nodes with children', () => {
        expect(crTreeController.isNodeExpandable(nodes.withChildren)).toBe(true);
      });

      it('should reject nodes without children', () => {
        expect(crTreeController.isNodeExpandable(nodes.withoutChildren)).toBe(false);
      });

    });

    describe('isNodeExpanded', () => {

      it('should tell when the node is expanded', () => {
        crTreeController.expandedNodes.push(nodes.withChildren);

        expect(crTreeController.isNodeExpanded(nodes.withChildren)).toBe(true);
      });

      it('should tell when the node is collapsed', () => {
        expect(crTreeController.isNodeExpanded(nodes.withChildren)).toBe(false);
      });

    });

    describe('toggleNode', () => {

      it('should expand the expandable node if it is not expanded', () => {
        expect(crTreeController.isNodeExpanded(nodes.withChildren)).toBe(false);

        crTreeController.toggleNode(nodes.withChildren);

        expect(crTreeController.isNodeExpanded(nodes.withChildren)).toBe(true);
      });

      it('should collapse the expandable node if it is expanded', () => {
        crTreeController.expandedNodes.push(nodes.withChildren);

        expect(crTreeController.isNodeExpanded(nodes.withChildren)).toBe(true);

        crTreeController.toggleNode(nodes.withChildren);

        expect(crTreeController.isNodeExpanded(nodes.withChildren)).toBe(false);
      });

    });

  });

});