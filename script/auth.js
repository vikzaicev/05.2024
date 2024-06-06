export function getAuthForm() {
    return `
               <form class="mui-form" id="auth-form">
                    <div class="mui-textfield mui-textfield--float-label">
                        <input type="email" id="email-input" required>
                        <label for="email-input">Email</label>
                    </div>
                    <div class="mui-textfield mui-textfield--float-label">
                        <input type="password" id="password-input" required >
                        <label for="password-input" >Пароль</label>
                    </div>
                    <button type="submit" id="auth-submit" 
                        class="mui-btn mui-btn--raised mui-btn--danger">Войти</button>
                </form>`
}

export function aythWithEmailAndPassword(email, password) {
    const apiKey = "AIzaSyCCZXs4Kn0sHb2UssirTBWKqUTFn2NSNEQ"
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
        {
            method: 'POST',
            body: JSON.stringify({ email, password, returnSecureToken: true }),
            headers: {
                'Content-Type': 'aplication/json'
            }
        }
    )
        .then(response => response.json())
        .then(data => data.idToken)
    console.log(data);
}