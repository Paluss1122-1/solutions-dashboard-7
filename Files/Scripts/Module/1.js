import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBW0WzA9IJoEZ2GuTBMaUoWpOQildKfohU",
    authDomain: "solutions-dashboard-7-1f6e4.firebaseapp.com",
    projectId: "solutions-dashboard-7-1f6e4",
};

let started = false;

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const docRef = doc(db, "Hausaufgaben", "general");

async function updatehomework() {
    try {
        const snap = await getDoc(docRef);
        if (snap.exists()) {
            const data = await snap.data();
            return data;
        } else {
            await addDoc(collection(db, "Fehlerberichte"), {
                typ: "Dokument nicht gefunden",
                ort: "Hausaufgaben/hausaufgaben",
                zeit: serverTimestamp(),
                userAgent: navigator.userAgent
            });
        }
    } catch (err) {
        homeworkElem.innerText = "Fehler beim Laden";
        console.error(err);

        await addDoc(collection(db, "Fehlerberichte"), {
            typ: "Technischer Fehler",
            fehler: err.message,
            stacktrace: err.stack || null,
            zeit: serverTimestamp(),
            userAgent: navigator.userAgent
        });
    }
}

async function update() {
    updatehomework().then(data => {
        if (data) {
            const loggedInUser = localStorage.getItem("loggedInUser_Paluss1122_sdb");
            let showMaintenance = false;
            const active = data.Wartungsarbeiten

            if (loggedInUser) {
                try {
                    const user = JSON.parse(loggedInUser);
                    if (user.username === "Paluss1122" && active) {
                        showMaintenance = true;
                    }
                } catch (e) {
                    console.error("Fehler beim Parsen des Benutzers:", e);
                }
            } else {
                showMaintenance = active;
            }

            document.getElementById("maintenance-frame").style.display = showMaintenance ? "flex" : "none";
            document.getElementById("time-ws").innerText = data.WartungsarbeitenZeit;
            document.getElementById("why-ws").innerText = data.Grund;
            document.title = active ? `Wartungsarbeiten (bis ${data.WartungsarbeitenZeit})` : "Dashboard";
            if (!started == true) {
                document.getElementById('version').textContent = data.Version;
            }

            started = true
        }
    });
}

window.onload = function () {
    if (!window.location.href.startsWith("http://127.0.0.1") && !window.location.href.startsWith("https://127.0.0.1")) {
        // Direkt mit addDoc die Daten speichern
        addDoc(collection(db, 'analytics'), {
            browser: getBrowserName(),
            device: navigator.platform,
            zeit: new Date().toISOString(),
            link: window.location.href
        }).then((docRef) => {
            console.log('Dokument gespeichert mit ID: ', docRef.id);
        }).catch((error) => {
            console.error('Fehler beim Speichern: ', error);
        });
    }
    if (localStorage.getItem("particles_paluss1122") === "true") {
        createParticles();
    } else if (!localStorage.getItem("particles_paluss1122")) {
        createParticles();
    }

    const backgroundcolorls = localStorage.getItem("backgroundcolor");
    changebg(backgroundcolorls);
    setCustomBgFromStorage();

    // Setze den Zustand der Checkbox basierend auf localStorage
    const animationToggle = document.getElementById("animationToggle");
    const animState = localStorage.getItem("anim_paluss1122");
    if (animState === "none") {
        animationToggle.checked = false; // Checkbox deaktiviert
    } else {
        animationToggle.checked = true; // Checkbox aktiviert
    }

    const animationToggle2 = document.getElementById("animationToggle2");
    const tutsState = localStorage.getItem("tuts_paluss1122");
    if (tutsState === "none") {
        animationToggle2.checked = false; // Checkbox deaktiviert
    } else {
        animationToggle2.checked = true; // Checkbox aktiviert
    }

    const animationToggle3 = document.getElementById("particletoggle");
    const particleState = localStorage.getItem("particles_paluss1122");
    if (particleState === "false") {
        animationToggle3.checked = false; // Checkbox deaktiviert
    } else {
        animationToggle3.checked = true; // Checkbox aktiviert
    }

    const animationToggle4 = document.getElementById("movebgtoggle");
    const movebgState = localStorage.getItem("movebg_paluss1122");
    if (movebgState === "false") {
        animationToggle4.checked = false; // Checkbox deaktiviert
    } else {
        animationToggle4.checked = true; // Checkbox aktiviert
    }

    const animationToggle5 = document.getElementById(
        "deviceinformationtoggle"
    );
    const deviceState = localStorage.getItem("device-infos");
    if (deviceState === "none") {
        animationToggle5.checked = false; // Checkbox deaktiviert
    } else {
        animationToggle5.checked = true; // Checkbox aktiviert
    }

    const animationToggle6 = document.getElementById("gameswebsitetoggle");
    const gamesState = localStorage.getItem("games-website");
    if (gamesState === "none") {
        animationToggle6.checked = false; // Checkbox deaktiviert
    } else {
        animationToggle6.checked = true; // Checkbox aktiviert
    }

    const animationToggle7 = document.getElementById("infohtmltoggle");
    const infoState = localStorage.getItem("access-info");
    if (infoState === "none") {
        animationToggle7.checked = false; // Checkbox deaktiviert
    } else {
        animationToggle7.checked = true; // Checkbox aktiviert
    }

    const animationToggle8 = document.getElementById("englishworkbooktoggle");
    const animationToggle9 = document.getElementById("mathstoggle");
    const animationToggle10 = document.getElementById("germantoggle");
    const userStr = localStorage.getItem("loggedInUser_Paluss1122_sdb");
    let is7c = false;
    if (userStr) {
        try {
            const userObj = JSON.parse(userStr);
            is7c = userObj.is7c === true;
        } catch (e) {
            is7c = false;
        }
    }

    if (animationToggle8) {
        if (is7c) {
            const accesallState = localStorage.getItem("access-all");
            animationToggle8.checked = accesallState !== "none";
        } else {
            const accesallState = localStorage.getItem("access-others");
            animationToggle8.checked = accesallState !== "none";
        }
    }

    if (animationToggle9) {
        if (is7c) {
            const accesallmathsState = localStorage.getItem("access-all-maths");
            animationToggle9.checked = accesallmathsState !== "none";
        } else {
            const accesallmathsState = localStorage.getItem(
                "access-others-maths"
            );
            animationToggle9.checked = accesallmathsState !== "none";
        }
    }

    if (animationToggle10) {
        if (is7c) {
            const accesgermanState = localStorage.getItem("access-german");
            animationToggle10.checked = accesgermanState !== "none";
        } else {
            const accesgermanState = localStorage.getItem("access-german-others");
            animationToggle10.checked = accesgermanState !== "none";
        }
    }

    const animationToggle11 = document.getElementById("transparenttoggle");
    const transparentdb = localStorage.getItem("transparentdashboard_paluss1122");
    if (transparentdb === "false") {
        animationToggle11.checked = false; // Checkbox deaktiviert
    } else if (!transparentdb) {
        animationToggle11.checked = false; // Checkbox aktiviert
    }
    else {
        animationToggle11.checked = true; // Checkbox aktiviert
    }

    const animationToggle12 = document.getElementById("latintoggle");
    const latinState = localStorage.getItem("access-latin");
    if (animationToggle12) {
        if (latinState === "none") {
            animationToggle12.checked = false; // Checkbox deaktiviert
        } else {
            animationToggle12.checked = true; // Checkbox aktiviert
        }
    }

};

// Hilfsfunktionen für Browser-Erkennung
function getBrowserName() {
    const userAgent = navigator.userAgent;

    if (userAgent.includes('Firefox')) return 'Firefox';
    if (userAgent.includes('Chrome')) return 'Chrome';
    if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) return 'Safari';
    if (userAgent.includes('Edge')) return 'Edge';
    if (userAgent.includes('Opera')) return 'Opera';
    if (userAgent.includes('Trident')) return 'Internet Explorer';

    return 'Unknown';
}

update();
setInterval(update, 5000);