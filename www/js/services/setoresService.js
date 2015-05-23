angular.module('chamadosBraApp.services-setores', [])

.factory('Setores', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var setores = [{
    id: 1
    setor: 'Contabilidade'
    responsavelSetor: 'José'
    emailSetor: 'contabilidade@dominioteste.com.br'
  }, {
    id: 2,    
    setor: 'Financeiro'
    responsavelSetor: 'João'
    emailSetor: 'financeiro@dominioteste.com.br'
  },{
    id: 3,
    setor: 'Controladoria'
    responsavelSetor: 'Carlos'
    emailSetor: 'controladoria@dominioteste.com.br'
  }];

  return {
    all: function() {
      return setores;
    }};
});
