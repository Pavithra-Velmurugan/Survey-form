const form = document.querySelector("form");

let submitbutton = document.getElementById("submit");

let firstname, lastname, address, pincode, state, country, gender, choiceoffood;

submitbutton.addEventListener("click", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  for (const pair of formData.entries()) {
    console.log(pair);
  }

  firstname = document.getElementById("first-name").value;
  console.log(firstname);
  document.getElementById("table_firstname").innerText = firstname;

  lastname = document.getElementById("last-name").value;
  console.log(lastname);
  document.getElementById("table_lastname").innerText = lastname;

  address = document.getElementById("address").value;
  console.log(address);
  document.getElementById("table_address").innerText = address;

  pincode = document.getElementById("pincode").value;
  console.log(pincode);
  document.getElementById("table_pincode").innerText = pincode;

  state = document.getElementById("state").value;
  console.log(state);
  document.getElementById("table_state").innerText = state;

  country = document.getElementById("country").value;
  console.log(country);
  document.getElementById("table_country").innerText = country;

  var ele = document.getElementsByName("gender");
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      gender = ele[i].value;
    }
  }
  console.log(gender);
  document.getElementById("table_gender").innerText = gender;

  var options = document.getElementById("choiceoffood").selectedOptions;
  choiceoffood = Array.from(options).map(({ value }) => value);
  console.log(choiceoffood);
  document.getElementById("table_choiceoffood").innerText = choiceoffood;
  form.reset();
});
