import React, { Component } from 'react';
import './LoginModal.css'

export default class LoginCadastro extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            erro : ""
        }
    }

    Login(data){
        var login = fetch('/login', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({login: data})
                });
                if(login.errorLogin == undefined){
                    console.log("Deu bom");
                }
                else{
                    this.setState({
                        erro : login.erroLogin
                    })
                    console.log("Deu ruim");
                }
    }

    render(){
        return(
            <div className="App">
                <div class="modal-bg">
                    <div class="modal">
                        <div class="boxes">
                            <div class="login-box login-cadastro-box">
                                <h3>Login</h3>
                                <form action="#">
                                    <input type="email" placeholder='email'/>
                                    <input type="password" placeholder='senha'/>
                                    <button onClick={this.props.loginModalHandler} class="login-button" type="submit">Login</button>
                                </form>
                            </div>
                            <div class="cadastro-box login-cadastro-box">
                                <h3>Cadastro</h3>
                                <form action="#">
                                    <input type="email" placeholder='email'/>
                                    <input type="password" placeholder='senha'/>
                                    <button class="cadastro-button" type="submit">Cadastrar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}