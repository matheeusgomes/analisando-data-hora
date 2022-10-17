function info() {
            let meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez');
            let semana = new Array('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb');
            let data = new Date();

            let sem = data.getDay();
            let mes = data.getMonth();

            document.querySelector('#saida').innerHTML = `<p>Dia:<mark>${data.getDate()}</mark></p>`;
            document.querySelector('#saida').innerHTML += `<p>Mês:<mark>${meses[mes]}</mark></p>`;
            document.querySelector('#saida').innerHTML += `<p>Ano:<mark>${data.getFullYear()}</mark></p>`;
            document.querySelector('#saida').innerHTML += `<p>Dia da Semana:<mark>${semana[sem]}</mark></p>`;
            document.querySelector('#saida').innerHTML += `<p>Hora:<mark>${data.getHours()}</mark></p>`;
            document.querySelector('#saida').innerHTML += `<p>Minutos:<mark>${data.getMinutes()}</mark></p>`;
            document.querySelector('#saida').innerHTML += `<p>Segundos:<mark>${data.getSeconds()}</mark></p>`;
        }
