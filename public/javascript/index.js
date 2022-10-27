const sharkbtn = document.querySelector('#start');

sharkbtn.addEventListener('click', function () {
    sharkbtn.classList.add("animate__animated", "animate__hinge");
    let tID = setTimeout(function () {
        window.clearTimeout(tID);	
        window.location.assign ("./public/app.html");
        	// clear time out.
    }, 2000);
})