

console.log("start");
  var joueur=1;


  var annonce="joueur";
  alert("joueur1");

function game(id){
  if(joueur==1){
    document.getElementById("case"+id).className="player1";
    joueur=2;
    console.log("joueur1");
      alert(annonce+"2");
}
else if(joueur==2){
  document.getElementById("case"+id).className="player2";
  joueur=1;
  console.log("joueur2");
  alert(annonce+"1");
}
  document.getElementById("case"+id).onclick=function(){
  return false;
  };
}
// var m="joueur";
// alert(m);


console.log("end");
