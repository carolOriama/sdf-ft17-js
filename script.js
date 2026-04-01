 let h1  = document.querySelectorAll('h1')

 h1.forEach(function(h){
    h.style.textAlign = "center"

 })

 document.getElementById('about').style.color = "red"

 let para = document.createElement('p')
 
 para.setAttribute("id", "paragraph")



 para.textContent = "We have jus inserted paragraph in about section"
 
//  <p>We have jus inserted paragraph in about section</p>

document.getElementById('about').append(para)
 document.getElementById('paragraph').style.textAlign = "center"
