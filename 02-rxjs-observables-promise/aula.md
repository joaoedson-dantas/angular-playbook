# 02 - RXJS - Observables

## 2.1 - Promises e Observables 

(API Rest) <- Angular -> Promise || Observable

Ao realizar uma chamada para API, será aguardado uma resposta (callback), esse callback vai ser gerenciado por uma 
**Promise** ou **Observable**.

> **Promise**:  É uma promessa de algum retorno, o **then** é chamada após o processamento da promise, o then
pode ser um _erro_ ou _sucesso_.  É um processo simples, ao chamar o then() estamos invocando o resultado/falha.

> **Observable:** Pode continuar te retornando dados, um vez que você realiza o _subscribe_, 
você pode receber mais de uma vez as respostas, o observable fica _vivo_, 
ou seja, você pode receber dados sempre que exitir dados para serem entregues

O a entrega de um erro em um observalbe "mata" o mesmo, contudo é possível de certa forma tratar: 

- É possível cancelar o observable
- Retry() -> Chamar novamente o observable (Tratamento)

A principal vantagem é que, é possível receber respostas ao longo do tempo e não apenas uma. Além disso, 
é possível cancelar um Observable, cancelar assinatura, tratar uma situação final. 
