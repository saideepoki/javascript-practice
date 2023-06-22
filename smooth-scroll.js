//fetching all the anchor elements inside nav-menu class
var navigationElements = document.querySelectorAll(".nav-menu a");

for(let i = 0; i<navigationElements.length;i++) {
navigationElements[i].addEventListener("click",function(event){
    event.preventDefault(); // removes default behaviour of scroll of the a tags
         var targetSectionId = this.textContent.trim().toLowerCase(); // fetching id of the anchor element
    var targetSection = document.getElementById(targetSectionId); // fetching the element with fetched id
    var interval = 
        setInterval(function(){
            var sectionCoordinates = targetSection.getBoundingClientRect(); /*fetching coordinates of the required element or section. did it inside Interval coz everytime setInterval is called we get updated coordinates of the element*/
            if(sectionCoordinates.top<=0) {
            clearInterval(interval);
                return;
            }
            window.scrollBy(0,50); /* finally scroll for 50px everytime until we reach the desired element */
        },20);
    
    });
}