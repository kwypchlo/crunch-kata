export default function crVariableTreeService() {
  return {
    processStructure
  };

  function processStructure(dataset, graph) {
    return graph.map((item) => {
      if (typeof item === 'string') {
        return {
          title: dataset[item].name
        };
      }

      const group = Object.keys(item)[0];
      return {
        title: group,
        children: processStructure(dataset, item[group])
      };
    });
  }
}

crVariableTreeService.$inject = [];