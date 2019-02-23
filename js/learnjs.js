function hideWORD(){
  var x=document.getElementById("c").value;
  var y=document.getElementById("work");
  if (x=="us") {
  innerHTML=
        y.options[0].hidden=true;
        y.options[1].hidden=true;
        y.options[2].hidden=true;
        y.options[3].hidden=true;
        y.options[4].hidden=true;
        y.options[5].hidden=true;
        y.options[6].hidden=true;
        y.options[7].hidden=false;
        y.options[9].hidden=false;
        y.options[10].hidden=false;
    }
  else if (x=="india") {
    innerHTML=
          y.options[0].hidden=false;
          y.options[1].hidden=false;
          y.options[2].hidden=false;
          y.options[3].hidden=true;
          y.options[4].hidden=true;
          y.options[5].hidden=true;
          y.options[6].hidden=true;
          y.options[7].hidden=true;
          y.options[9].hidden=true;
          y.options[10].hidden=true;



  }
  else if (x=="canada") {
    innerHTML=
      y.options[0].hidden=true;
        y.options[1].hidden=true;
        y.options[2].hidden=true;
        y.options[3].hidden=false;
        y.options[4].hidden=false;
        y.options[5].hidden=false;
        y.options[6].hidden=true;
        y.options[7].hidden=true;
        y.options[9].hidden=true;
        y.options[10].hidden=true;
      }
else if (x=="latiam") {
    innerHTML=
        y.options[0].hidden=true;
        y.options[1].hidden=true;
        y.options[2].hidden=true;
        y.options[3].hidden=true;
        y.options[4].hidden=true;
        y.options[5].hidden=false;
        y.options[6].hidden=false;
        y.options[7].hidden=true;
        y.options[9].hidden=true;
        y.options[10].hidden=true;

  }

}
