        var plus =document.querySelector("#plus");
        var qt =document.querySelector(".quantity");
        var moins =document.querySelector("#moins");
        var heart = document.querySelector("#heart");
        var total =document.querySelector(".total");
        var carte=document.querySelector(".card-body");

        deb=0;
        prix=100;
        som=0;


        plus.addEventListener('click',() =>{
          deb++;
          deb = (deb < 10) ? "0" + deb:deb;
          qt.innerHTML = deb;
          console.log(deb);


          total.innerHTML= (deb*prix)+(deb2*prix2)+ (deb3*prix3);
          
        })

        moins.addEventListener('click',() =>{
            if (deb > 0) {
              deb--;

            deb = (deb < 10) ? "0"  + deb:deb;
            qt.innerHTML = deb;
            total.innerHTML= (deb*prix)+(deb2*prix2)+ (deb3*prix3);
            console.log(deb);

            
            
          
            }
          
        })



        let choix =true;

        function change() {
          let button=document.getElementById("button");
          

          if (choix == true) {
              button.style.color = "red";
              choix = false;
          } else {
            button.style.color = "black";
            choix = true;
          }
        }


        function supp() {
          let cancel = document.getElementById("cancel");
          
          carte.style.display ="none";
          
          total.innerHTML= qt.innerHTML = deb=0;;

        }

        ///////////////////////////////////////////////////////////////////////////////////////////////////


        var plus2 =document.querySelector("#plus2");
        var qt2 =document.querySelector(".qt");
        var moins2 =document.querySelector("#moins2");
        var heart2 = document.querySelector("#heart2");
        var total =document.querySelector(".total");
        var carte2=document.querySelector("#carte2");
        

        deb2=0;
        prix2=20;
        som2=0;


        plus2.addEventListener('click',() =>{
          deb2++;
          deb2 = (deb2 < 10) ? "0" + deb2:deb2;
          qt2.innerHTML = deb2;
          console.log(deb2);


          total.innerHTML= (deb*prix)+(deb2*prix2)+ (deb3*prix3);
          
        })

        moins2.addEventListener('click',() =>{
            if (deb2 > 0) {
              deb2--;

              deb2 = (deb2 < 10) ? "0"  + deb2:deb2;
              qt2.innerHTML = deb2;
              total.innerHTML= (deb*prix)+(deb2*prix2)+ (deb3*prix3);
            console.log(deb2);

            
            
          
            }
          
        })



        let choix2 =true;

        function chg() {
          let button2=document.getElementById("button2");
          

          if (choix2 == true) {
              button2.style.color = "red";
              choix2 = false;
          } else {
            button2.style.color = "black";
            choix2 = true;
          }
        }


        function sup() {
          let cancel2 = document.getElementById("cancel2");
          carte2.style.display ="none";
          
          qt2.innerHTML = deb2=0;
          total.innerHTML= (deb*prix)+(deb3*prix3)-qt2.innerHTML;

        }
/*/
        heart.addEventListenner('click' , () => {
          heart.style.color ="red";
        })*/



         ///////////////////////////////////////////////////////////////////////////////////////////////////


         var plus3 =document.querySelector("#plus3");
        var qt3 =document.querySelector(".qt3");
        var moins3 =document.querySelector("#moins3");
        var heart3 = document.querySelector("#heart3");
        var total =document.querySelector(".total");
        var carte3=document.querySelector("#carte3");
        

        deb3=0;
        prix3=50;
        som3=0;


        plus3.addEventListener('click',() =>{
          deb3++;
          deb3 = (deb3 < 10) ? "0" + deb3:deb3;
          qt3.innerHTML = deb3;
          console.log(deb3);


          total.innerHTML= (deb*prix)+(deb2*prix2)+ (deb3*prix3);
          
        })

        moins3.addEventListener('click',() =>{
            if (deb3 > 0) {
              deb3--;

              deb3 = (deb3 < 10) ? "0"  + deb3:deb3;
              qt3.innerHTML = deb3;
              total.innerHTML= (deb*prix)+(deb2*prix2)+ (deb3*prix3);
            console.log(deb3);

            
            
          
            }
          
        })



        let choix3 =true;

        function chg3() {
          let button3=document.getElementById("button3");
          

          if (choix3 == true) {
              button3.style.color = "red";
              choix3 = false;
          } else {
            button3.style.color = "black";
            choix3 = true;
          }
        }


        function sup3() {
          let cancel3 = document.getElementById("cancel3");
          carte3.style.display ="none"; 

          qt3.innerHTML = deb3=0;
          total.innerHTML= (deb*prix)+(deb2*prix2)-qt3.innerHTML;

        }
