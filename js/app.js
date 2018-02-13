var volumevalue=0.5;
var selectionposition=1;
var notesbase=["C","D","E","F","G","A","B","Cd","Dd","Fd","Gd","Ad"];
var currentnotes=["C1","D1","E1","F1","G1","A1","B1","Cd1","Dd1","Fd1","Gd1","Ad1"];

function SetVolume(value){
    volumevalue = value / 100;
}

function clickgauche(){
    if(selectionposition==1){
        return false;
    }
    else if(selectionposition==2){
        document.getElementById('selection').setAttribute("x","0");
        for (let index = 0; index < notesbase.length; index++) {
            currentnotes[index]=notesbase[index].concat("1");
        }
        selectionposition=1;
        return false;
    }
    else if(selectionposition==3){
        document.getElementById('selection').setAttribute("x","560");
        for (let index = 0; index < notesbase.length; index++) {
            currentnotes[index]=notesbase[index].concat("2");
        }
        selectionposition=2;
        return false;
    }
    else if(selectionposition==4){
        document.getElementById('selection').setAttribute("x","1120");
        for (let index = 0; index < notesbase.length; index++) {
            currentnotes[index]=notesbase[index].concat("3");
        }
        selectionposition=3;
        return false;
    }
}

function clickdroit(){
    if(selectionposition==4){
        return false;
    }
    else if(selectionposition==3){
        document.getElementById('selection').setAttribute("x","1680");
        for (let index = 0; index < notesbase.length; index++) {
            currentnotes[index]=notesbase[index].concat("4");
        }
        selectionposition=4;
        return false;
    }
    else if(selectionposition==2){
        document.getElementById('selection').setAttribute("x","1120");
        for (let index = 0; index < notesbase.length; index++) {
            currentnotes[index]=notesbase[index].concat("3");
        }
        selectionposition=3;
        return false;
    }
    else if(selectionposition==1){
        document.getElementById('selection').setAttribute("x","560");
        for (let index = 0; index < notesbase.length; index++) {
            currentnotes[index]=notesbase[index].concat("2");
        }
        selectionposition=2;
        return false;
    }
}

function musicmaestro(elem,valuediese) {
    var soundname="../resources/sounds/".concat(elem.id,".mp3");
    var sound = new Howl({
        src: [soundname]
      });
      if(valuediese=='d'){
        document.getElementById(elem.id).setAttribute("fill","#2d2d2d");
      }
      if(valuediese=='nd'){
        document.getElementById(elem.id).setAttribute("fill","#e8e8da");
      }
    Howler.volume(volumevalue);
    sound.play();
}

function changecolor(elem,valuediese)
{
    if(valuediese=='d'){
        document.getElementById(elem.id).setAttribute("fill","#4B4B4B");
      }
      if(valuediese=='nd'){
        document.getElementById(elem.id).setAttribute("fill","#FFFFF7");
      }
}

function searchKeyDown(e)
{
    e = e || window.event;
    switch(e.keyCode){
        case 81:
        case 113:
            document.getElementById(currentnotes[0]).onmousedown();
            return false;
            break;
        case 83:
        case 115:
            document.getElementById(currentnotes[1]).onmousedown();
            return false;
            break;
        case 68:
        case 100:
            document.getElementById(currentnotes[2]).onmousedown();
            return false;
            break;
        case 70:
        case 102:
            document.getElementById(currentnotes[3]).onmousedown();
            return false;
            break;
        case 71:
        case 103:
            document.getElementById(currentnotes[4]).onmousedown();
            return false;
            break;
        case 72:
        case 104:
            document.getElementById(currentnotes[5]).onmousedown();
            return false;
            break;
        case 74:
        case 106:
            document.getElementById(currentnotes[6]).onmousedown();
            return false;
            break;
        case 90:
        case 122:
            document.getElementById(currentnotes[7]).onmousedown();
            return false;
            break;
        case 69:
        case 101:
            document.getElementById(currentnotes[8]).onmousedown();
            return false;
            break;
        case 84:
            document.getElementById(currentnotes[9]).onmousedown();
            return false;
            break;
        case 89:
        case 121:
            document.getElementById(currentnotes[10]).onmousedown();
            return false;
            break;
        case 85:
        case 117:
            document.getElementById(currentnotes[11]).onmousedown();
            return false;
            break;
    }
    return true;

}

function searchKeyUp(e)
{
    e = e || window.event;
    switch(e.keyCode){
        case 81:
        case 113:
            document.getElementById(currentnotes[0]).onmouseup();
            return false;
            break;
        case 83:
        case 115:
            document.getElementById(currentnotes[1]).onmouseup();
            return false;
            break;
        case 68:
        case 100:
            document.getElementById(currentnotes[2]).onmouseup();
            return false;
            break;
        case 70:
        case 102:
            document.getElementById(currentnotes[3]).onmouseup();
            return false;
            break;
        case 71:
        case 103:
            document.getElementById(currentnotes[4]).onmouseup();
            return false;
            break;
        case 72:
        case 104:
            document.getElementById(currentnotes[5]).onmouseup();
            return false;
            break;
        case 74:
        case 106:
            document.getElementById(currentnotes[6]).onmouseup();
            return false;
            break;
        case 90:
        case 122:
            document.getElementById(currentnotes[7]).onmouseup();
            return false;
            break;
        case 69:
        case 101:
            document.getElementById(currentnotes[8]).onmouseup();
            return false;
            break;
        case 84:
            document.getElementById(currentnotes[9]).onmouseup();
            return false;
            break;
        case 89:
        case 121:
            document.getElementById(currentnotes[10]).onmouseup();
            return false;
            break;
        case 85:
        case 117:
            document.getElementById(currentnotes[11]).onmouseup();
            return false;
            break;
    }
    return true;
}
