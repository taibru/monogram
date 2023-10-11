const workflowEL = document.querySelector(".js-workflow");
const miniDropDownEl = document.querySelector(".drop-manu");
const wholeEl = document.querySelector(".website");

//-------------------------------------------
const moneySelectEl = document.querySelectorAll('.abs-cont>div>li');
const moneyListContEl = document.querySelector('.abs-cont>div');
const selectedCurrencyEl = document.querySelector('.js-currency');
//---------------------------------------------------------------------
const mainImgEL = document.querySelectorAll('.main-img');
const shopNowBtnEl = document.querySelectorAll('.shop-now');
const productDetailsEl = document.querySelectorAll('.product-details');
//--------------------------------------------------------------------
const somegthing = document.querySelector('#js-const');



document.addEventListener('DOMContentLoaded', ()=> {
  workflowEL.addEventListener("click", ()=>{

    if(miniDropDownEl.style.display === "none"){
      miniDropDownEl.style.display = "block";
      workflowEL.style.color = "white";
      somegthing.style.display = 'none';
      
    }else{
      miniDropDownEl.style.display = "none";
      workflowEL.style.color = "#efc2b3";
    }
  });
  
  workflowEL.addEventListener("mouseover", ()=>{
      workflowEL.style.color = "white";
  });
  workflowEL.addEventListener('mouseout', ()=>{
    workflowEL.style.color = "#efc2b3";
  });
  
  console.log(document);
  
  
  
  //--------------------------------------------------------------
  

  
  selectedCurrencyEl.addEventListener('click', ()=>{
    if(moneyListContEl.style.display === 'none'){
      moneyListContEl.style.display = 'block';
      miniDropDownEl.style.display = 'none';
    }else{
      moneyListContEl.style.display = 'none';
    }
  });
  
  moneySelectEl.forEach((element, i)=>{
    element.addEventListener('click', ()=>{
      selectedCurrencyEl.innerHTML = moneySelectEl[i].innerHTML.substring(0, 3);
      moneyListContEl.style.display = 'none';
    });
  });
  
  //-------------------------------------------------------
  
  

  
  
  shopNowBtnEl.forEach((element, i)=>{
    mainImgEL[i].addEventListener('mouseover', ()=>{
      mainImgEL[i].classList.add('hidden-img');
      element.classList.add('hidden-shop-now');
    });
    productDetailsEl[i].addEventListener('mouseover', ()=>{
      element.classList.add('hidden-shop-now');
    });
  
    mainImgEL[i].addEventListener('mouseout', ()=>{
      mainImgEL[i].classList.remove('hidden-img');
      element.classList.remove('hidden-shop-now');
    });
    productDetailsEl[i].addEventListener('mouseout', ()=>{
      element.classList.remove('hidden-shop-now');
    });
  })
  
  document.addEventListener('click', (e)=>{
    console.log(e.target);
  });

});



