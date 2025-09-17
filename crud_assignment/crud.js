let users = JSON.parse(localStorage.getItem("users")) || [];
let editIndex = null; 


document.getElementById("userForm").onsubmit = function(e) {
  e.preventDefault(); // prevent page reload
  saveUser();
};

renderUsers();

function renderUsers() {
  const userTable = document.getElementById("userTable");

  if (users.length === 0) {
    userTable.innerHTML = `<tr><td colspan="4">No users found</td></tr>`;
    return;
  }

  userTable.innerHTML = users
    .map((user, i) => {
      return `
        <tr class='lastrow'>
          <td data-label="Name" >${user.name}</td>
          <td data-label="Email" >${user.email}</td>
          <td data-label="Phone" >${user.phone}</td>
          <td >
            <button class="edit" onclick="editUser(${i})">Edit</button>
            <button class="delete" onclick="deleteUser(${i})">Delete</button>
          </td>
        </tr>
      `;
    })
    .join("");


 const rows = userTable.querySelectorAll("tr");
const lastRow = rows[rows.length - 1];

lastRow.classList.add("added");
lastRow.addEventListener("animationend", () => lastRow.classList.remove("added"));
}


function saveUser() {

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");

    // Reset errors
  nameError.textContent="";
  emailError.textContent = "";
  phoneError.textContent = "";

  if (!name || !email || !phone) {
    nameError.textContent ="name should not be empty!";
    emailError.textContent = ' email should not be empty!';
    phoneError.textContent = 'phone should not be empty!';
    return;
  }
  const namepattern=/[\a-\z]/;
  if(!namepattern.test(name)){
    nameError.textContent = 'name should only contain alphabets!';
    return;
  }
     const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailpattern.test(email)){
     emailError.textContent = "Please enter a valid email!";
      return;
    }

    const phonepattern = /^\d{10}$/;
  if (!phonepattern.test(phone)) {
     phoneError.textContent = "Please enter a valid 10-digit phone number!";
    return;
  }


  if (editIndex === null) {
  
    users.push({ name, email, phone });
  } else {
   
    users[editIndex] = { name, email, phone };
    editIndex = null;
  }

  localStorage.setItem("users", JSON.stringify(users));

  
  renderUsers();

  document.getElementById("userForm").reset();
}



function editUser(i) {
  document.getElementById("name").value = users[i].name;
  document.getElementById("email").value = users[i].email;
  document.getElementById("phone").value = users[i].phone;
  editIndex = i;

  
  document.getElementById("saveBtn").innerText = "Update";
}


function deleteUser(i) {
  users.splice(i, 1);
  localStorage.setItem("users", JSON.stringify(users));
  renderUsers();

}
