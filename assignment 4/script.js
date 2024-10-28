function showForm() {
    document.getElementById("profile-section").style.display = "none";
    document.getElementById("form-section").style.display = "block";
}

function submitForm() {
   
    const name = document.getElementById("nameInput").value;
    const role = document.getElementById("roleInput").value;
    const availability = document.getElementById("availabilityInput").value;
    const age = document.getElementById("ageInput").value;
    const location = document.getElementById("locationInput").value;
    const experience = document.getElementById("experienceInput").value;
    const email = document.getElementById("emailInput").value;

   
    document.getElementById("name").textContent = name;
    document.getElementById("role").textContent = role;
    document.getElementById("availability").textContent = availability;
    document.getElementById("age").textContent = age;
    document.getElementById("location").textContent = location;
    document.getElementById("experience").textContent = experience;
    document.getElementById("email").textContent = email;

    
    document.getElementById("form-section").style.display = "none";
    document.getElementById("profile-section").style.display = "block";
}
