export default function crVariableApiService($http) {
  return {
    getVariables,
    getVariablesOrder
  };

  function getVariables(id) {
    return $http.get(`/datasets/${id}/variables/variables.json`).then((result) => result.data);
  }

  function getVariablesOrder(variables, type) {
    return $http.get(`${variables.orders[type]}/order.json`).then((result) => result.data);
  }
}

crVariableApiService.$inject = ['$http'];