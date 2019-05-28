function novaLista(){   									//CRIA UM OBJETO LISTA
	let elemento=null;										//RESERVA O ELEMENTO PRINCIPAL(TOPO)
	let length=0;											//GUARDA O TAMANHO DA LISTA
	lastNode=null;											//GUARDA O ULTIMO ELEMENTO INSERIDO

	
	const novoJogador = (nome,posicao)=>{					//CRIA UM OBJETO NODE
		var _nextNode;
		return{
			nextNode:_nextNode,
			strNome:nome,									//PROPRIEDADE (NOME) DO OBJETO JOGADOR
			intPosicao:posicao,								//PROPRIEDADE (INDICE) DO OBJETO JOGADOR
			mostrar:() =>mostrar_jogador(posicao, nome),	//METODO PARA MOSTRAR O JOGADOR
			ocultar:() =>ocultar_jogador(posicao)			//METODO PARA ESCONDER O JOGADOR
		}
	}

	const add = (value) =>{									//METODO PARA INSERIR ADICIONAR JOGADOR NA LISTA
		if(!elemento){               						//CASO O ELEMENTO ESTEJA VAZIO
			elemento = novoJogador(value,length);			//CRIO UM NOVO OBJETO JOGADOR
			length++;			 							//INCREMENTO O TAMANHO DA LISTA
			elemento.nextNode=elemento;						//DEFINE O PROXIMO ELEMENTO COMO O ELEMENTO PRINCIPAL FAZENDO CIRCULAR
			lastNode = elemento;							//GUARDA O ULTIMO ELEMENTO
			return elemento;         						//RETORNO PARA A FUNCAO O NOVO ELEMENTO CRIADO
		}		

		let novonode = novoJogador(value,length);			//CRIO UM NOVO JOGADOR E DOU O TAMANHO DA LISTA COMO SEU INDICE
		length++;											//INCREMENTO O TAMANHO DA LISTA
		lastNode.nextNode=novonode;							//DIRECIONO O NOVO JOGADOR PARA O PROXIMO JOGADOR DO ULTIMIO INSERIDO
		novonode.nextNode = elemento;						//DIRECIONO O PRIMEIRO JOGADOR PARA O PROXIMO JOGADOR DO NOVO JOGADOR (CIRCULAR)
		lastNode=novonode;									//PASSO O JOGADOR CRIADO PARA O ULTIMO JOGADOR CRIADO
		return novonode; 									//RETORNO PARA A FUNCAO O NOVO ELEMENTO
	}
	
	const remove = (node) => {								//METODO PARA REMOVER JOGADOR DA LISTA
		if(length===0){										//SE A LISTA ESTIVER VAZIA SAIO DO METODO	
			return														
		}

		if (node === elemento){								//SE O JOGADOR A SER REMOVIDO FOR O JOGADOR INICIAL DA LISTA
			elemento = node.nextNode;						//O JOGADOR INICIAL SE TORNA O PROXIMO JOGADOR DO JOGADOR A SER EXCLUIDO
		}

		let temp = elemento;								//PASSO O JOGADOR ATUAL PARA UM LOCAL TEMPORARIO
		while (temp.nextNode && temp.nextNode !== node){	//ENQUANTO O PROXIMO JOGADOR DO JOGADOR TEMPORARIO FOR DIFERENTE DO JOGADOR A SER EXCLUIDO
			temp = temp.nextNode;							//PASSO O PROXIMO JOGADOR DO JOGADOR TEMPORARIO PARA O TEMPORARIO (ANDO PRA FRENTE)
		}

		if(node.nextNode){									//SE EXISTIR O PROXIMO JOGADOR DO JOGADOR A SER EXCLUIDO
			temp.nextNode = node.nextNode; 					//O PROXIMO JOGADOR DO JOGADOR TEMPORARIO PASSA A SER O PROXIMO JOGADOR DO JOGADOR A SER EXCLUIDO
			length --;										//DIMINUO O TAMANHO DA LISTA
			return true;									//RETORNO SUCESSO NA EXCLUSAO
		}
		else{
			return false	
		};
	}

	const getByValue = (value) =>{							//RETORNA O JOGADOR PELO NOME INFORMADO
		if(length===0){									//SE A LISTA ESTIVER VAZIA SAI DO METODO
			return null;
		}
		let node = elemento;							//DEFINO O JOGADOR QUE SERA USADO
		do{													//FAZ PRIMEIRO DEPOIS AVALIA O LOOP
			if(node.nome===value){							//SE O NOME DO JOGADOR ATUAL FOR O NOME BUSCADO
				return node;								//RETORNA O NODE DO JOGADOR
			}
		node = node.nextNode;								//DEFINE O JOGADOR ATUAL COMO O PROXIMO JOGADOR
		} while(node != elemento)							//SE O JOGADOR ATUAL FOR NOVAMENTE O PRIMEIRO JOGADOR SAI DO LOOP
		return null;
	}

	return{
		length: () => length,								//PROPRIEDADE TAMANHO DA LISTA
		elemento: () => elemento,							//PROPRIEDADE JOGADOR INICIAL
		add: (value) => add(value),							//METODO PARA ADICIONAR JOGADOR NA LISTA
		getByValue:(value) =>getByValue(value),				//METODO PARA BUSCAR JOGADOR PELO NOME
		remove: (node) => remove(node)						//METODO PARA REMOVER JOGADOR DA LISTA
	}

}
