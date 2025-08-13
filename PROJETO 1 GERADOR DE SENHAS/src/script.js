const frm = document.querySelector("form")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    
        let resposta = ""

        const numCaracteres = parseInt(document.getElementById("numeroscaracteres").value)
        let Maiusculas = document.querySelector('input[name="letrasmaiusculas"]')
        let Minusculas = document.querySelector('input[name="letrasminusculas"]')
        let Simbolos = document.querySelector('input[name="simbolos"]')
        let Numeros = document.querySelector('input[name="numeros"]')

        if (Maiusculas.checked) {
            resposta += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        }
        if (Minusculas.checked) {
            resposta += "abcdefghijklmnopqrstuvwxyz"
        }
        if (Simbolos.checked) {
            resposta += "!@#$%^&*()_+{}[]:;<>,.?/"
        }
        if (Numeros.checked) {
            resposta += "0123456789"
        }

        if (resposta.length === 0) {
            alert("Selecione pelo menos uma opção!")
            return
        }

        let sorteio = ""

        for(let i = 0; i <= numCaracteres; i++){
            
        }

})