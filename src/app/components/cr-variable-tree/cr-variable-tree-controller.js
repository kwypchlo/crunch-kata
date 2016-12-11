const ORDER_TYPE = 'hier'; // order type used to represent variables in a tree

export default class CrVariableTreeController {

  constructor($q, crVariableTreeService, crVariableApiService) {
    this.$q = $q;
    this.crVariableTreeService = crVariableTreeService;
    this.crVariableApiService = crVariableApiService;
  }

  $onChanges(changes) {
    if (changes.datasetId) {
      this.load(this.datasetId); // reload the data when the id changes
    }
  }

  load(dataId) {
    const variablesPromise = this.crVariableApiService.getVariables(dataId);
    const orderPromise = variablesPromise.then((dataset) => this.crVariableApiService.getVariablesOrder(dataset, ORDER_TYPE));

    this.$q.all([variablesPromise, orderPromise]).then(([variables, order]) => {
      // process raw dataset and order data to cr-tree desired structure
      this.data = this.crVariableTreeService.processStructure(variables.index, order.graph);
    })
  }
}

CrVariableTreeController.$inject = ['$q', 'crVariableTreeService', 'crVariableApiService'];