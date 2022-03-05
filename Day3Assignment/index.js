var number = Math.random() * 20;
number = Math.floor(number);
var inumber = document.getElementById('inumber')
var button = document.getElementById('button');
var score = 20;
document.getElementById('score').innerHTML = ("Score: "+ score);
function fscore(){
    score = score -1
    document.getElementById('score').innerHTML = ("Score: "+ score)
    if(score<=0){
        document.getElementById('score').innerHTML = ("Score: "+ 0)
    }
}
var hscore = 0
function fchecknumber() {
    var checking = inumber.value;
    if(number == checking){
        document.getElementById('h2').innerHTML = 'Hurray!! You WOn!!'
        if(hscore<score){
            hscore = score
            document.getElementById('highscore').innerHTML = ("HighScore: "+ score)
        }
    }
    else if(number>checking){
        fscore()
        document.getElementById('h2').innerHTML = 'The number is smaller!!'
    }
    else if(number<checking){
        fscore()
        document.getElementById('h2').innerHTML = 'The number is bigger!!'
    }
}
var restart = document.getElementById('replay');
function frestart(){
    score = 20;
    document.getElementById('score').innerHTML = ("Score: "+ score)
    document.getElementById('h2').innerHTML = 'Start Guessing...'
    number = Math.random() * 20;
    number = Math.floor(number);
}
restart.onclick = frestart;
button.onclick = fchecknumber;