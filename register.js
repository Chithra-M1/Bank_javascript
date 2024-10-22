function register(){
    window.location='./register.html'
}


function registration() {
    const reg = {
        Acc: document.getElementById('Account').value,
        pass: document.getElementById('password').value,
        balance: 0 // Initialize balance
    };

    if (reg.Acc === "" || reg.pass === "") {
        alert("Please fill all fields");
    } else {
        if (localStorage.getItem(reg.Acc)) {
            alert("⚠️ User already registered.");
        } else {
            localStorage.setItem(reg.Acc, JSON.stringify(reg)); // Add to local storage
            alert("✅ Registration successful.");
            window.location = './login.html';
            document.getElementById('form').reset(); // Reset 
        }
    }
}