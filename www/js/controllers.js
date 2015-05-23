angular.module('chamadosBraApp.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChamadoCtrl', function($scope) {})

.controller('AcompChamadoCtrl', function($scope, Chamados) {
  $scope.chamados = Chamados.all();
  $scope.remove = function(chamado) {
    Chamados.remove(chamado);
  }
})

.controller('ChamadoDetalhesCtrl', function($scope, $stateParams, Chamado) {
  $scope.chamado = Chamados.get($stateParams.chamadoId);
})

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};
 
    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password)
        .success(function(data) {
            $state.go('tab.home');
        })
        .error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login Falhou!', 
                template: 'Por favor, verifique suas credenciais.'
            });
        });
    }
})

.controller('SetoresCtrl', function($scope) {})

.controller('HomeCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
