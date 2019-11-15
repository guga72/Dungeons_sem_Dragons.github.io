'use strict'

const domContainer = document.querySelector('#main');
const cenarios = require('../../js/mapa')

class gamePage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {tela: cenarioInicial};
    }
  
    render() {
        return (
            <div>
            <head>
                <meta charset="utf-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Dungeon Sem Dragons - Cadastro</title>
                <!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet">-->
                <!-- Bulma Version 0.7.x-->
                <link rel="stylesheet" href="../bulma/css/bulma.css" />
            <!--<link rel="stylesheet" type="text/css" href="../css/login.css">-->
            </head>

            <body>
                <section class="hero is-dark is-fullheight">
                    <div class="hero-body">
                        <div class="container has-text-centered">
                            <div class="column is-4 is-offset-4">
                                <h3 class="title has-text-white">Cadastro</h3>
                                <span id="span"></span>
                                <div class="box">
                                    <form method="POST" action="/login">
                                        <div class="field">
                                            <div class="control">
                                                <input name="email" class="input is-large" type="email" placeholder="Email" autofocus="" id="email">
                                            </div>
                                        </div>

                                        <div class="field">
                                            <div class="control">
                                                <input name="senha" class="input is-large" type="password" placeholder="Senha" id="senha">
                                            </div>
                                        </div>

                                        <div class="field">
                                            <div class="control">
                                                <input name="confirmarsenha" class="input is-large" type="password" placeholder="Confirmar Senha" id="senha2">
                                            </div>
                                        </div>
                                        <button type="submit" class="button is-block is-success is-large is-fullwidth">Cadastrar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <script>
                    window.onload = function(req, res){
                        if ( document.cookie.includes("email=") != false){
                            console.log('fodasse');
                            location.pathname = '/game-page';
                        }
                    }

                    document.forms[0].addEventListener('submit', function(e){
                        var email = document.getElementsByName("email")[0].value;
                        var senha = document.getElementsByName("senha")[0].value;
                        var senha2 = document.getElementsByName("confirmarsenha")[0].value;
                        if(senha != senha2){
                            e.preventDefault();
                            alert('Senhas diferentes');
                        }
                    });

                    window.onload = (function(){
                    let url = window.location
                    
                    let attr = url.search;
                    console.log(attr);
                    if(attr === '?errCad=true'){
                        var span = document.getElementById('span');
                        span.innerText = 'Usuário já cadastrado';
                    }
                })();
                </script>
            </body>

            </html>
        </div>
        );
    }
  }

  ReactDOM.render(<gamePage />, domContainer);