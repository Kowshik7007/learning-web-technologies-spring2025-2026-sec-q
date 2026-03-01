const nameForm = document.getElementById('nameForm');
const nameInput = document.getElementById('userName');
const errorDisplay = document.getElementById('error-message');

nameForm.addEventListener('submit', (event) => {
    let errors = [];
    const val = nameInput.value.trim();

    
    if (val === "") {
        errors.push("Name cannot be empty.");
    }

    const words = val.split(" ").filter(word => word.length > 0);
    if (words.length < 2) {
        errors.push("Name must contain at least two words.");
    }

    const firstChar = val[0]?.toLowerCase();
    if (firstChar < 'a' || firstChar > 'z') {
        errors.push("Name must start with a letter.");
    }

    const allowedExtras = ".- ";
    for (let i = 0; i < val.length; i++) {
        const char = val[i];
        const lowerChar = char.toLowerCase();
        
        const isLetter = lowerChar >= 'a' && lowerChar <= 'z';
        const isAllowedExtra = allowedExtras.includes(char);

        if (!isLetter && !isAllowedExtra) {
            errors.push(`Character '${char}' is not allowed.`);
            break; 
         }
    }

    if (errors.length > 0) {
        event.preventDefault();
        errorDisplay.innerHTML = errors.join("<br>");
    } else {
        errorDisplay.style.color = "green";
        errorDisplay.textContent = "Name is valid!";
    }
});
