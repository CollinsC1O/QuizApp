const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const quiz_box = document.querySelector(".quiz_box");
const exit_btn = document.querySelector(".buttons .quit");
const continue_btn = document.querySelector(".buttons .restart");

//the start quiz button click to start
start_btn.onclick = () => {
    info_box.classList.add("activeInfo") //displays the info box
}

//Exit button clicked to exit quiz and return back to the start button
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo") //hides the info box
}