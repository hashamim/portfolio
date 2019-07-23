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

function resumeModal(e) {
    e.preventDefault();
    const container = document.getElementById("resume-container");
    container.classList.remove("resume-container");
    if(container.dataset.ran > 0){
        return;
    }
    if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < 768) {
         container.classList.add("resume-container");
         container.dataset.ran = 1;
        return;
    }
    const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - container.offsetTop;
    document.getElementById("resume").style.height=`${height}px`;
    container.dataset.ran = 1;
    debugger
}