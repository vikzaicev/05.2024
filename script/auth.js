export function getAuthForm() {
    return `
               <form class="mui-form" id="auth-form">
                    <div class="mui-textfield mui-textfield--float-label">
                        <input type="email" id="email-input" >
                        <label for="email-input">Email</label>
                    </div>
                    <div class="mui-textfield mui-textfield--float-label">
                        <input type="password" id="password-input" >
                        <label for="password-input">Пароль</label>
                    </div>
                    <button type="submit" id="auth-submit" 
                        class="mui-btn mui-btn--raised mui-btn--danger">Войти</button>
                </form>`
}