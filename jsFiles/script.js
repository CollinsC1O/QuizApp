const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const quiz_box = document.querySelector(".quiz_box");
const exit_btn = document.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");

//the start quiz button click to start
start_btn.onclick = () => {
    info_box.classList.add("activeInfo") //displays the info box
}

//Exit button clicked to exit quiz and return back to the start button
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo") //hides the info box
}

//continue button click to continue to the quiz box
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo") //hides the info box
    quiz_box.classList.add("activeQuiz") //display quiz box
    showQuestions(6);
}

let que_count = 0;

//getting question and option from array
function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    let que_tag = '<span>'+ questions[index].question +'</span>'
    let option_tag = '<div class="option">' + questions[index].option[0] + '<span></span></div>'
                     + '<div class="option"><span></span></div>'
                     + '<div class="option"><span></span></div>'
                     + '<div class="option"><span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
}