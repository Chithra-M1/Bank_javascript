function login(){
    window.location='./login.html'
}
// function log(){
//     let key = document.getElementById('uname').value;
//     console.log(key)
//     let key1 = document.getElementById('Account').value;
//     console.log(key1)
//     let key2 = document.getElementById('pwd').value;
//     console.log(key2)


//     if(localStorage.getItem(key)){
//         const reg = JSON.parse(localStorage.getItem(key));
        
//     }

// }


function log() {
    let accountNumber = document.getElementById('Account').value;
    let password = document.getElementById('pwd').value;
    const storedAccount = localStorage.getItem(accountNumber);
    
    if (!storedAccount) {
        alert("❌ Invalid account number.");
    } else {
        const userDetails = JSON.parse(storedAccount);
        if (userDetails.pass !== password) {
            alert("🔑 Incorrect password.");
        } else {
            alert("🎉 Login successful!");
            localStorage.setItem('currentUserAccount', accountNumber); // Save current account
            setTimeout(() => {
                window.location = './wellcome.html'; // Redirect to home page
            }, 1000); // Redirect after 1 second
        }
    }

}






