player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+": ";
document.getElementById("player2_name").innerHTML=player2_name+": ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn-"+player1_name;
document.getElementById("player_answer").innerHTML="Answer turn-"+player2_name;

function send() 
    {
    number1= document.getElementById("word1").value;
    number2= document.getElementById("word2").value;
    actual_answer= parseInt(number1)*parseInt(number2);

    question_word="<h4>" + number1 + "X"+  number2 + "</h4>";
    input_box="<br><input type='text' id='answer' class='form-control'>";
    button="<br><button class='btn btn-info' onclick='check();'>Check</button>";
    row=question_word+input_box+button;
    document.getElementById("output").innerHTML=row;
    
    document.getElementById("word1").value="";
    document.getElementById("word2").value="";
}