// menu button
const button = document.getElementById("more");
const colla = document.getElementById("navbarSupportedContent");
const bur1 = document.querySelector(".bur1");
const bur2 = document.querySelector(".bur2");
const bur3 = document.querySelector(".bur3");
function navUp() {
    colla.setAttribute("class", "navbar-collapse collapse");
    more()
    button.setAttribute("aria-expanded", "true");
}
function menu () {
    button.getAttribute("aria-expanded") == "true" ? x() : more();
}
function x(){
    bur1.style.transform= "translate( -50% , -50% ) rotate(45deg)";
    bur2.style.opacity= "0";
    bur3.style.transform= "translate( -50% , -50% ) rotate(-45deg)";
}
function more(){
    bur1.style.transform= "translate( -50% , -12px )  rotate(0deg)";
    bur2.style.transform= "translate( -50% , -50% )  rotate(0deg)";
    bur2.style.opacity= "1";
    bur3.style.transform= "translate( -50% , 10px ) rotate(0deg)";
}

// ----------------------------
var imgArr=document.querySelectorAll(".home .home-background .background-item"); /* find all images for background home */
var indexItem=0; /* for looping on images */
var state=0; /* for interval state<4 -> left , state>4 && state<8 r->right */
var cyrcel=document.querySelectorAll('.cyrcel');
cyrcel[indexItem].style.backgroundColor="white";
var clickState=0;
function swap_back(dir,status=0){
    if (clickState==0){
        clickState=1;
        if (dir=='left' && indexItem<imgArr.length-1){
        imgArr[indexItem].style.left="-100%";
        imgArr[indexItem+1].style.left="0%";
        cyrcel[indexItem].style.backgroundColor="rgba(255, 255, 255, 0.418)";
        cyrcel[indexItem+1].style.backgroundColor="white";
        indexItem++;
        if (status==1 && state<imgArr.length){ /* left left [++] */
            state++;
        }else if(status==1 && state<(imgArr.length*2) && state>=imgArr.length){ /* left right [--] */
            state--;
        }
    }
    if (dir=='right' && indexItem>0){
        indexItem--;
        imgArr[indexItem].style.left="0%";
        imgArr[indexItem+1].style.left="100%";
        cyrcel[indexItem+1].style.backgroundColor="rgba(255, 255, 255, 0.418)";
        cyrcel[indexItem].style.backgroundColor="white";
        if (status==1 && state<imgArr.length){ /* left left [++] */
            state--;
        }else if(status==1 && state<(imgArr.length*2) && state>=imgArr.length){ /* left right [--] */
            state++;
        }
    }
        setTimeout(() => {
            clickState=0;
        }, 1000);
    }
}
setInterval(() => {
    if (state<imgArr.length-1){
        swap_back('left');
        state++;
    }
    else if (state<(imgArr.length*2)-1 && state>=imgArr.length){
        swap_back('right');
        state++;
        if (state==(imgArr.length*2)) state=0;
    }
}, 6000);

// ++++ abd header
var navbar_item=document.querySelectorAll(".itemName");
var line=document.querySelectorAll('.itemName');
// ++++
// ---- eile header
// var navbar_item=document.querySelectorAll(".drop-list li .itemName");
// var line=document.querySelectorAll('.drop-list li .line');
// ----
var win_height=window.innerHeight;
var scroll_val;



navbar_item[0].style.color="#F6FF00";
line[0].style.transform="scale(1,1)";

window.onscroll=function () {
    scroll_val=window.scrollY;
    var heightHome=document.querySelector('.home').clientHeight-100;
    var heightAboutUs=document.querySelector('.about-as').clientHeight+heightHome-100;
    var heightOurServices=document.querySelector('.our-services').clientHeight+heightAboutUs-100;
    var heightOurWork=document.querySelector('.our-work').clientHeight+heightOurServices-100;
    var heightTestimonial=document.querySelector('.testimonial').clientHeight+heightOurWork-100;
    var heightContactUs=document.querySelector('.contact-us').clientHeight+heightTestimonial-100;
    var test=document.querySelectorAll('.drop-list li');
    //console.log("home :",heightHome);
    //console.log("home Services:",heightOurServices);
    //console.log("home Work:",heightOurWork);
    //console.log("home Testimonial:",heightTestimonial);
    //console.log("home Contact:",heightContactUs);
    if (scroll_val<=heightHome){
        navbar_item.forEach((ele)=>{ele.style.color="white";});
        line.forEach((ele)=>{ele.style.transform="scale(0,1)";});
        navbar_item[0].style.color="#F6FF00";
        line[0].style.transform="scale(1,1)";
        navbar_item[5].style.backgroundColor="initial";
    }else if(scroll_val<=heightAboutUs && scroll_val>heightHome){
        console.log("home About:",heightAboutUs);
        navbar_item.forEach((ele)=>{ele.style.color="white";});
        line.forEach((ele)=>{ele.style.transform="scale(0,1)";});
        navbar_item[1].style.color="#F6FF00";
        line[1].style.transform="scale(1,1)";
        navbar_item[5].style.backgroundColor="initial";
    }else if(scroll_val<=heightOurServices && scroll_val>heightAboutUs){
        navbar_item.forEach((ele)=>{ele.style.color="white";});
        line.forEach((ele)=>{ele.style.transform="scale(0,1)";});
        navbar_item[2].style.color="#F6FF00";
        line[2].style.transform="scale(1,1)";
        navbar_item[5].style.backgroundColor="initial";
    }
    else if(scroll_val<=heightOurWork && scroll_val>heightOurServices){
        navbar_item.forEach((ele)=>{ele.style.color="white";});
        line.forEach((ele)=>{ele.style.transform="scale(0,1)";});
        navbar_item[3].style.color="#F6FF00";
        line[3].style.transform="scale(1,1)";
        navbar_item[5].style.backgroundColor="initial";
    }
    else if(scroll_val<=heightTestimonial && scroll_val>heightOurWork){
        navbar_item.forEach((ele)=>{ele.style.color="white";});
        line.forEach((ele)=>{ele.style.transform="scale(0,1)";});
        navbar_item[4].style.color="#F6FF00";
        line[4].style.transform="scale(1,1)";
        navbar_item[5].style.backgroundColor="initial";
    }else if(scroll_val<=heightContactUs && scroll_val>heightTestimonial){
        navbar_item.forEach((ele)=>{ele.style.color="white";});
        line.forEach((ele)=>{ele.style.transform="scale(0,1)";});
        navbar_item[5].style.color="white";
        navbar_item[5].style.backgroundColor="#f6ff0044";
    }else if(scroll_val>heightContactUs+300){
        navbar_item.forEach((ele)=>{ele.style.color="white";});
        navbar_item[5].style.backgroundColor="initial";
    }
};



//services-item
var servicesItem=document.querySelectorAll(".services-item")
servicesItem.forEach((ele,i)=>{
    ele.addEventListener("click",()=>{
        window.location="our-services.html?i="+i;
    })
});