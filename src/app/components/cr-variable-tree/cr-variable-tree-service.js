export default function crVariableTreeService() {
  return {
    processStructure
  };

  function processStructure(variables, graph) {
    return graph.filter((item) => filterCorruptedData(item, variables)).map((item) => {
      if (typeof item === 'string') {
        return {
          title: variables[item].name
        };
      }

      const group = Object.keys(item)[0];
      return {
        title: group,
        children: processStructure(variables, item[group])
      };
    });
  }

  /**
   * Filter corrupted data that either does not appear in the variable list or have no name or description
   */
  function filterCorruptedData(item, variables) {
    return !(typeof item === 'string' && (!variables[item] || !variables[item].name || !variables[item].description));
  }
}

crVariableTreeService.$inject = [];