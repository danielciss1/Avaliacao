myApp.controller('FormCtrl',function($scope){
	$scope.indexCadastro = 0;
	$scope.clicouEditar = false;

	$scope.list =[
		{
			nome : 'Daniel Dela Justina',
			email : 'dd.justina@gmail.com',
			fone : '(46)9114-7640'
		},
		{
			nome : 'Aline Rodrigues',
			email : 'aline-93@gmail.com',
			fone : '(46)9999-9123'

		},
		{
			nome : 'João da Silva',
			email : 'silvajoao@hotmail.com',
			fone : '(46)8834-1234'

		}
	];

	//Função para cadastrar uma novo cadastro
	 $scope.cadastraNovo = function(novoNome, novoEmail, novoFone)	{
	 	if (novoNome) {
		 	$scope.list.push({
			 	nome : novoNome,
				email : novoEmail,
				fone : novoFone
		 	});
		 	$scope.limpar();	 	
	 	}
	 };

	 //Função para editar um cadastro
	 $scope.editaCadastro = function(dataIndex){
	 	$scope.clicouEditar = true;
	 	$scope.indexCadastro = dataIndex;
	 	$scope.name = $scope.list[dataIndex].nome;
	 	$scope.email = $scope.list[dataIndex].email;
	 	$scope.phone = $scope.list[dataIndex].fone;
	 };
	

	 //Função para renomear
	 $scope.renomearCadastro = function(novoNome, novoEmail, novoFone){
	 	var editObj = {};
	 	editObj = {
	 		'nome'  : novoNome,
	 		'email' : novoEmail,
	 		'fone'  : novoFone
	 	};
	 	$scope.list[$scope.indexCadastro] = editObj;
	 	$scope.cancelar();
	 };


	 //Função para Remover Cadastro
	 $scope.removeCadastro = function(remove){
	 	$scope.list.splice(remove,1);
	 };

	 //Cancelamento de operação
	 $scope.cancelar = function(cancela) {
	 	$scope.clicouEditar = false;
	 	$scope.limpar();
	 };

	 //limpando campos de cadastro
	 $scope.limpar = function(limpar) {
	 	$scope.name = undefined;
	 	$scope.email = undefined;
	 	$scope.phone = undefined;
	 };

});