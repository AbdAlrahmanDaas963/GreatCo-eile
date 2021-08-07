let aboutMy=document.querySelector(".about-as .about-as-desc");
let aboutMyImage=document.querySelector(".about-as .about-us-img");



let sectionTitle=document.querySelectorAll('.section-title');


window.addEventListener("scroll", function(){
    var heightHome=document.querySelector('.home').clientHeight;
    var heightAboutUs=document.querySelector('.about-as').clientHeight+heightHome;
    var heightOurServices=document.querySelector('.our-services').clientHeight+heightAboutUs;
    var heightOurWork=document.querySelector('.our-work').clientHeight+heightOurServices;
    var heightTestimonial=document.querySelector('.testimonial').clientHeight+heightOurWork;
    var heightContactUs=document.querySelector('.contact-us').clientHeight+heightTestimonial;
    let scrollTop_val=document.documentElement.scrollTop;
    /* About Me */
    if (scrollTop_val >= 300){
        aboutMy.style.left="0px";
        aboutMy.style.visibility='visible';
        aboutMy.style.opacity='1';
        aboutMyImage.style.right="50px";
        aboutMyImage.style.visibility='visible';
        aboutMyImage.style.opacity='1';
    }else{
        aboutMy.style.left="-850px";
        aboutMy.style.visibility='hidden';
        aboutMy.style.opacity='0';
        aboutMyImage.style.right="-450px";
        aboutMyImage.style.visibility='hidden';
        aboutMyImage.style.opacity='0';
    }
    /* ******************* */
    if(scrollTop_val>=(heightHome+200)){
        moveSectionTitle(0);
    }else if(scrollTop_val<=(heightHome+200)){
        sectionTitle[0].style.left="0%";
        sectionTitle[0].style.transform="translateX(0%)";
    }

    if(scrollTop_val>=(heightAboutUs+200)){
        moveSectionTitle(1);
    }else if(scrollTop_val<=heightAboutUs+200){
        sectionTitle[1].style.left="0%";
        sectionTitle[1].style.transform="translateX(0%)";
    }

    if(scrollTop_val>=(heightOurServices+200)){
        moveSectionTitle(2);
    }else if(scrollTop_val<=(heightOurServices+200)){
        sectionTitle[2].style.left="0%";
        sectionTitle[2].style.transform="translateX(0%)";
    }
});

function moveSectionTitle(index){
    let windwWidth=window.innerWidth;
    if(windwWidth>760){
        sectionTitle[index].style.left="200px";
    }else{
        sectionTitle[index].style.left="50%";
        sectionTitle[index].style.transform="translateX(-50%)";
    }
}

window.addEventListener("resize",()=>{

});

window.addEventListener("load",function(){
    let windwWidth=window.innerWidth;
    var homeContant=document.querySelector('.home-content');
    var companyName=document.querySelector('.company-name');
    var companyBtn=document.querySelector('.what-we-do-btn');
    var companyDesc=document.querySelector('.company-desc');
    homeContant.style.left="50px";
    setTimeout(() => {
        if (windwWidth>800){
            homeContant.style.transition="left 1.8s";
            homeContant.style.left="20px";
        } 
        else    
            homeContant.style.left="0px"; 
    }, 2000);
    companyName.style.visibility="visible";
    companyName.style.opacity="1";
    companyBtn.style.visibility="visible";
    companyBtn.style.opacity="1";
    companyDesc.style.visibility="visible";
    companyDesc.style.opacity="1";
});


/*
let ourWorkItem=document.querySelectorAll(".services-item");
ourWorkItem.forEach((ele)=>{
    ele.addEventListener("mouseover",()=>{
        ourWorkItem.forEach((item)=>{
            item.style.zIndex="0";
            item.style.transform="scale(1)";
        });
        ele.style.zIndex="10";
        ele.style.transform="scale(1.1)";
    })
});
*/