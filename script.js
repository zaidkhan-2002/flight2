click=document.createElement('input'); //<input>
click.setAttribute("placeholder","Enter Name")
let click1 =document.createElement('button')
click1.innerText = 'submit'
click1.setAttribute("onclick","fun(fun1)")

let p1= document.createElement('p')
p1.id ='abc';
document.body.append(click,click1,p1)

let fun= (callback) =>{
    
    document.getElementById('abc').innerHTML='Hello'+" "+callback()
}
let fun1 = () => {
    click= ('Enter Name:')
}







