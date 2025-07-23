function Login() {

    return (

        <div className="container">

            <h1>Login</h1>
            <div className="mb-3">
                <label htmlfor="email-input" class="form-label">E-mail</label>
                <input type="email" class="form-control" id="email-input" placeholder="name@example.com"></input>
            </div>
            <div className="mb-3">
                <label htmlfor="senha-input" class="form-label">Senha</label>
                <input type="password" class="form-control" id="senha-input"></input>
            </div>
            <div className="form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="checkChecked"
                    checked
                />
                <label class="form-check-label" htmlFor="check-input">
                    Mantenha-me conectado
                </label>
            </div>

            <button type="button" className="btn btn-primary">Entrar</button>

            <a href="https://www.treinarecife.com.br/" target="_blank">Esqueci a Senha</a>
            

        </div>
    )
}

export default Login;
