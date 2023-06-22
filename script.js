//your JS code here. If required.
let username = document.getElementById("username");
let password = document.getElementById("password");
let checkbox = document.getElementById("checkbox");
let submit = document.getElementById("submit");
let form = document.getElementById('form');
let isChacked=false;

checkbox.addEventListener('change',(e)=>{
    // console.log(e)
    if(isChacked==false){
        isChacked=true
    }else{
        isChacked=false;
    }
    console.log(isChacked)
})
let userDetailss =[]
submit.addEventListener('click',(e)=>{
    e.preventDefault()
    let obj ={
        'username':username.value,
        'passwort':password.value,
    }
    if(isChacked){
       userDetailss.push(obj);
       localStorage.setItem('userDetailss',JSON.stringify(userDetailss));
       let button = document.createElement('button');
       button.innerText = 'Login as existing user';
       button.setAttribute('id','existing')
       form.appendChild(button);
       existingUser()
    }
    alert(`Logged in as ${username.value}`)
})

function existingUser(){
    let button = document.getElementById('existing');
    button.addEventListener('click',(e)=>{
    e.preventDefault()
    let userDetailss= JSON.parse(localStorage.getItem('userDetailss'));
    if(userDetailss.length>0){
        alert(`Logged in as ${userDetailss[0].username}`)
    }
})
}
