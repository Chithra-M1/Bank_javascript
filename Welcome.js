function deposit() {
    const amount = parseFloat(document.getElementById('depositAmount').value);
    const password = document.getElementById('depositPassword').value;

    // Assuming the account number is stored in localStorage with the key 'currentUserAccount'
    const accountNumber = localStorage.getItem('currentUserAccount');
    const storedAccount = localStorage.getItem(accountNumber);

    if (!storedAccount) {
        alert("⚠️ Account not found.");
        return;
    }

    const userDetails = JSON.parse(storedAccount);

    if (userDetails.pass !== password) {
        alert("⚠️ Incorrect password.");
        return;
    }

    if (isNaN(amount) || amount <= 0) {
        alert("⚠️ Invalid amount.");
        return;
    }

    // Update the balance (assuming it is stored in userDetails.balance)
    userDetails.balance = (userDetails.balance || 0) + amount;
    localStorage.setItem(accountNumber, JSON.stringify(userDetails)); // Save updated user details

    alert("✅ Amount successfully added. New balance: " + userDetails.balance);
}

function withdraw() {
    const amount = parseFloat(document.getElementById('withdrawAmount').value);
    const password = document.getElementById('withdrawPassword').value;

    const accountNumber = localStorage.getItem('currentUserAccount');
    const storedAccount = localStorage.getItem(accountNumber);

    if (!storedAccount) {
        alert("⚠️ Account not found.");
        return;
    }

    const userDetails = JSON.parse(storedAccount);

    if (userDetails.pass !== password) {
        alert("⚠️ Incorrect password.");
        return;
    }

    if (isNaN(amount) || amount <= 0) {
        alert("⚠️ Invalid amount.");
        return;
    }

    if ((userDetails.balance || 0) < amount) {
        alert("⚠️ Insufficient balance.");
        return;
    }

    userDetails.balance -= amount; // Deduct the amount from the balance
    localStorage.setItem(accountNumber, JSON.stringify(userDetails)); // Save updated user details

    alert("✅ Amount successfully withdrawn. New balance: " + userDetails.balance);
}