
var dt = new Date("2019/10/5");

 var totalmarks=0;

    var Category=document.getElementById("cat");

    var Gender;

    var catoption=Category.options[Category.selectIndex].value;

    function computetotals(){

    var english=document.getElementById("englishid").value;

    var kiswahili=document.getElementById("kiswahiliid").value;

    var math=document.getElementById("mathsid").value;

    var science=document.getElementById("scienceid").value;

    var religeon=document.getElementById("religeonid").value;

        if (isNaN(english) || english < 1 || english > 100) {
           alert("English marks not valid");  
           document.getElementById("englishid").style.background="red";
        }

        else{
          document.getElementById("englishid").style.background="green";
        }

        /*if (isNaN(kiswahili) || kiswahili < 1 || kiswahili > 100) {
           alert("Kiswahili marks not valid");  
           document.getElementById("kiswahiliid").style.background="red";
        }*

        else{
          document.getElementById("kiswahiliid").style.background="green";
        }*/

        if (isNaN(math) || math < 1 || math > 100) {
           alert("Maths marks not valid");  
           document.getElementById("mathid").style.background="red";
        }

        else{
          document.getElementById("mathid").style.background="green";
        }

        if (isNaN(science) || science < 1 || science > 100) {
           alert("Science marks not valid");  
           document.getElementById("scienceid").style.background="red";
        }

        else{
          document.getElementById("scienceid").style.background="green";
        }

        if (isNaN(religeon) || religeon < 1 || religeon > 100) {
           alert("Religeon marks not valid");  
           document.getElementById("religeonid").style.background="red";
        }

        else{
          document.getElementById("religeonid").style.background="green";
        }
        
       /* else if(isNaN(kiswahili) || kiswahili < 1 || kiswahili > 100) {
           alert("Kiswahili marks not valid");*/
          var swahili= document.getElementById("kiswahiliid");

          if (!swahili.checkValidity()) {
            document.getElementById("validationid").innerHTML = swahili.validationMessage; 
        }

    totalmarks=(parseInt(math)+parseInt(kiswahili)+parseInt(english)+parseInt(science)+parseInt(religeon));
    document.getElementById("results").innerHTML=totalmarks; 

    document.getElementById("results").style.background="red" ;

    }
    function placestudent() {

      if(document.getElementById("boys").checked){

        Gender=document.getElementById("boys").value;

      }

      else{

        Gender=document.getElementById("girls").value;

      }

    if((catoption=="urban") && (Gender=="boys") && totalmarks>430){

       document.getElementById("secschool").innerHTML="Natioal Boys School";

    }

    else if ((catoption=="rural") && totalmarks<=430 && (Gender=="boys")){

       document.getElementById("secschool").innerHTML="County Boys School";

    }

     else if ((catoption=="urban") && totalmarks>420 && (Gender=="girls")){

       document.getElementById("secschool").innerHTML="Natioal Girls School";

    }

    else if ((catoption=="rural") && totalmarks>420 && (Gender=="boys")){

       document.getElementById("secschool").innerHTML="National Boys School";

      }

    else if ((catoption=="rural") && totalmarks> 410 && (Gender=="girls")){

       document.getElementById("secschool").innerHTML="Natinoal Girls School";

     }

    else if ((catoption=="rural") && totalmarks> 370 && Gender=="boys"){

       document.getElementById("secschool").innerHTML="County Boys School";

     }

    else if ((catoption=="rural") && totalmarks> 350 && Gender=="girls"){

       document.getElementById("secschool").innerHTML="County Girls School";

     }

     else if ((catoption=="rural") && totalmarks> 360 && Gender=="boys"){

       document.getElementById("secschool").innerHTML="County Boys School";

     }

     else if ((catoption=="rural") && totalmarks> 330 && Gender=="girls"){

       document.getElementById("secschool").innerHTML="County Girls School";

     }

     else if ((catoption=="rural") && 1<totalmarks<370 && Gender=="boys"){

       document.getElementById("secschool").innerHTML="Sub-County Boys School";

     }

     else if ((catoption=="rural") && 1<totalmarks<350 && Gender=="girls"){

       document.getElementById("secschool").innerHTML="Sub-County Girls School";

     }

     else if ((catoption=="rural") && 1<totalmarks<360 && Gender=="boys"){

       document.getElementById("secschool").innerHTML="Sub-County Boys School";

     }

     else if ((catoption=="rural") && 1<totalmarks<330 && Gender=="girls"){

       document.getElementById("secschool").innerHTML="Sub-County Girls School";

     }

        else{

            document.getElementById("secschool").innerHTML="No School available for student";
      }

    }
function validateinputs(){

}