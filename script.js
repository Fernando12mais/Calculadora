let btnNums=document.querySelectorAll(".btn-num")
let btnOp=document.querySelectorAll(".btn-operator")
let body=document.querySelector("body")
body.addEventListener("keypress",addValueViaNumber)
let res=document.querySelector("#resultado")
btnNums.forEach((item)=>item.addEventListener("click",addValue))
btnOp.forEach((item)=>item.addEventListener("click",calculate))
let values=[]
function calculate(e){
    const {id}=e.target
   let cases={
    limpar:()=>{
        res.innerText=""
        values=[]
    },
       soma:()=>{
           res.innerText+="+"
           values.push("+")
       },
       subtracao:()=>{
           res.innerText+="-"
           values.push("-")
       },
       divisao:()=>{
           res.innerText+="/"
           values.push("/")
       },
       multiplicacao:()=>{
           res.innerText+="x"
           values.push("*")
       },
     
       potenciacao:()=>{
        res.innerText+="^"
        values.push("**")
       },
       parentesisLeft:()=>{
        res.innerText+="("
        values.push("(")

       },
       parentesisRight:()=>{
        res.innerText+=")"
        values.push(")")
       },   
       igual:()=>{
           let expressao=values.join("")
           let calculate=new Function(`return ${expressao}`)
           let resultado=calculate()
           res.innerText=resultado
       }  
   }
   return cases[id]()
}
function addValue(e){
    let value=e.target.innerText
    values.push(value)   
    res.innerText+=value
}
function addValueViaNumber(e){
    let value=e.key
    if(value==="Enter"){
        let expressao=values.join("")
        let calculate=new Function(`return ${expressao}`)
        let resultado=calculate()
        res.innerText=resultado 
        return;  
    }
    value=value.replace(/[^0-9 +/*^-]/g,"")
    values.push(value)   
    res.innerText+=value
}
