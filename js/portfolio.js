function copyFunc(e) {
    e.preventDefault();
    const body = document.getElementsByTagName("body")[0];
    var copyText = document.createElement("INPUT");
    // copyText.setAttribute("id", "copyText");
    copyText.setAttribute("value","hashamim@gmail.com")
    // var email = document.createTextNode("hashamim@gmail.com");
    // copyText.appendChild(email);
    body.appendChild(copyText);
    copyText.select();
    document.execCommand("copy");
    body.removeChild(copyText)
    var mailI = document.getElementById("copy-link");
    mailI.setAttribute("aria-label","copied");
    setTimeout(()=>mailI.setAttribute("aria-label","click to copy email"), 1000)
}