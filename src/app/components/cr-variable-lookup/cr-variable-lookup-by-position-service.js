export default function crVariableLookupByPosition() {
  return {
    getNameByPosition
  };

  function getNameByPosition(variables, order, position) {
    const key = findKey(order.graph, position);

    // key not found for given position
    if (!key) return;

    return variables.index[key] && variables.index[key].name;
  }

  function findKey(graph, position) {
    const currentPosition = position.slice(0, 1);
    const currentItem = graph[currentPosition];
    if (typeof currentItem === 'string') {
      return currentItem;
    } else if (typeof currentItem === 'object') {
      const itemKey = Object.keys(currentItem)[0];
      return findKey(currentItem[itemKey], position.slice(1));
    }
  }
}

crVariableLookupByPosition.$inject = [];