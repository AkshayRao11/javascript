const heading = document.getElementById("myheading")
console.log(heading);


heading.style.color = "tomato";
heading.style.backgroundColor = "yellow";

const para = document.getElementsByClassName("para");
console.log(para);

for(let i=0;i<para.length;i++){
    para[i].style.backgroundColor="cyan";

}


//queryselector

const qs =document.querySelector("#content p")
console.log(qs)
qs.textContent = "lorem djkaban. j d. eqjo. e j"

