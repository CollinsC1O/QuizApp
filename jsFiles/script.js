const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const quiz_box = document.querySelector(".quiz_box");
const exit_btn = document.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const option_list = document.querySelector(".option_list");

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
    showQuestions(0);
    queCounter(1);
}

let que_count = 0;
let que_num = 1;

//picking the next button
const next_btn = document.querySelector(".next_que");

//when next button is clicked 
next_btn.onclick = () => {
    if(que_count < questions.length - 1){
        que_count++;
        que_num++;
        showQuestions(que_count);
        queCounter(que_num);
    } else {
        console.log("Question completed");
    }
}
//getting question and option from array
function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    let que_tag = '<span>'+ questions[index].numb + "." + questions[index].question +'</span>'
    let option_tag = '<div class="option">' + questions[index].option[0] + '<span></span></div>'
                     + '<div class="option">' + questions[index].option[1] + '<span></span></div>'
                     + '<div class="option">' + questions[index].option[2] + '<span></span></div>'
                     + '<div class="option">' + questions[index].option[3] + '<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)")
    }
}

function optionSelected(answer){
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    if(userAns == correctAns){
        answer.classList.add("correct");
        console.log("Your Answer is correct"); 
    } else {
        answer.classList.add("incorrect");
        console.log("Your Answer is wrong");  
        
        //if answers is incorrect then automatically select the correct answer answer }
        for (let i = 0; i < allOptions; i++){
            if(option_list.children[i].textContent == correctAns){
                option_list.children[i].seetAttribute("class", "    ")
            }
        }
        
    //once a user select, disable all options
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disable");
    }
}

function queCounter(index){
    const bottom_que_counter = quiz_box.querySelector(".total_que");
    let totalQuesCountTag = '<span><p>'+ index +'</p>of<p>'+ questions.length +'</p>Questions</span>';
    bottom_que_counter.innerHTML = totalQuesCountTag;   
}
}