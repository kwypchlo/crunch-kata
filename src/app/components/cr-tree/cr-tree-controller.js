export default class CrTreeController {

  constructor() {
    this.expandedNodes = [];
  }

  isNodeExpandable(node) {
    return Array.isArray(node.children) && node.children.length > 0;
  }

  isNodeExpanded(node) {
    return this.expandedNodes.indexOf(node) > -1;
  }

  toggleNode(node) {
    if (this.isNodeExpandable(node)) {
      const index = this.expandedNodes.indexOf(node);
      if (index > -1) {
        this.expandedNodes.splice(index, 1);
      } else {
        this.expandedNodes.push(node);
      }
    }
  }
}

CrTreeController.$inject = [];