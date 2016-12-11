export default {
  template: require('./cr-tree.html'),
  controller: 'CrTreeController',
  bindings: {
    data: '<',
    isExpanded: '<?' // private binding for subtrees
  }
};