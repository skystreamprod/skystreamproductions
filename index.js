snakeHeadPos = ["11", "02"];
snakePos = ["11", "01", "11", "02"];
length = 300;
richting = 3;
stop = true;
inputGiven = 0;
eerstekeer = true;

document.addEventListener('keydown', function(event) {
    if (inputGiven == 0){
        if (event.key == "a" && richting != 3 || event.key == "A" && richting != 3) {richting = 0;}
        if (event.key == "s" && richting != 2 || event.key == "S" && richting != 2) {richting = 1;}
        if (event.key == "w" && richting != 1 || event.key == "W" && richting != 1) {richting = 2;}
        if (event.key == "d" && richting != 0 || event.key == "D" && richting != 0) {richting = 3;}
        inputGiven = 1;
    }
});

function start() {
    spauwnApple();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//spauwn appel
function spauwnApple() {
    appleYPos = getRandomInt(19) + 1;
    appleXPos = getRandomInt(19) + 1;
    if (appleYPos < 10) {
        appleYPos = "0" + appleYPos;
    }
    if (appleXPos < 10) {
        appleXPos = "0" + appleXPos;
    }
    appleYPos = appleYPos.toString();
    appleXPos = appleXPos.toString();

    colCheck = snakePos.length / 2;
    for (let i = 0; i < colCheck; i++) {
        segmentY = snakePos[i * 2];
        segmentX = snakePos[i * 2 + 1];
        if (appleXPos === segmentX && appleYPos === segmentY) {
            spauwnApple();
        } else if (snakeHeadPos[0] === appleXPos && snakeHeadPos[1] === appleYPos) {
            spauwnApple();
        }
    }

    document.getElementById(appleYPos + appleXPos).setAttribute("class", "apple");
    if (eerstekeer == true) {
        eerstekeer = false;
        stapje();
    }
}

function stapje() {
    //check voor appel
    if (snakeHeadPos[0] === appleYPos && snakeHeadPos[1] === appleXPos) {
        length++;
        spauwnApple();
    }

    //bereken volgende stap
    //rechts
    if (richting ==3) {
        snakeHeadPos[1] = Number(snakeHeadPos[1]) + 1;
        if (snakeHeadPos[1] < 10) {
            snakeHeadPos[1] = "0" + snakeHeadPos[1];
        }
        snakeHeadPos[1] = snakeHeadPos[1].toString()
    }
    //links
    if (richting ==0) {
        snakeHeadPos[1] = Number(snakeHeadPos[1]) - 1;
        if (snakeHeadPos[1] < 10) {
            snakeHeadPos[1] = "0" + snakeHeadPos[1];
        }
        snakeHeadPos[1] = snakeHeadPos[1].toString()
    }
    //omhoog
    if (richting ==2) {
        snakeHeadPos[0] = Number(snakeHeadPos[0]) - 1;
        if (snakeHeadPos[0] < 10) {
            snakeHeadPos[0] = "0" + snakeHeadPos[0];
        }
        snakeHeadPos[0] = snakeHeadPos[0].toString()
    }
    //omlaag
    if (richting ==1) {
        snakeHeadPos[0] = Number(snakeHeadPos[0]) + 1;
        if (snakeHeadPos[0] < 10) {
            snakeHeadPos[0] = "0" + snakeHeadPos[0];
        }
        snakeHeadPos[0] = snakeHeadPos[0].toString()
    }
    inputGiven = 0;
    //check voor muur
    if (snakeHeadPos[0] > 20 || snakeHeadPos[1] < 1 || snakeHeadPos[1] > 20 || snakeHeadPos[0] < 1) {
        stop = false;
        setTimeout(reset, 2000);
    }

    //check voor botsing
    colCheck = snakePos.length / 2;
    for (let i = 0; i < colCheck; i++) {
        const segmentX = snakePos[i * 2];
        const segmentY = snakePos[i * 2 + 1];
        if (snakeHeadPos[0] === segmentX && snakeHeadPos[1] === segmentY) {
            stop = false;
            setTimeout(reset, 2000);
        }
    }

    //beweeg
    if (stop == true) {
        snakePos.push(snakeHeadPos[0], snakeHeadPos[1]);
        if (length ==  snakePos.length/2) {
        document.getElementById(snakePos[0] + snakePos[1]).setAttribute("class", "");
        snakePos = snakePos.slice(2);
    }
        document.getElementById(snakeHeadPos[0] + snakeHeadPos[1]).setAttribute("class", "on"); 
        setTimeout(stapje, 300);
    }
}   

function reset() {
    while (snakePos.length > 0){
        document.getElementById(snakePos[0] + snakePos[1]).setAttribute("class", "");
        snakePos = snakePos.slice(2);
    }
    document.getElementById(appleYPos + appleXPos).setAttribute("class", "");
    snakeHeadPos = ["11", "02"];
    snakePos = ["11", "01", "11", "02"];
    length = 4;
    richting = 3;
    stop = true;
    eerstekeer = true;
    spauwnApple();
}