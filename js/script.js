// console.log("first")

// parameter
let names = "";
let date = "";
let gender = "";
let message = "";
let checked = false;
let loading = false;

// greetings function
function greetings(){
    const greetingsName = document.getElementById('g-name').value
    const showGreetings = document.getElementById("greetings")
    const blur = document.getElementById('c-g')
    const judul = document.getElementById("name-judul");

    console.log(greetingsName)

    if(greetingsName != ""){
        judul.innerHTML = `<h2>Hai ${greetingsName} , Welcome to Top School Website</h2>`;
        showGreetings.style.display="none"
        blur.style.display="none"
        document.body.style.overflow='auto'
    }else{
        alert("Nama Harus Diisi")
    }
}

// input name and validate
function onChangeName(event) {
  // e.preventDefault()
  names = event.target.value;

  // validate name field
  if (names == "") {
    document.getElementById("name-c").classList.add("new-validate");
  } else {
    document.getElementById("name-c").classList.remove("new-validate");
  }
}

// input date and validate
function onChangeDate(event) {
  date = event.target.value;

  // validate date field
  if (date == "") {
    document.getElementById("date-c").classList.add("new-validate");
  } else {
    document.getElementById("date-c").classList.remove("new-validate");
  }
}

// input gender and validate
function gender1(e) {
  gender = e;

  // validate gender field
  if (gender == "") {
    document.getElementById("gender-c").classList.add("new-validate");
  } else {
    document.getElementById("gender-c").classList.remove("new-validate");
  }
}

// input message and validate
function onChangeMessage(event) {
  message = event.target.value;

  // validate message field
  if (message == "") {
    document.getElementById("pesan-c").classList.add("new-validate");
  } else {
    document.getElementById("pesan-c").classList.remove("new-validate");
  }
}

// validate function
function validate() {
  // validate name field
  if (names == "") {
    document.getElementById("name-c").classList.add("new-validate");
  } else {
    document.getElementById("name-c").classList.remove("new-validate");
  }

  // validate date field
  if (date == "") {
    document.getElementById("date-c").classList.add("new-validate");
  } else {
    document.getElementById("date-c").classList.remove("new-validate");
  }

  // validate gender field
  if (gender == "") {
    document.getElementById("gender-c").classList.add("new-validate");
  } else {
    document.getElementById("gender-c").classList.remove("new-validate");
  }

  // validate message field
  if (message == "") {
    document.getElementById("pesan-c").classList.add("new-validate");
  } else {
    document.getElementById("pesan-c").classList.remove("new-validate");
  }

  // check all field
  if ((names, date, gender, message === "")) {
    checked = false;
  } else {
    checked = true;
  }

  return;
}

// submit function
function submit() {
  // menyiapkan nilai parameter
  const table = document.getElementById("table-result");
  const currentTime = new Date().toString();

  //   validate semua nilai parameter sesuai kondisi
  validate();

  //   jika sudah sesuai maka lanjutkan mengirim data ke result
  if (checked === true) {
    changeHtml(table, currentTime);
  }
}

// reset funtion
function reset() {
  loading = true;
  //   mengubah nilai parameter menjadi nilai semula
  const name = (document.getElementById("name").value = "");
  const date = (document.getElementById("date").value = "");
  const gender = document.getElementsByName("gender").forEach((radio) => {
    radio.checked = false;
  });
  const message = (document.getElementById("message1").value = "");
  const judul = document.getElementById("name-judul");
  const table = document.getElementById("table-result");

  judul.innerHTML = `<h2>Hai, Welcome to Top School Website</h2>`;
  table.innerHTML = `<table id="table-result"></table>`;

  loading = false;
}

// add result function
function changeHtml(element, formmatTime) {
  element.innerHTML = `
  <table>
                            <tr>
                                <td><b>Current Time</b></td>
                                <td>:</td>
                                <td>${formmatTime}</td>
                            </tr>
                            <tr>
                                <td><b>Nama</b></td>
                                <td>:</td>
                                <td>${names}</td>
                            </tr>
                            <tr>
                            <td><b>Tanggal Lahir</b></td>
                            <td>:</td>
                            <td>${date}</td>
                            </tr>
                            <tr>
                            <td><b>Jenis Kelamin</b></td>
                            <td>:</td>
                            <td>${gender}</td>                                
                            </tr>
                            <tr>
                                <td><b>Pesan</b></td>
                                <td>:</td>
                                <td>${message}</td>
                            </tr>
                        </table>
                        `;
}

// Menu bar mobile show
function shwMenu() {
  document.getElementById("mnu-bar").style.display = "none";
  document.getElementById("btn-cls").style.display = "block";
  document.getElementById("mnu").style.display = "block";
}

// Menu bar mobile close
function clsMenu() {
  document.getElementById("mnu-bar").style.display = "block";
  document.getElementById("btn-cls").style.display = "none";
  document.getElementById("mnu").style.display = "none";
}

// close all menu for mobile
function clsAll() {
  if (window.innerWidth >= 769) {
    document.getElementById("mnu-bar").style.display = "none";
    document.getElementById("btn-cls").style.display = "none";
    document.getElementById("mnu").style.display = "none";
  } else {
    document.getElementById("mnu-bar").style.display = "block";
  }
}

// conditional close menu
window.addEventListener("resize", clsAll);
