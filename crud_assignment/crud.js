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
        <tr>
          <td data-label="Name">${user.name}</td>
          <td data-label="Email">${user.email}</td>
          <td data-label="Phone">${user.phone}</td>
          <td >
            <button class="edit" onclick="editUser(${i})">Edit</button>
            <button class="delete" onclick="deleteUser(${i})">Delete</button>
          </td>
        </tr>
      `;
    })
    .join("");
}

function saveUser() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!name || !email || !phone) {
    alert("All fields are required!");
    return;
  }
    const phonepattern = /^\d{10}$/;
  if (!phonepattern.test(phone)) {
    alert("Please enter a valid phone number (with 10 digits!)");
    return;
  }

   const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailpattern.test(email)){
      alert("please add correct email!");
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
