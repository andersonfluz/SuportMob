angular.module('chamadosBraApp.chamadoService', [])

.factory('Chamados', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chamados = [{
    id: 123,
    assunto: 'Solicitação de Contabilidade de Obra X',
    setor: 'Contabilidade'
  }, {
    id: 321,
    assunto: 'Solicitação de relatorio Financeiro da Obra Y',
    setor: 'Financeiro'
  },{
    id: 456,
    assunto: 'Solicitação de relatorio da Controladoria da Obra Z',
    setor: 'Controladoria'
  }];

  return {
    all: function() {
      return chamados;
    },
    getChamados: function() {
      return chamados;
    },
    remove: function(chamado) {
      chamados.splice(chamados.indexOf(chamado), 1);
    },
    get: function(chamadoId) {
      for (var i = 0; i < chamados.length; i++) {
        if (chamados[i].id === parseInt(chamadoId)) {
          return chamados[i];
        }
      }
      return null;
    }
  };
});

