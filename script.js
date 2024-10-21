const form = document.getElementById('form');
const email = document.getElementById('email');
const btn = document.getElementById('btn');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    Validate()
});

function Validate() {
    const emailValue = email.value.trim()

    if (emailValue === '') {
        setErrorFor(email, 'Email connot be empty')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Please provide a valid email address')
    } else {
        setSuccessFor(email)
    }
}

function setErrorFor() {

}
function setSuccessFor() {

}
function isEmail(email) {
    return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email)
}