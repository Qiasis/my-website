let isShowMyName = false;
let isshowmyskill = false;
function hello(alertText){
    alert("Hello world!"+alertText)
 };

function showMyName(){
    if(isShowMyName){
        document.getElementById("myName").innerHTML = `
          <button onclick="showMyName()">
            showMyName
          </button>
          `;
        } 
    else 
        {
          document.getElementById("myName").innerHTML = `
          My Name is:<br/><b>Sahapat Boonsrisook</b>
          <br/><button onclick="showMyName()">
            showMyName
          </button>
          `;
        }
        isShowMyName = !isShowMyName;
}
      
      

const Skills = ["HTML", "CSS", "Javascript", "Time management", "Communicating skill"]
      
function generateskill() {
    let htmlString = '<ol>'
        for (const x of Skills) {
          htmlString += `<li>${x}</li>`
        }
        htmlString += "</ol>"

        return htmlString;
};

function showmyskill() {
    isshowmyskill=!isshowmyskill;
        if(isshowmyskill ==true){
            document.getElementById("hardskill").innerHTML = generateskill();
        }
        else {
            document.getElementById("hardskill").innerHTML = "";
        }
       
};







window.onscroll = function () { scrollFunction() };
    
    function scrollFunction() {
           if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("goUpButton").style.display = "block";
          } else {
            document.getElementById("goUpButton").style.display = "none";
          }
        }
    
        document.getElementById("goUpButton").addEventListener("click", function () {
            scrollToTop(500); // 1000 milliseconds (1 second) for the animation duration
        });
    
function scrollToTop(scrollDuration) {
          var scrollStep = -window.scrollY / (scrollDuration / 15);
          var scrollInterval = setInterval(function () {
            if (window.scrollY != 0) {
              window.scrollBy(0, scrollStep);
            }
            else clearInterval(scrollInterval);
          }, 15);
        }
    
    

