export default function crVariableLookupByName() {
  return {
    getPositionByName
  };

  function getPositionByName(variables, order, name) {
    const key = findKeyByVariableName(variables, name);

    // key not found for given variable name
    if (!key) return;

    return findPosition(order.graph, key);
  }

  function findKeyByVariableName(variables, name) {
    for (let key in variables.index) {
      if (variables.index[key].name === name) return key;
    }
  }

  function findPosition(graph, key) {
    // check if the key is present in the array
    const foundIndex = graph.indexOf(key);
    if (foundIndex > -1) {
      return [foundIndex];
    }

    // traverse the array and deep search nested objects recursively
    for (let childIndex in graph) {
      const child = graph[childIndex];
      if (typeof child === 'object') {
        const itemKey = Object.keys(child)[0];
        const position = findPosition(child[itemKey], key);
        if (position) {
          // make sure that the childIndex is always an integer
          return [~~childIndex].concat(position);
        }
      }
    }
  }
}

crVariableLookupByName.$inject = [];