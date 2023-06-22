let username = document.getElementById("username");
let password = document.getElementById("password");
let checkbox = document.getElementById("checkbox");
let submit = document.getElementById("submit");
let form = document.getElementById('form');
let isChacked=false;
let username1=null;
// localStorage.removeItem('userDetailess')
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
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    username1 ={
        'username':username.value,
        'passwort':password.value,
    }
    if(isChacked){
       userDetailss.push(username1);
       localStorage.setItem('userDetailss',JSON.stringify(userDetailss));
      
       
    }
    alert(`Logged in as ${username.value}`)
})

existingUser()
let buttonn= document.getElementById('existing');
function existingUser(){
    let userDetailss  = JSON.parse(localStorage.getItem('userDetailss'))||[];
    if(userDetailss.length>0){
        let button = document.createElement('button');
        button.innerText = 'Login as existing user';
        button.setAttribute('id','existing')
        document.body.appendChild(button);
        
        buttonn.addEventListener('click',(e)=>{
            e.preventDefault();
            alert(`Logged in as ${userDetailss[0].username}`);
        })
    }

}

