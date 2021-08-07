let item_image=document.querySelectorAll(".work-main-item");
let item_view=document.querySelector(".work-view");
item_image.forEach((ele)=>{
    ele.addEventListener('click',()=>{
        item_view.style.visibility="visible";
        item_view.style.opacity="1";
    });
});

let close_item=document.querySelector(".close");
close_item.addEventListener('click',()=>{
    item_view.style.visibility="hidden";
    item_view.style.opacity="0";
});


let workItems=document.querySelector(".work-items");
let imageUrlResturantAndCaffe=['workOut1.jpg','workOut2.jpg','ivan-stern-LOLSb7m6XkU-unsplash.jpg'];
let imageUrlConstruction=['constructionOut1.jpg','constructionOut2.jpg','constructionOut3.jpg'];
let imageUrlGeneralContracting=['GeneralContractingOut1.jpg','GeneralContractingOut2.jpg'];
let imageUrlmedical=['medicalOut1.jpg','medicalOut2.jpg','work-5.jpg'];
let imageUrlhomes=['homesOut1.jpg','homesOut2.jpg','homesOut3.jpg','Landing.jpg','WhatsApp Image 2021-07-26 at 4.28.22 PM.jpeg'];

let imageUrlAll=imageUrlResturantAndCaffe.concat(imageUrlConstruction,imageUrlGeneralContracting,imageUrlmedical,imageUrlhomes);

let clickItems=document.querySelectorAll(".navbar-item");

clickItems.forEach((ele,i)=>{
    ele.addEventListener("click",()=>{
        switch (i) {
            case 1:
                DrowItems(imageUrlAll);
            break;
            case 2:
                DrowItems(imageUrlResturantAndCaffe);
            break;
            case 3:
                DrowItems(imageUrlmedical);
            break;
            case 4:
                DrowItems(imageUrlhomes);
            break;
            case 5:
                DrowItems(imageUrlConstruction);
            break;
            case 6:
                DrowItems(imageUrlGeneralContracting);
            break;
        
            default:
                break;
        }
    });
})

window.addEventListener('load',()=>{DrowItems(imageUrlAll)});
function DrowItems(arrayItems) {
    workItems.innerHTML='';
    arrayItems.forEach((ele)=>{
        items=`
            <div class="work-main-item">
                <div class="layer"><span class="project-title">Title</span></div>
                <img class="f1" src="images/${ele}" alt="" srcset="">
            </div>
        `; 
        workItems.innerHTML+=items;
    });
}
