var cityTextBox = document.getElementsByTagName("tr")[0].childNodes[1].childNodes[0];
var regTableTextBox = document.getElementsByTagName("tr")[1].childNodes[1].childNodes[0];
var usernameTextBox = document.getElementsByTagName("tr")[2].childNodes[1].childNodes[0];
var timeTextBox = document.getElementsByTagName("tr")[3].childNodes[1].childNodes[0];
var commentTextArea = document.getElementById("komentar");
var button = document.getElementsByTagName("tr")[5].childNodes[0].childNodes[0];

cityTextBox.removeEventListener("onblur");
regTableTextBox.removeEventListener("onblur");
usernameTextBox.removeEventListener("onblur");
timeTextBox.removeEventListener("onblur");
commentTextArea.removeEventListener("onblur");
button.disabled = true;

function addAlert(index, url, error) {
    var tr = document.getElementsByTagName("tr")[index];
    if (tr.childNodes[2] !== undefined) {
        if (tr.childNodes[3] !== undefined) tr.removeChild(tr.childNodes[3]);
        tr.removeChild(tr.childNodes[2]);
    }
    var el = document.createElement("td");
    if (error === '') {
        el.setAttribute("class", "OK");
    }
    var newContent = document.createElement("img");
    newContent.setAttribute('src', url);
    el.appendChild(newContent);
    tr.appendChild(el);

    if (error !== '') {
        var el = document.createElement("td");
        var newContent = document.createTextNode(error);
        el.appendChild(newContent);
        tr.appendChild(el);
    }
}

function checkValidity() {
    if (document.getElementsByClassName("OK").length === 5) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
};

cityTextBox.addEventListener("blur", function () {
    var city = cityTextBox.value;

    if (city !== '') {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState < 4) {
                return;
            }
            if (xhr.status !== 200) {
                return;
            }
            if (xhr.readyState === 4) {
                if (xhr.responseText === "NOT OK") {
                    cityTextBox.style.backgroundColor = "#FF8080";
                    addAlert(0, 'https://zamger.etf.unsa.ba/images/16x16/brisanje.png', 'Grad ne postoji!');
                    cityTextBox.focus();
                } else {
                    addAlert(0, 'https://zamger.etf.unsa.ba/images/16x16/zad_ok.png', '');
                    cityTextBox.style.backgroundColor = "#80FF80";
                }
            }
        }
    } else {
        addAlert(0, 'https://zamger.etf.unsa.ba/images/16x16/brisanje.png', 'Morate ispuniti ovo polje');
        cityTextBox.style.backgroundColor = "white";
    }

    xhr.open('GET', 'http://zamger.etf.unsa.ba/provjeriGrad.php?grad=' + city, true);
    xhr.send('');
    checkValidity();
});

regTableTextBox.addEventListener("blur", function () {
    var regTable = regTableTextBox.value;

    if (regTable !== '') {
        var regex = /\d{3}-[A-Z]-\d{3}/;
        if (regTable.match(regex)) {
            addAlert(1, 'https://zamger.etf.unsa.ba/images/16x16/zad_ok.png', '');
            regTableTextBox.style.backgroundColor = "#80FF80";
        } else {
            regTableTextBox.style.backgroundColor = "#FF8080";
            addAlert(1, 'https://zamger.etf.unsa.ba/images/16x16/brisanje.png', 'Registarska tablica nema ispravan format!: bbb-S-bbb');
            regTableTextBox.focus();
        }
    } else {
        addAlert(1, 'https://zamger.etf.unsa.ba/images/16x16/brisanje.png', 'Morate ispuniti ovo polje');
        regTableTextBox.style.backgroundColor = "white";
    }
    checkValidity();
});

usernameTextBox.addEventListener("blur", function () {
    var username = usernameTextBox.value;

    if (username !== '') {
        var regex = /^[A-Za-z0-9][^\s]{0,20}$/;
        if (username.match(regex)) {
            addAlert(2, 'https://zamger.etf.unsa.ba/images/16x16/zad_ok.png', '');
            usernameTextBox.style.backgroundColor = "#80FF80";
        } else {
            usernameTextBox.style.backgroundColor = "#FF8080";
            addAlert(2, 'https://zamger.etf.unsa.ba/images/16x16/brisanje.png', 'Username ne smije imati više od 20 znakova i mora se sadržati isključivo od slova i brojeva!');
            usernameTextBox.focus();
        }
    } else {
        addAlert(2, 'https://zamger.etf.unsa.ba/images/16x16/brisanje.png', 'Morate ispuniti ovo polje');
        usernameTextBox.style.backgroundColor = "white";
    }
    checkValidity();
});

timeTextBox.addEventListener("blur", function () {
    var time = timeTextBox.value;

    if (time !== '') {
        var regex = /^([0-1]\d|2[0-3]):[0-5]\d:[0-5]\d$/;
        if (time.match(regex)) {
            addAlert(3, 'https://zamger.etf.unsa.ba/images/16x16/zad_ok.png', '');
            timeTextBox.style.backgroundColor = "#80FF80";
        } else {
            timeTextBox.style.backgroundColor = "#FF8080";
            addAlert(3, 'https://zamger.etf.unsa.ba/images/16x16/brisanje.png', 'Vrijeme mora biti validno i u formatu HH:MM:SS!');
            timeTextBox.focus();
        }
    } else {
        addAlert(3, 'https://zamger.etf.unsa.ba/images/16x16/brisanje.png', 'Morate ispuniti ovo polje');
        timeTextBox.style.backgroundColor = "white";
    }
    checkValidity();
});

commentTextArea.addEventListener("blur", function () {
    var comment = commentTextArea.value;

    if (comment !== '') {
        var regex = /^[^<>]+$/;
        if (comment.match(regex)) {
            addAlert(4, 'https://zamger.etf.unsa.ba/images/16x16/zad_ok.png', '');
            commentTextArea.style.backgroundColor = "#80FF80";
        } else {
            commentTextArea.style.backgroundColor = "#FF8080";
            addAlert(4, 'https://zamger.etf.unsa.ba/images/16x16/brisanje.png', 'Nije dozvoljen HTML kod!');
            commentTextArea.focus();
        }
    } else {
        addAlert(4, 'https://zamger.etf.unsa.ba/images/16x16/brisanje.png', 'Morate ispuniti ovo polje');
        commentTextArea.style.backgroundColor = "white";
    }
    checkValidity();
});