function contactframe() {
    const contactframe = document.getElementById("contactframe");
    if (contactframe.style.display == "none") {
        contactframe.style.display = "block";
        linkcontainer.style.display = "none";
        if (localStorage.getItem("anim_paluss1122") === "none") {
            document.body.classList.add("anim-none");
        } else {
            document.body.classList.remove("anim-none");
        }
    } else {
        contactframe.style.display = "none";
        linkcontainer.style.display = "flex";
        if (localStorage.getItem("particles_paluss1122") == "true") {
            createParticles();
        } else {
            const particles = document.querySelectorAll(".particle");
            particles.forEach((particle) => particle.remove());
        }
        if (localStorage.getItem("anim_paluss1122") === "none") {
            document.body.classList.add("anim-none");
        } else {
            document.body.classList.remove("anim-none");
        }
    }
}

const banner = document.getElementById('cookie-banner');
const acceptBtn = document.getElementById('accept-cookies');

if (!localStorage.getItem('cookieAccepted')) {
    banner.classList.remove('hidden');
}

acceptBtn.addEventListener('click', () => {
    banner.classList.add('hidden');
    localStorage.setItem('cookieAccepted', 'true');
});

function clearls() {
    localStorage.clear();
    window.location.reload();
}

function linktoggle(link) {
    const linkElement = document.getElementById(link);
    if (!linkElement) return;
    if (linkElement.style.display == "none") {
        linkElement.style.display = "block";
    } else {
        linkElement.style.display = "none";
    }
    localStorage.setItem(link, linkElement.style.display);
}

function changemovebg() {
    const body = document.body;

    if (localStorage.getItem("movebg_paluss1122") == "false") {
        body.style.animation = "gradient 15s ease infinite";
        body.style.backgroundSize = "4000px 4000px";
        localStorage.setItem("movebg_paluss1122", "true");
    } else {
        body.style.animation = "none";
        body.style.backgroundSize = "cover";
        localStorage.setItem("movebg_paluss1122", "false");
    }
}

function changeparticles() {
    const particles = document.querySelectorAll(".particle");
    localStorage.setItem(
        "particles_paluss1122",
        document.getElementById("particletoggle").checked
    );
}

const linkcontainer = document.getElementById("link-container");

function usernameframe() {
    const usernameframe = document.getElementById("userdatachangeframe");
    if (usernameframe.style.display == "none") {
        usernameframe.style.display = "block";
    } else {
        usernameframe.style.display = "none";
    }
}

function changeuserdata(option) {
    let newvalue = document.getElementById("newuserpassword").value;
    if (option == "password") {
        newvalue = document.getElementById("newuserpassword").value;
    } else if (option == "username") {
        newvalue = document.getElementById("newusername").value;
    }
    emailjs.send("service_lvesrfx", "template_0n2i6mk", {
        user: localStorage.getItem("loggedInUser_Paluss1122_sdb"),
        option: option,
        new: newvalue,
    });
    if (option == "password") {
        alert(
            "Sobald dein Password geändert wurde, bekommst du eine WhatsApp Nachricht!"
        );
    } else if (option == "username") {
        alert(
            "Sobald dein Nutzername geändert wurde, bekommst du eine WhatsApp Nachricht!"
        );
    }
}

function changetutorials() {
    if (localStorage.getItem("tuts_paluss1122") == "none") {
        localStorage.setItem("tuts_paluss1122", "true");
    } else {
        localStorage.setItem("tuts_paluss1122", "none");
    }
}

function changeanimations() {
    console.log(localStorage.getItem("anim_paluss1122"));
    if (localStorage.getItem("anim_paluss1122") == "none") {
        localStorage.setItem("anim_paluss1122", "true");
    } else {
        localStorage.setItem("anim_paluss1122", "none");
    }
}

function changebg(color) {
    const body = document.body;

    // Alle verfügbaren Buttons und ihre zugehörigen Farben
    const buttons = [
        { id: "blackbg", gradient: "linear-gradient(-45deg, black, gray" },
        { id: "bluebg", gradient: "linear-gradient(-45deg, blue, red)" },
        { id: "greenbg", gradient: "linear-gradient(-45deg, green, yellow)" },
        { id: "redbg", gradient: "linear-gradient(-45deg, red, orange)" },
        { id: "lilabg", gradient: "linear-gradient(-45deg, purple, blue)" },
        { id: "bluegreenbg", gradient: "linear-gradient(-45deg, blue, green)" },
        { id: "greenredbg", gradient: "linear-gradient(-45deg, green, red)" },
    ];

    // Finde den Button, der zur ausgewählten Farbe gehört
    const selectedButton = buttons.find((button) =>
        button.id.includes(color)
    );

    if (selectedButton) {
        // Setze den Hintergrund des Body-Elements
        body.style.background = selectedButton.gradient;
        if (localStorage.getItem("movebg_paluss1122") == "false") {
            body.style.animation = "none";
            body.style.backgroundSize = "cover";
        } else {
            body.style.backgroundSize = "4000px 4000px";
        }

        // Aktualisiere die Klassen aller Buttons
        buttons.forEach((button) => {
            const element = document.getElementById(button.id);
            if (element) {
                if (button.id === selectedButton.id) {
                    element.classList.add("selected");
                    element.classList.remove("notselected");
                } else {
                    element.classList.remove("selected");
                    element.classList.add("notselected");
                }
            }
        });

        // Speichere die ausgewählte Farbe in localStorage
        localStorage.setItem("backgroundcolor", color);
    }
}

function settings() {
    const settingsframe = document.getElementById("settingsframe");
    if (settingsframe.style.display == "none") {
        settingsframe.style.display = "block";
        linkcontainer.style.display = "none";
        if (localStorage.getItem("anim_paluss1122") === "none") {
            document.body.classList.add("anim-none");
        } else {
            document.body.classList.remove("anim-none");
        }
    } else {
        settingsframe.style.display = "none";
        linkcontainer.style.display = "flex";
        if (localStorage.getItem("particles_paluss1122") == "true") {
            createParticles();
        } else {
            const particles = document.querySelectorAll(".particle");
            particles.forEach((particle) => particle.remove());
        }
        if (localStorage.getItem("anim_paluss1122") === "none") {
            document.body.classList.add("anim-none");
        } else {
            document.body.classList.remove("anim-none");
        }
    }
}

function createParticles() {
    const container = document.querySelector(".container");
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";
        // Negative animation-delay, damit die Animation sofort startet
        particle.style.animationDelay = -Math.random() * 15 + "s";
        container.appendChild(particle);
    }
}

function showeye() {
    const eye = document.getElementById("eye");
    eye.style.display = "block";
}

function admin() {
    localStorage.clear();
}

const shopframe = document.getElementById("shopframe");

function shop() {
    if (shopframe.style.display == "none") {
        shopframe.style.display = "block";
    } else {
        shopframe.style.display = "none";
    }
}

function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

let users = [{
    "username": "Paluss1122",
    "password": "mathe",
    "is7c": true,
    "boughtEnglish": true,
    "boughtMaths": true,
    "boughtGerman": true,
    "boughtlatin": true
},
{
    "username": "flau11",
    "password": "flau=cool!",
    "is7c": true,
    "boughtEnglish": true,
    "boughtMaths": true,
    "boughtGerman": true,
    "boughtlatin": false
},
{
    "username": "hoffiman13",
    "password": "hoff=mann!",
    "is7c": true,
    "boughtEnglish": true,
    "boughtMaths": true,
    "boughtGerman": true,
    "boughtlatin": false
},
{
    "username": "Kricy13",
    "password": "krise!",
    "is7c": true,
    "boughtEnglish": true,
    "boughtMaths": true,
    "boughtGerman": true,
    "boughtlatin": true
},
{
    "username": "Ludi1",
    "password": "ichmagreli!",
    "is7c": false,
    "boughtEnglish": true,
    "boughtMaths": true,
    "boughtGerman": true,
    "boughtlatin": true
},
{
    "username": "Ferdinand2",
    "password": "ichmaglatein!",
    "is7c": false,
    "boughtEnglish": true,
    "boughtMaths": true,
    "boughtGerman": false,
    "boughtlatin": true
},
{
    "username": "Ali13",
    "password": "ichmagfranzösisch!",
    "is7c": false,
    "boughtEnglish": true,
    "boughtMaths": true,
    "boughtGerman": false,
    "boughtlatin": false
},
{
    "username": "Lorenz13",
    "password": "ichliebefranzösisch!",
    "is7c": true,
    "boughtEnglish": true,
    "boughtMaths": true,
    "boughtGerman": true,
    "boughtlatin": false
},
{
    "username": "Vabi19",
    "password": "Fußball=cool!",
    "is7c": true,
    "boughtEnglish": true,
    "boughtMaths": true,
    "boughtGerman": false,
    "boughtlatin": false
},
{
    "username": "Johanna13",
    "password": "Latein=uncool!",
    "is7c": true,
    "boughtEnglish": true,
    "boughtMaths": true,
    "boughtGerman": true,
    "boughtlatin": true
},
{
    "username": "Magdalena25",
    "password": "Latein=uncool!",
    "is7c": true,
    "boughtEnglish": true,
    "boughtMaths": true,
    "boughtGerman": true,
    "boughtlatin": true
},
{
    "username": "Nicole25",
    "password": "Französisch=cool!",
    "is7c": true,
    "boughtEnglish": true,
    "boughtMaths": true,
    "boughtGerman": true,
    "boughtlatin": false
},
{
    "username": "David12",
    "password": "französisch=uncool!",
    "is7c": true,
    "boughtEnglish": true,
    "boughtMaths": true,
    "boughtGerman": true,
    "boughtlatin": false
},
{
    "username": "Fenti12",
    "password": "französisch=uncool!",
    "is7c": true,
    "boughtEnglish": true,
    "boughtMaths": true,
    "boughtGerman": true,
    "boughtlatin": false
},
{
    "username": "Saum25",
    "password": "Samuel24",
    "is7c": true,
    "boughtEnglish": true,
    "boughtMaths": true,
    "boughtGerman": true,
    "boughtlatin": false
},
{
    "username": "Konsti13",
    "password": "Fußball=cool",
    "is7c": true,
    "boughtEnglish": true,
    "boughtMaths": true,
    "boughtGerman": false,
    "boughtlatin": false
},
{
    "username": "Minos13",
    "password": "französisch=cool!",
    "is7c": false,
    "boughtEnglish": true,
    "boughtMaths": true,
    "boughtGerman": false,
    "boughtlatin": false
},
{
    "username": "Jannik12",
    "password": "latein=cool!",
    "is7c": false,
    "boughtEnglish": true,
    "boughtMaths": true,
    "boughtGerman": false,
    "boughtlatin": true
},
{
    "username": "Nina13",
    "password": "handball=cool!",
    "is7c": true,
    "boughtEnglish": true,
    "boughtMaths": true,
    "boughtGerman": true,
    "boughtlatin": false
},
{
    "username": "Emilia13",
    "password": "Bremser=bester!",
    "is7c": true,
    "boughtEnglish": true,
    "boughtMaths": true,
    "boughtGerman": true,
    "boughtlatin": false
},
{
    "username": "Hanna13",
    "password": "Geo=super!",
    "is7c": true,
    "boughtEnglish": true,
    "boughtMaths": true,
    "boughtGerman": true,
    "boughtlatin": true
},
{
    "username": "Hannah13",
    "password": "Französisch=super!",
    "is7c": true,
    "boughtEnglish": true,
    "boughtMaths": true,
    "boughtGerman": true,
    "boughtlatin": false
}];

const mathsshop = document.getElementById("mathsshop");
const englishshop = document.getElementById("englishshop");
const germanshop = document.getElementById("germanshop");
const allbuyed = document.getElementById("allbuyed");

function updateshop(user) {
    if (user.boughtEnglish && englishshop) {
        englishshop.remove();
    }

    if (user.boughtMaths && mathsshop) {
        mathsshop.remove();
    }

    if (user.boughtGerman && germanshop) {
        germanshop.remove();
    }

    if (user.boughtEnglish && user.boughtMaths && user.boughtGerman) {
        allbuyed.style.display = "block";
    }
}

const loginContainer = document.getElementById("login-container");
const dashboard = document.querySelector(".dashboard");
const usname = document.getElementById("usname");
const accessinfo = document.getElementById("access-info");
const english = document.getElementById("english");
const homeworks = document.getElementById("homeworks");
const maths = document.getElementById("maths");
const abmelden = document.getElementById("abmelden");
const openuserdatachangeframe = document.getElementById(
    "openuserdatachangeframe"
);
const starterimg = document.getElementById("starterimg");
const shopbt = document.getElementById("shopbt");

function updateButtons(user) {
    usname.textContent = user.username;

    const is7c = user.is7c;

    const elementIds = {
        "access-all": is7c && user.boughtEnglish,
        "access-others": !is7c && user.boughtEnglish,
        "access-homework-english": is7c && user.boughtEnglish,
        "access-homework-maths": is7c && user.boughtMaths,
        "access-homework-german": is7c && user.boughtGerman,
        english: user.boughtEnglish,
        maths: user.boughtMaths,
        german: user.boughtGerman,
        "access-all-maths": is7c && user.boughtMaths,
        "access-others-maths": !is7c && user.boughtMaths,
        "access-german": is7c && user.boughtGerman,
        "access-german-others": !is7c && user.boughtGerman,
        homeworks:
            is7c &&
            (user.boughtEnglish || user.boughtMaths || user.boughtGerman),
        "access-latin": user.boughtlatin,
        "vocabularies": user.boughtlatin,
        "english-setting": user.boughtEnglish,
        "maths-setting": user.boughtMaths,
        "german-setting": user.boughtGerman,
        "latin-setting": user.boughtlatin,
    };

    let delay = 0.1;
    for (const [id, shouldShow] of Object.entries(elementIds)) {
        const element = document.getElementById(id);
        if (element) {
            if (shouldShow) {
                element.style.display = "block";
                if (element.classList.contains('offer')) {
                    element.style.display = "flex";
                }
                element.style.animationDelay = `${delay}s`;
                if (element.querySelector("::after")) {
                    element.querySelector(
                        "::after"
                    ).style.animationDelay = `${delay}s`;
                }
                delay += 0.1;
            } else {
                element.remove();
            }
        }
    }
}

// Funktion, um den Benutzer anzumelden
function login(username, password) {
    const user = users.find(
        (u) => u.username === username && u.password === password
    );
    if (user) {
        localStorage.setItem(
            "loggedInUser_Paluss1122_sdb",
            JSON.stringify(user)
        ); // Speichere Benutzer in localStorage
        return user;
    }
    return null;
}

// Funktion, um den Benutzer abzumelden
function logout() {
    localStorage.removeItem("loggedInUser_Paluss1122_sdb");
    if (localStorage.getItem("anim_paluss1122") === "none") {
        // Korrekte Überprüfung
        location.reload(); // Seite neu laden
    } else {
        const black = document.getElementById("black");
        black.style.display = "block";
        black.animate(
            {
                opacity: 1,
            },
            {
                duration: 2000,
                easing: "ease-in-out",
                fill: "forwards",
            }
        );
        setTimeout(() => {
            location.reload(); // Seite neu laden
        }, 3000);
    }
    localStorage.clear();
}

// Event-Listener für das Login-Formular
document
    .getElementById("login-form")
    .addEventListener("submit", function (e) {
        e.preventDefault();
        document.getElementById("password").type = "password";
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const user = login(username, password);
        if (user) {
            checkLogin();
        } else {
            alert("Ungültiger Benutzername oder Passwort.");
        }
    });

// Überprüfe den Login-Status beim Laden der Seite
checkLogin();

function tut(text) {
    const shopbt = document.getElementById("shopbt");
    const closebt = document.getElementById("closebtshop");
    const element = document.getElementById("tut");
    const bg = document.getElementById("bg");
    let typingTimeout = null;
    let index = 0;
    const delay = 50;

    function type() {
        if (index < text.length) {
            if (text[index] === "\n") {
                element.innerHTML += "<br>";
            } else {
                element.innerHTML += text[index];
            }
            element.style.textAlign = "center";
            element.style.alignContent = "center";
            index++;
            typingTimeout = setTimeout(type, delay);
        }
    }

    if (typingTimeout !== null) {
        clearTimeout(typingTimeout);
    }

    element.innerHTML = "";
    type();

    if (shopbt) {
        shopbt.onclick = () => {
            shop();
            clearTimeout(typingTimeout);
            tut(
                `Hier siehst du deine noch nicht gekauften Angebote! Wenn du alles gekauft hast, wird hier nichts mehr angezeigt. \nKlicke auf den Schließen Button, um fortzufahren!`
            );
            setTimeout(() => {
                blinkclose();
            }, 7000);
        };
    }

    if (closebt) {
        closebt.onclick = () => {
            shop();
            clearTimeout(typingTimeout);
            shopbt.style.zIndex = "0";
            tut(
                `Hier siehst du deine gekauften Lösungen! Wenn du in der 7C bist, bekommst du zu der aktuellen Hausaufgabe die Lösung! Klicke hier, um die Einführung zu beenden!`
            );
            setTimeout(() => {
                element.onclick = () => {
                    clearTimeout(typingTimeout);
                    element.innerHTML = "";
                    element.style.display = "none";
                    if (bg) {
                        bg.style.display = "none";
                    }
                    localStorage.setItem("tut_Paluss1122_sdb", "true");
                };
            }, 8000);
        };
    }
}

function blinkclose() {
    const shopbt = document.getElementById("closebtshop");
    let isScaledUp = false;

    let intervalId = setInterval(() => {
        if (shopframe.style.display === "none" && shopbt) {
            shopbt.style.transform = "scale(1)";
            console.log("stopped!");
            clearInterval(intervalId); // Stop the interval when the shop frame is displayed
            return; // Stoppe die Animation, wenn das Shop-Frame geöffnet ist
        }

        // Ändere die Skalierung basierend auf dem aktuellen Zustand
        if (!isScaledUp) {
            shopbt.style.transform = "scale(1.2) translate(-50%)";
        } else {
            shopbt.style.transform = "scale(1) translate(-50%)";
        }

        // Umschalten des Skalierungszustands
        isScaledUp = !isScaledUp;
    }, 1000); // Alle 5 Sekunden wechseln
}

function blinkShop() {
    const shopbt = document.getElementById("shopbt");
    let isScaledUp = false;

    // Stelle sicher, dass das Tutorial-Element existiert und sichtbar ist
    const tutElement = document.getElementById("tut");
    if (tutElement) {
        tutElement.style.display = "block";
        tut(
            `Nun gibt es den Shop! Dieser ermöglicht es dir, neue Angebote zu entdecken!\nKlicke auf den Shop Button, um fortzufahren!`
        );
    }

    setTimeout(() => {
        let intervalId = setInterval(() => {
            if (!shopbt || shopframe.style.display === "block") {
                if (shopbt) shopbt.style.transform = "scale(1)";
                clearInterval(intervalId);
                return;
            }

            shopbt.style.transform = isScaledUp ? "scale(1)" : "scale(1.2)";
            isScaledUp = !isScaledUp;
        }, 1000);

        if (shopbt) {
            shopbt.addEventListener("click", () => {
                clearInterval(intervalId);
                shopbt.style.transform = "scale(1)";
            });
        }
    }, 500);
}

// Überprüfe, ob der Benutzer angemeldet ist
async function checkLogin() {
    const loggedInUser = localStorage.getItem(
        "loggedInUser_Paluss1122_sdb"
    );
    const tutElement = document.getElementById("tut");
    const bgElement = document.getElementById("bg");
    const dashboard = document.querySelector(".dashboard");

    // Zuerst alle UI-Elemente zurücksetzen
    if (tutElement) tutElement.style.display = "none";
    if (bgElement) bgElement.style.display = "none";
    if (dashboard) dashboard.style.display = "none";
    loginContainer.style.display = "none";
    shopbt.style.display = "none";
    document.getElementById('contact').style.display = "none";
    abmelden.style.display = "none";
    openuserdatachangeframe.style.display = "none";
    starterimg.style.display = "block";

    if (!localStorage.getItem("anim_paluss1122")) {
        localStorage.setItem("anim_paluss1122", "true");
    }

    if (loggedInUser) {
        const user = JSON.parse(loggedInUser);
        const updatedUser = users.find((u) => u.username === user.username);

        if (updatedUser) {
            localStorage.setItem(
                "loggedInUser_Paluss1122_sdb",
                JSON.stringify(updatedUser)
            );
        } else {
            logout();
        }

        updateshop(updatedUser || user);
        updateButtons(updatedUser || user);

        // UI für eingeloggte Benutzer anzeigen
        dashboard.style.display = "block";
        shopbt.style.display = "block";
        document.getElementById('contact').style.display = "block";
        abmelden.style.display = "block";
        openuserdatachangeframe.style.display = "block";
        starterimg.style.display = "none";

        if (
            localStorage.getItem("device-infos") &&
            localStorage.getItem("device-infos-text")
        ) {
            const deviceinfos = document.getElementById("device-infos");
            const deviceinfosText =
                document.getElementById("device-infos-text");
            deviceinfos.style.display = localStorage.getItem("device-infos");
            deviceinfosText.style.display =
                localStorage.getItem("device-infos-text");
        }

        if (
            localStorage.getItem("games-website") &&
            localStorage.getItem("games-website-text")
        ) {
            const gameswebsite = document.getElementById("games-website");
            const gameswebsiteText =
                document.getElementById("games-website-text");
            gameswebsite.style.display = localStorage.getItem("games-website");
            gameswebsiteText.style.display =
                localStorage.getItem("games-website-text");
        }

        if (
            localStorage.getItem("access-info") &&
            localStorage.getItem("info-text")
        ) {
            const infoText = document.getElementById("info-text");
            accessinfo.style.display = localStorage.getItem("access-info");
            infoText.style.display = localStorage.getItem("info-text");
        }

        if (
            (localStorage.getItem("access-all") &&
                localStorage.getItem("english")) ||
            (localStorage.getItem("access-others") &&
                localStorage.getItem("english"))
        ) {
            const englishText1 = document.getElementById("access-all");
            const englishText2 = document.getElementById("access-others");
            const english = document.getElementById("english");
            if (englishText1) {
                englishText1.style.display = localStorage.getItem("access-all");
            }
            if (englishText2) {
                englishText2.style.display =
                    localStorage.getItem("access-others");
            }
            english.style.display = localStorage.getItem("english");
        }

        if (
            (localStorage.getItem("access-all-maths") &&
                localStorage.getItem("maths")) ||
            (localStorage.getItem("access-others-maths") &&
                localStorage.getItem("maths"))
        ) {
            const mathsText1 = document.getElementById("access-all-maths");
            const mathsText2 = document.getElementById("access-others-maths");
            const maths = document.getElementById("maths");
            if (mathsText1) {
                mathsText1.style.display =
                    localStorage.getItem("access-all-maths");
            }
            if (mathsText2) {
                mathsText2.style.display = localStorage.getItem(
                    "access-others-maths"
                );
            }
            maths.style.display = localStorage.getItem("maths");
        }

        if (
            (localStorage.getItem("access-german") &&
                localStorage.getItem("german")) ||
            (localStorage.getItem("access-german-others") &&
                localStorage.getItem("german"))
        ) {
            const germanText1 = document.getElementById("access-german");
            const germanText2 = document.getElementById("access-german-others");
            const german = document.getElementById("german");
            if (germanText1) {
                germanText1.style.display = localStorage.getItem("access-german");
            }
            if (germanText2) {
                germanText2.style.display = localStorage.getItem(
                    "access-german-others"
                );
            }
            german.style.display = localStorage.getItem("german");
        }

        if (localStorage.getItem("access-latin")) {
            const latin = document.getElementById("access-latin");
            const vocabularies = document.getElementById("vocabularies");
            latin.style.display = localStorage.getItem("access-latin");
            vocabularies.style.display = localStorage.getItem("vocabularies");
        }

        if (localStorage.getItem("transparentdashboard_paluss1122")) {
            if (localStorage.getItem("transparentdashboard_paluss1122") === "false") {
                document.getElementsByClassName("dashboard")[0].style.opacity = "1";
            } else {
                document.getElementsByClassName("dashboard")[0].style.opacity = "0.3";
            }
        }

        if (localStorage.getItem("anim_paluss1122") === "none") {
            document.body.classList.add("anim-none");
        } else {
            document.body.classList.remove("anim-none");
        }

        // Tutorial-Logik
        const showShopTutorial = !localStorage.getItem("tut_Paluss1122_sdb");

        if (localStorage.getItem("tuts_Paluss1122") === "true") {
            if (showShopTutorial && tutElement && bgElement) {
                tutElement.style.display = "block";
                bgElement.style.display = "block";
                setTimeout(() => {
                    blinkShop();
                }, 500); // Kleine Verzögerung für bessere Initialisierung
            } else {
                // Entferne Tutorial-Elemente wenn nicht benötigt
                if (tutElement) tutElement.remove();
                if (bgElement) bgElement.remove();
            }
        }
    } else {
        if (localStorage.getItem("anim_paluss1122") === "none") {
            black.style.display = "none";
        } else {
            const black = document.getElementById("black");
            black.style.display = "block";
            black.style.opacity = "1";
            black.animate(
                {
                    opacity: 0,
                },
                {
                    duration: 2000,
                    easing: "ease-in-out",
                    fill: "forwards",
                }
            );
            setTimeout(() => {
                black.style.display = "none";
                black.style.opacity = "1";
            }, 1800);
        }
        // UI für nicht eingeloggte Benutzer
        loginContainer.style.display = "block";

        // Entferne Tutorial-Elemente
        if (tutElement) tutElement.remove();
        if (bgElement) bgElement.remove();
    }
}

// Ersetze in setCustomBgFromStorage():
function setCustomBgFromStorage() {
    const bgData = localStorage.getItem("customBgImage");
    const bgPreview = document.getElementById("bgimagepref");
    if (bgData) {
        document.body.style.background = `url(${bgData}) no-repeat center center fixed`;
        document.body.style.animation = "none";
        document.body.style.backgroundSize = "100% 100%";
        document.getElementById("removeBgBtn").style.display = "inline-block";
        if (bgPreview) {
            bgPreview.src = bgData;
            bgPreview.style.display = "block";
            bgPreview.style.maxWidth = "300px";
            bgPreview.style.maxHeight = "200px";
            bgPreview.style.margin = "10px auto";
            bgPreview.style.borderRadius = "10px";
        }
        document.getElementById("bgUpload").style.display = "none";
    } else {
        document.getElementById("removeBgBtn").style.display = "none";
        if (bgPreview) {
            bgPreview.src = "";
            bgPreview.style.display = "none";
        }
        document.getElementById("bgUpload").style.display = "inline-block";
    }
}

function transparentdashboard() {
    if (document.getElementsByClassName("dashboard")[0].style.opacity === "0.3") {
        document.getElementsByClassName("dashboard")[0].style.opacity = "1";
        localStorage.setItem("transparentdashboard_paluss1122", "false");
    } else {
        document.getElementsByClassName("dashboard")[0].style.opacity = "0.3";
        localStorage.setItem("transparentdashboard_paluss1122", "true");
    }
}

// Bild-Upload-Handler
document.getElementById("bgUpload").addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (evt) {
        localStorage.setItem("customBgImage", evt.target.result);
        setCustomBgFromStorage();
    };
    reader.readAsDataURL(file);
});

function removeCustomBg() {
    localStorage.removeItem("customBgImage");
    const backgroundcolorls = localStorage.getItem("backgroundcolor");
    changebg(backgroundcolorls);
    document.body.style.animation = "gradient 15s ease infinite";
    document.body.style.backgroundSize = "400% 400%";
    document.getElementById("removeBgBtn").style.display = "none";
    document.getElementById("bgimagepref").src = " ";
    document.getElementById("bgUpload").style.display = "inline-block";
}