let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const offer = document.querySelectorAll('.offer');

if(windowWidth > 992 ) {
    for(i=0; i < offer.length; i ++ ) {
        offer[i].style.zIndex =  offer.length - i;
    }
  }
//tel input mask
 $(function(){
        $("input[type='tel']").mask("+38(099) 999 99 99");
    });

