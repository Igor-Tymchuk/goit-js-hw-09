const formData = {
    email: "",
    message: "",
}
const form = document.querySelector(".feedback-form");
if(localStorage.getItem("feedback-form-state")) {
    const parseData = JSON.parse(localStorage.getItem("feedback-form-state"));
    form.elements.email.value = parseData.email;
    form.elements.message.value = parseData.message;
}

const saveData = (event) => {
    event.preventDefault();
    formData.email = event.currentTarget.elements.email.value.trim();
    formData.message = event.currentTarget.elements.message.value.trim();
    console.log("formData:", formData)
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

form.addEventListener("input", saveData)