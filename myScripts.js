//CLOCK SCRIPT
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m); 
    document.getElementById('clock').innerHTML =  h + ":" + m;
    setTimeout(startTime, 1000);
   }
   
   function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
   }

   //POST-IT NOTE SAVE (JAVASCRIPT)
if (localStorage["note"]) {
    var note = localStorage["note"];
    document.getElementById("note").value = note;
 }
  
 function autoSave() {
    var note = document.getElementById("note").value;
    localStorage.setItem("note", note);
 }
 
 //POST-IT NOTE SHOW AND HIDE
 var show = false;
 function showNote(){
    if (show == false){
        document.getElementById("note").style.opacity = 1;
        show = true;
    }
    else if (show == true){
        document.getElementById("note").style.opacity = 0;
        show = false;
    }
 }
 
 //MUST set “opacity:0” in CSS on #note
 
 //CALCULATOR SHOW AND HIDE
 var show = false;
 function showCalculator(){
    if (show == false){
        document.getElementById("calc").style.opacity = 1;
        show = true;
    }
    else if (show == true){
        document.getElementById("calc").style.opacity = 0;
        show = false;
    }
 }
 
 //MUST set “opacity:0” in CSS on #note
 