
    var i = 0;
    var tot = 0;
    var score = 0;
    var source = ['https://giphy.com/embed/l1D8H0PAU2CFLYEuiH',
                  'https://giphy.com/embed/gIelRXqsehpglqcPLt',
                  //'https://giphy.com/embed/TdXRnvLgPrDi6ZPc5F', - old q3 link
                  'https://giphy.com/embed/h7XYEuYuHiX0fX5FA8',
                  'https://giphy.com/embed/jn8AwjUv4oKbA3m6AD',
                  'https://giphy.com/embed/ln1d5zjrV08ZLSrQeD']
    //var yesButton = ['Correct \nThe foul is : Shirt pulling (Standard Contact Penalty) \nThe Penalty is: Yellow Card',
    //                  'Correct \nThe foul is : Illegally contacting an opponent with a held bludger \nThe Penalty is: Blue Card',
    //                  'Correct \nThe foul is : Neck Contact (Standard Contact Penalty) \nThe Penalty is: Yellow Card',
    //                  'Correct \nThe foul is : Back Contact (Standard Contact Penalty) \nThe Penalty is: Yellow Card',
    //                  'Correct \nThe foul is : Contact from behind (Minor) \nThe Penalty is: Back to hoops']
    //var noButton  = ['Incorrect \nThe foul is : Shirt pulling (Standard Contact Penalty) \nThe Penalty is: Yellow Card',
    //                  'Incorrect \nThe foul is : Illegally contacting an opponent with a held bludger \nThe Penalty is: Blue Card',
    //                  'Incorrect \nThe foul is : Neck Contact (Standard Contact Penalty) \nThe Penalty is: Yellow Card',
    //                  'Incorrect \nThe foul is : Back Contact (Standard Contact Penalty) \nThe Penalty is: Yellow Card',
    //                  'Incorrect \nThe foul is : Contact from behind (Minor) \nThe Penalty is: Back to hoops']
    var vidLink = ['https://youtu.be/dzjLsffrqoI?t=4260', 'https://youtu.be/dzjLsffrqoI?t=4260', 'https://youtu.be/dzjLsffrqoI?t=4260', 'https://youtu.be/dzjLsffrqoI?t=4260', 'https://youtu.be/dzjLsffrqoI?t=4260', 'https://youtu.be/dzjLsffrqoI?t=4260']
    var card = ['Y', 'B', 'Y', 'Y', 'S']
    var pen = ['Yellow Card', 'Blue Card', 'Yellow Card', 'Yellow Card', 'Back To Hoops']
    var foul = ['Shirt pulling (SCP)', 'Illegally contacting an opponent with a held bludger', 'Neck Contact (Standard Contact Penalty)',
                'Back Contact (Standard Contact Penalty)', 'Contact from behind (Minor)']
    var ruleref = ['6.1.1.K', 'x', '6.1.1.E', '6.1.9', '6.1.9']
    function test(){
      alert('TEST');
    };
    function butfunc(color){
      var output = '';
      if(color==card[i]){
        score +=1
        tot +=1;
        output = 'Correct! \nThe foul is : ' + foul[i] + '\nThe penalty is: ' + pen[i] + '\nYour Score is: ' + score + '/' + tot;
      }else{
        tot+=1
        output = 'Incorrect! \nThe foul is : ' + foul[i] + '\nThe penalty is: ' + pen[i] + '\nYour Score is: ' + score + '/' + tot;
      };
      alert(output);
      //change score
      document.getElementById('score').innerHTML = 'Score: ' + score + '/' + tot;
    //  //buttonlist, cor){
      //display output
      //alert(buttonlist[i]);
      //if(cor[i] == 1){
      //  score +=1;
      //}
      //next iteration
      i +=1;
      if(i < source.length){
      //set up next question
      //gif
        document.getElementById('gifplayer').src = source[i];
        //document.getElementById('vid-lnk').href = vidLink[i];
      //update score
      //document.getElementById('score').innerHTML = 'Score = ' + score + '/' + i; //fraction score
      }else{
        alert('Final Score: ' + score + '/' + tot
              + ' (' + ((score/i)*100).toPrecision(3) + '%)' //percentage
           );
      //  window.location.href = 'https://gayyoda.github.io/QuidRefTest2/';
      };
    };
    function srclnkbut(){
      window.location.href=vidLink[i];
    };
    function restartbut(){
      i = 0
      score = 0
      tot = 0
      document.getElementById('gifplayer').src = source[i];
    };
    function finishbut(){
      alert('Final Score: ' + score + '/' + tot);
    //window.location.href = 'https://gayyoda.github.io/QuidRefTest2/';
    };
    document.getElementById('redcard').addEventListener("click", function(){butfunc('R');}, false);
    document.getElementById('yellcard').addEventListener("click", function(){butfunc('Y');}, false);
    document.getElementById('bluecard').addEventListener("click", function(){butfunc('B');}, false);
    document.getElementById('specialcard').addEventListener("click", function(){butfunc('S');}, false);
    document.getElementById('nopen').addEventListener("click", function(){butfunc('N');}, false);
    document.getElementById('srcbut').addEventListener("click", function(){srclnkbut();}, false);
    document.getElementById('restart').addEventListener("click", function(){restartbut();}, false);
    document.getElementById('finish').addEventListener("click", function(){finishbut();}, false);
