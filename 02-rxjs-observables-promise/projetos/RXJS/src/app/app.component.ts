import { Component, OnInit } from "@angular/core";
import { error } from "console";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>Welcome to {{ title }}!</h1>
      <span style="display: block">{{ title }} app is running!</span>
      <img
        width="300"
        alt="Angular Logo"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="
      />
    </div>
    <h2>Here are some links to help you start:</h2>
    <ul>
      <li>
        <h2>
          <a target="_blank" rel="noopener" href="https://angular.io/tutorial"
            >Tour of Heroes</a
          >
        </h2>
      </li>
      <li>
        <h2>
          <a target="_blank" rel="noopener" href="https://angular.io/cli"
            >CLI Documentation</a
          >
        </h2>
      </li>
      <li>
        <h2>
          <a target="_blank" rel="noopener" href="https://blog.angular.io/"
            >Angular blog</a
          >
        </h2>
      </li>
    </ul>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  title = "RXJS";

  ngOnInit(): void {
    // this.minhaPromise('Eduardo')
    //   .then(result => console.log(result))

    // this.minhaPromise("José")
    //   // resolve
    //   .then((result) => console.log(result))
    //   // reject
    //   .catch((e) => console.log(e));

    // this.minhaObservable("Eduardo")
    //   // Assinando os resultados do observable
    //   .subscribe(
    //       result => console.log(result),
    //       error => console.log(error));

    const observer = {
      // mesma coisa de subscriber.next
      next: (valor) => console.log("next", valor),
      error: (err) => console.log("Erro", err),
      complete: () => console.log("Fim"),
    };

    // const obs = this.minhaObservable("Eduardo");

    // obs.subscribe(observer);

    const userObserverble = this.usuarioObservable('Admin', 'joaoe@mail.com');
    const subscription = userObserverble.subscribe(observer);

    setTimeout(() => {
      subscription.unsubscribe()
      console.log(subscription.closed)
    }, 3500)

  }

  minhaPromise(nome: string): Promise<string> {
    return new Promise((resolve, reject) => {
      if (nome == "Eduardo") {
        setTimeout(() => resolve("Seja bem vindo, Eduardo!"), 5000);
      } else {
        reject("Ops! Você não é o Eduardo!");
      }
    });
  }

  minhaObservable(nome: string): Observable<string> {
    /*
      subscriber: É o método que pediu para ser informado quando o resultado estiver pronto. É quem está inscrito nesse
      observable 

      next(): É um callback para o subscriber receber a informação (Enquato estiver informações vindo ele vai receber)
      .subscribe: Se inscreve no resultado do observable 
    */
    return new Observable((subscriber) => {
      if (nome === "Eduardo") {
        subscriber.next("Olá, Eduardo!");

        // O Observable não morre, ele continua enviado o resultado e quem estiver inscrito vai receber
        setTimeout(() => {
          subscriber.next("Resposta com delay");
        }, 5000);
        // Aqui, não vai enviar mais observables. Pois o método já fez tudo que tinha que fzer
        subscriber.complete();
      } else {
        subscriber.error("Ops! Deu erro!");
      }
    });
  }

  usuarioObservable(nome: string, email: string): Observable<Usuario> {
    return new Observable(sub => {
      if (nome === 'Admin') {
        let usuario = new Usuario(nome, email);

        setTimeout(() => sub.next(usuario), 1000);
        setTimeout(() => sub.next(usuario), 2000);
        setTimeout(() => sub.next(usuario), 3000);
        setTimeout(() => sub.next(usuario), 4000);
        setTimeout(() => sub.complete(), 5000);
      }
    })
  } 
}

export class Usuario {
  nome: string;
  email: string;

  constructor(nome: string, email: string) {
    this.nome = nome;
    this.email = email;
  }
}
