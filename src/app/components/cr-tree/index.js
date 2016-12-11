import angular from 'angular';
import CrTreeController from './cr-tree-controller';
import crTree from './cr-tree-directive';

import './cr-tree.css';

/**
 * Expandable tree for nested/grouped data presentation
 *
 * Usage:
 *
 * <cr-tree data="$ctrl.data"></cr-tree>
 *
 * Where $ctrl.data is a correctly formatted dataset, ie:
 * [
 *   {
 *     title: 'First group'
 *   },
 *   {
 *     title: 'Second group, with children',
 *     children: [
 *       {
 *         title: 'First level subgroup'
 *       },
 *       {
 *         title: 'First level subgroup, with children',
 *         children: [
 *           {
 *             title: 'Second level subgroup',
 *             children: [
 *               // can be nested indefinitely
 *             ]
 *           }
 *         ]
 *       }
 *     ]
 *   }
 * ]
 */
const module = angular.module('crTree', [])
  .controller('CrTreeController', CrTreeController)
  .component('crTree', crTree);

export default module.name;