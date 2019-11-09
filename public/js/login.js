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
            <head>
                <meta charset="utf-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>Dungeon Sem Dragons - Login</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet">
                <link rel="stylesheet" href="../bulma/css/bulma.css" />
                <link rel="stylesheet" type="text/css" href="../css/login.css">
            </head>

            <body>
                <section class="hero is-dark is-fullheight">
                    <div class="hero-body">
                        <div class="container has-text-centered">
                            <div class="column is-4 is-offset-4">
                                <h3 class="title has-text-white">Login</h3>
                                <p class="subtitle has-text-white">Identifique-se para prosseguir</p>
                                <span id="span"></span>
                                <div class="box">
                                    <form method="POST" action="/game-page">
                                        <div class="field">
                                            <div class="control">
                                                <input name="email" class="input is-large" type="email" placeholder="Email" autofocus="" id="email">
                                            </div>
                                        </div>

                                        <div class="field">
                                            <div class="control">
                                                <input name="senha" class="input is-large" type="password" placeholder="Password" id="senha">
                                            </div>
                                        </div>
                                        <div class="field">
                                            <label class="checkbox">
                            <input type="checkbox">
                            Lembre-se de mim
                            </label>
                                        </div>
                                        <button class="button is-block is-success is-large is-fullwidth">Entrar</button>
                                    </form>
                                </div>
                                <p class="has-text-grey">
                                    <a href="/cadastro">Cadastro</a>  &nbsp;·&nbsp;
                                    <a href="../"></a> &nbsp;·&nbsp;
                                    <a href="../"></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <script>
                window.onload = function(req, res){
                        if ( document.cookie.includes("email=") != false){
                            location.pathname = '/game-page';
                        }
                    }

                    window.onload = (function(){
                    console.log('fodasse');
                    let url = window.location
                    
                    let attr = url.search;
                    console.log(attr);
                    if(attr === '?errLogin=true'){
                        var span = document.getElementById('span');
                        span.innerText = 'Senha ou usuario incorretos';
                    }
                });
                </script>
                <!--<script async type="text/javascript" src="../js/bulma.js"></script> -->
            </body>

            </html>
        );
    }
  }

  ReactDOM.render(<gamePage />, domContainer);