// step 1 ; set button event 
document.getElementById('btn-subbmit').addEventListener('click', function(){
    // step 2; get email input value
    const emailinput = document.getElementById('email');
    const email = emailinput.value;
    // setp 3; set password
    const passinput = document.getElementById('pass');
    const password = passinput.value;
    // step 4; compare valid or invalid with if else
    if(email === 'maimun78l@gmail.com' && password === '751571887'){
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid user!!!');
    }
})