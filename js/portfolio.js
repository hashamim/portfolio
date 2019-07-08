function copyFunc(e) {
    e.preventDefault();
    const header = document.getElementsByTagName("header")[0];
    var copyText = document.createElement("INPUT");
    // copyText.setAttribute("id", "copyText");
    copyText.setAttribute("value","hashamim@gmail.com")
    // var email = document.createTextNode("hashamim@gmail.com");
    // copyText.appendChild(email);
    header.appendChild(copyText);
    copyText.select();
    document.execCommand("copy");
    header.removeChild(copyText)
    var mailI = document.getElementById("copy-link");
    mailI.setAttribute("aria-label","copied!");
    setTimeout(()=>mailI.setAttribute("aria-label","click to copy email"), 2500)
}