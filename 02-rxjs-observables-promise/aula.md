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

## Observer 

**O que é?** Uma estrutra de instruções para trabalhar com as subscriptions de 
um observable. Ou seja, vai ser seu conjunto de instruções, do que deve ser 
feito em cada situação;

Para um observador existir é necessário um Observable e um subscriber 

```typescript
    const observer = {
      // mesma coisa de subscriber.next
      next: valor => console.log('next', valor),
      error: err => console.log('Erro', err),
      complete: () => console.log('Fim')
    }
```

Uma estrutura de dados (objeto), que tem instruções do que fazer nos casos 
de: 
- Recebimento de valor 
- Error 
- Complete 

**complete**: Não vai enviar mais observables. Pois o método já fez tudo que tinha que fazer
nesse caso, a comunicação com o observable foi finalizada  
        subscriber.complete()

## Subscriber e unsubscribe

**subscription**: Representa a inscrição em um observable. Quando você chama .subscribe() 
em um observable, ele retorna um objeto do tipo Subscription, que pode ser usado 
para gerenciar e cancelar a inscrição quando não for mais necessária. 

Isso é útil para evitar vazamentos de memória, principalmente em componentes do Angular.

**unsubscribe**: Vai cancelar a subscription, e quando cancelada, não 
significa que está sendo chamado o complete(). O complete é quando a Subscription 
por conta própria fala que acabou, já o unsbscriber eu falo que não quero receber mais 
nda por esse canal, por exemplo. 

**closed** Esse propriedade é um boolean para saber se o unsubscription foi realmente cancelado 
```typescript
    const observer = {
      // mesma coisa de subscriber.next
      next: valor => console.log('next', valor),
      error: err => console.log('Erro', err),
      complete: () => console.log('Fim')
    }
```
