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
       this.saveValues(name, value)
    }

    saveValues(name, value){
        localStorage[name]=value
    }

    showCss(){
        this.cssCode.innerHTML =  "<span>" + this.btn.style.cssText.split(';').join(';</span><span>');
       }

       restoreData(){
          const properties = Object.keys(localStorage)
          properties.forEach(propertie=>{              
              this.handleStyle[propertie](localStorage[propertie])
              this.controls.elements[propertie].value =(localStorage[propertie])
          })
       }
  
      init(){
          this.addEvent()   
          this.restoreData()
       
      }
  }
  
    
    


       

        

