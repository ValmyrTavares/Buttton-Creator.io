# Buttton-Creator.ioERRO
Quero começar esse tutorial comentando um erro que tomei e levei uns 5 minutos perdido. Pelo tempo que levei para concertar vale o comentário
O erro é esse.
ncaught SyntaxError: Cannot use import statement outside a module
Ele aparecia toda vez que tentava importar o js para o script principal. Dizendo que não se pode usar import fora do module. Claro que isso é porque eu não disse no html que o script é type=”module” Só isso

Criando um evento change
Temos um form com vários inputs e vamos começar colocando um evento nesse container maior chamado form. Cum evento de change. Quando algo mudar quero que o evento seja disparado
ERRO-2
Como estou copiando o sript de um objeto e não de uma classe eu tomei alguns erros. O segundo erro é que tentei criar um eventListener  solto, que não está dentro de nenhum método e isso da erro

Então segundo o tramite normal que é ter um método init que puxa todo mundo que precisa ser puxado

  init(){
        this.addEvent()       
    }
 Ai temos o addEvent  e o handleChange

  addEvent(){
        this.controls.addEventListener("change",()=>{
             this.handleChange()
     })
    }
     handleChange(){
         console.log(event.target.name)
     }
 

O interessante aqui é que eu coloco um console.log puxando o name do input e ele traz. Pra mim isso é uma novidade e note que não há nenhum parametro sendo passado em nenhum método.
GET NAME VALUE
 handleChange(){
        const name = event.target.name;
        const value = event.target.value;
     }
 
Aqui se abre uma dúvida. Eu posso criar um objeto fora do constructor.   Não
O objeto tem que estra dentro do constructor
Mas ele pode ser um const ao invés de ser um this?
Sim mas ele fica restrito e não pode ser usado em outro método, para que isso aconteça ele precisa do this
objeto dentro do constructor
Respondido todos esse por menores Eu faço o objeto dentro do contructor e coloco os métodos dentro dele e vou disparar cada um deles pelo nome.
    constructor(){
        this.controls = document.querySelector("#controles");
        this.btn = document.querySelector(".btn")  
        
        this.handleStyle = {
            element:this.btn,
            height(value){
                this.element.style.height = value + "px"
            }
        }
    }
Aqui temos outra questão interessante. Veja que eu não posso usar o this.btn direto dentro do objeto. Quando eu faço isso ele diz que não pode ler style de indefinido. Para que funciona eu tenho que referendar o btn dentro do objeto handelStyle.
ERRO3
Não esqueça de colocar o px depois do value
Chamando os métodos do handelStyle
 this.handleStyle[name](value)

Essa informação talvez seja uma das grandes justificativas para que escreva esse tutoria. Eu uso essas chaves para colocar o nome do método e depois como se ele fosse um método com nome eu coloco o parâmetro valor dentro dele que é recebido dentro do objeto para cada método. Isso de fato é uma manobra nova que eu não conhecia ou não saberia usar. Dessa forma que pego o name e o value e com eles dois eu disparo cada métod em separado dentro do objeto. 
OBJETO COMPLETO
    constructor(){
        this.controls = document.querySelector("#controles");
        this.btn = document.querySelector(".btn")  
        
        this.handleStyle = {
           element:this.btn,
            backgroundColor(value){
                this.element.style.backgroundColor = value
            },
            height(value){
                this.element.style.height = value + "px"
            },
            width(value){
                this.element.style.width = value + "px"
            },
            texto(value){
                this.element.innerText = value ;
            },
            color(value){
                this.element.style.color = value;
            },
            border(value){
                this.element.style.border = value;
            },
            borderRadius(value){
                this.element.style.borderRadius = value +'px';
            },
            fontFamily(value){
                this.element.style.fontFamily = value ;
            },
            fontSize(value){
                this.element.style.fontSize = value +'px';
            },
        }
    }
 

CHAMANDO METODOS PELO NOME
 handleChange(){
        const name = event.target.name;
        const value = event.target.value;
        this.handleStyle[name](value)
     }

Vc da para um método o evento change e consegue através do event.target.name o nome de cada evento que tem que ser dado claro dentro dos inputs. Sou eu que dou o nome de cada evento disparado nos inputs. Ai invoco o objeto que tem que estar dentro do constructor da classe, this.handleStyle. Posso acessar o nome do parametro com chaves e ai eu coloco o nome de cada metodo[name] e uso parenteses como se estivesse trantando com um método normal e lá eu coloco o value  handleStyle[name](value) é assim que eu acesso todos os métodos do objeto pelo nome de cada evento. 

<PRE><CODE>
MOSTRANDO OS PARAMETROS DO CSS
Aqui temos mais um função importante que se chama cssText
CSSTEXT
Ela da por escrito o que está dentro feito e qual o parametro da mudança. Para ver a criança brincando basta escrever isso encima de um elemento que esteja sofrendo as suas modificações. Nesse caso é o this.btn
 console.log( this.btn.style.cssText ) 
Entendido isso eu vou usar esse valor dentro do meu parametro cssCode
this.cssCode = document.querySelector('.css')
Ai temos uma tarefa que parece simples mas não é. Fazer que o texto fique separados por linhas. Eu imagino outras soluções que faria para que isso acontecesse, mas vou seguir pela solução do Origamid e depois vou tentar a minha. A dele é no mínimo mais rebuscada.
SPLIT & JOIN
Pegar o texto gerado pelo this.btn.style.cssText e acrescenta um slipt(“;”) transoformando todo o texto em um array e o critério para separar os elementos é o ponto e virgula.

Depois temos que retornálo a uma string mas separado por spans. Pra isso usamod o join
Se colocarmos o .join() no final ele vai retornar tudo como se fosse um string, mas ai nós acrescentamos uma </span><span> fechamos com uma span e já abrimos outra a outra vai sempre sobrar mas isso não parece ser um problema no código. Testando com console.log fica assim 
console.log("<span>" + this.btn.style.cssText.split(';').join(';</span><span>'));
E usando pra vale fica assim 
Feito o codigo vai sendo printado do lado dos controles
E até aqui a nossa classe ButtonCreate está assim 
export default class ButtonCreate {
 
    constructor(){
        this.controls = document.querySelector("#controles");
        this.btn = document.querySelector(".btn")  
        this.cssCode = document.querySelector('.css')
        
        this.handleStyle = {
           element:this.btn,
            backgroundColor(value){
                this.element.style.backgroundColor = value
            },
            height(value){
                this.element.style.height = value + "px"
            },
            width(value){
                this.element.style.width = value + "px"
            },
            texto(value){
                this.element.innerText = value ;
            },
            color(value){
                this.element.style.color = value;
            },
            border(value){
                this.element.style.border = value;
            },
            borderRadius(value){
                this.element.style.borderRadius = value +'px';
            },
            fontFamily(value){
                this.element.style.fontFamily = value ;
            },
            fontSize(value){
                this.element.style.fontSize = value +'px';
            },
        }
    }
 
    addEvent(){
        this.controls.addEventListener("change",()=>{
             this.handleChange()
     })
    }
    
    handleChange(){
       const name = event.target.name;
       const value = event.target.value;
       this.handleStyle[name](value)
       this.showCss();
    }
 
    showCss(){
        this.cssCode.innerHTML =  "<span>" + this.btn.style.cssText.split(';').join(';</span><span>');
       }
  
      init(){
          this.addEvent()      
      }
  }

Mas queremos que esses parametros fiquem guardados no nosso localStorage e depois seja recuperado para que o usuário não comece tudo do começo de novo. 
LOCALSTORAGE
Primeiro vamos só guardar os parâmetros no nosso localstorage com uma método saveValues().Dentro od handleChange nós disparamos ela e passamos os parametros de name e value
  this.saveValues(name, value)
Depois usamos esses parametros assim 
 saveValues(name, value){
        localStorage[name]=value
    }

E isso já garante que os parametros são registrados todos no localstorage
RECUPERANDO O LOCALSTORAGE
A propriedade
  Object.keys(localStorage)  
Traz as chaves do objeto localStorage. Traz como um array então vamos guardar esse array dentro de um parametro properities. E o properties vira um array
 const properties = Object.keys(localStorage)
Ai usamos esse properties dentro de um forEach. Ele repete o nome propertie sem s para recuperar cada chave. Não sei se isso é didático mas vou seguir assim e faz de novo o que já foi feito no hahdleChange para mandar valores para o handleStyle
properties.forEach(propertie =>{   
        handleStyle[propertie](localStorage[propertie])  
Só que no lugar no name ficou o propertie, que é o name recuperado do localstorage e no value vai o localStoarage da propetie assim eu atualizo o meu objeto handleSyle e para atualizar o html eu faço 
 this.controls.elements[propertie].value =(localStorage[propertie])

Dizendo que ele recebe o valor de cada elemento do localStorage[propertie]
Tudo funciona mas eu tomo um erro dizendo que dentro do meu restoreData que e o método que recebe as informações so localStorage o handleStyle não é uma função. E não é mesmo. É um objeto que tem funções.
 restoreData(){
          const properties = Object.keys(localStorage)
          properties.forEach(propertie=>{              
              this.handleStyle[propertie](localStorage[propertie])
              this.controls.elements[propertie].value =(localStorage[propertie])
          })
       }
Claro que eu gostaria de me livrar desse erro mas não consegui. Vou subir esse projeto pro git para ficar registrado e eu consegui consultar facilmente quando precisar









JAVASCRIPT PRONTO

const controles = document.getElementById('controles')
const cssText = document.querySelector('.css')
const btn = document.querySelector('.btn')
 
controles.addEventListener('change',handleChange)
 
 
 
const handleStyle = {
    element:btn,
    backgroundColor(value){
        this.element.style.backgroundColor = value
    },
    height(value){
        this.element.style.height = value + "px"
    },
    width(value){
        this.element.style.width = value + "px"
    },
    texto(value){
        this.element.innerText = value ;
    },
    color(value){
        this.element.style.color = value;
    },
    border(value){
        this.element.style.border = value;
    },
    borderRadius(value){
        this.element.style.borderRadius = value +'px';
    },
    fontFamily(value){
        this.element.style.fontFamily = value ;
    },
    fontSize(value){
        this.element.style.fontSize = value +'px';
    },
 
}
 
 
 
function handleChange(event){
    const name = event.target.name
    const value = event.target.value
   handleStyle[name](value)  
   saveValues(name, value)
   showCss()
 
}
 
function saveValues(name, value){
    localStorage[name] = value
}
 
 
 
function showCss(){
    cssText.innerHTML = '<span>' + btn.style.cssText.split(';').join(';</span><span>')
   console.log('<span>' + btn.style.cssText.split(';').join(';</span><span>'))
}
 
function setValues(){
    const properties = Object.keys(localStorage)
    properties.forEach(propertie =>{   
        handleStyle[propertie](localStorage[propertie])    
        controles.elements[propertie].value = localStorage[propertie]
    })
    showCss();
}
 
setValues();

CSS PRONTO
body{
    margin:0px;
    background:#ccc;
    box-sizing: border-box;
}
 
 
label{
    display:block;
}
input{
    display:block;
}
.button-creator{
    display: grid;
    grid-gap:30px;
    padding:30px;
    grid-template-columns:200px 1fr
}
#controles{
    font-family:monospace;
    font-size: .875rem;
    background: #eee;
    padding: 1rem;
    border-radius: 4px;
    box-shadow: 2px 2px 2px 0 rgba(0,0,0,.1) ;
}
.css{
    font-family: monospace;
    color:#333;
    margin-top:40px;
    display:flex;
    flex-direction: column;
}
.css span{
    display:block;
    margin-bottom: .5rem ;
}

HTML PRONTO

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Button Create</title>
</head>
<body>
    <section class="button-creator">
        <form action="" id="controles">
            <label for="texto">Texto</label>
            <input type="text" name="texto" id='texto'>
            <label for="color">Color</label>
            <input type="color" name="color" id='color'>
            <label for="backgroundColor">Background Color</label>
            <input type="color" name="backgroundColor" id='backgroundColor'>
            <label for="height">Height</label>
            <input type="range" name="height" id='height' min="0" max="200">
            <label for="width">Width</label>
            <input type="range" name="width" id='width' min="0" max="200">
            <label for="border">Border</label>
            <input type="text" name="border" id='border'>
            <label for="borderRadius">Border Radius</label>
            <input type="range" name="borderRadius" id='borderRadius'>
            <select name="fontFamily" id="">
                <option value="Arial" name="fontFamily">Arial</option>
                <option value="Georgia" name="fontFamily">Georgia</option>
                <option value="Impact" name="fontFamily">Impact</option>
                <option value="monospace" >monospace</option>
            </select>
            <label for="fontSize">Font Size</label>
            <input type="number" name="fontSize" id='fontSize'>
        </form>
        <section>
            <button class="btn">Clique</button>
            <pre>
                <code class="css">
                        
                </code>
            </pre>
        </section>
    </section>
    <script src="script.js"></script>
</body>
</html>


