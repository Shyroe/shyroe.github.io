

const $ = q => document.querySelector(q);

 // TypeWriterEffect
 let pos = 0;
 let speed = 250;
 let txtStr = document.getElementById('title').innerText;
 let arrWords = ["Front-End", "Profissional", "Apaixonado"];
 let arrIndex = 0;

//vars of hamburger menu
let navigation = $('.navigation');
const hamburger = $('.icons')

let modals = document.querySelectorAll('.modal') 
let modalCta = document.querySelectorAll('.openmodal')
const modalSection = $('.section-modal');
// const closeModal = $('.modal__close');
const closeModal = document.querySelectorAll('.modal__close');

modalCta.forEach(modal => {    
    modal.onclick = () => {       

        modalSection.style.display = 'block'; //Ebixir a section
        console.log('modalDatasetAtual: ', modal.dataset.modal)
        switch (modal.dataset.modal) {
            case "1":
            $('.modal--1').style.zIndex = 20;
            $('.modal--1').style.opacity = 1;           
            
            break;
            case "2":
                $('.modal--2').style.zIndex = 20;
                $('.modal--2').style.opacity = 1;
                break;            
            case "3":
                $('.modal--3').style.zIndex = 20;
                $('.modal--3').style.opacity = 1;
                break;            
            case "4":
                $('.modal--4').style.zIndex = 20;
                $('.modal--4').style.opacity = 1;
                break;            
            case "5":
                $('.modal--5').style.zIndex = 20;
                $('.modal--5').style.opacity = 1;
                break;            
            case "6":
                $('.modal--6').style.zIndex = 20;
                $('.modal--6').style.opacity = 1;
                break;            
        }

    }
});


closeModal.forEach(close => {
    close.onclick = () => {
    modalSection.style.display = 'none';
    modals.forEach(modal => {
        modal.style.zIndex = 10;
        modal.style.opacity = 0;
    })
    
    }
});


//Scroll. Navbar Shrink
function shrinkNavbar() {   

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {             
              
        $('.head-nav').classList.add('shrink')       
    } else if (document.body.scrollTop === 0 || document.documentElement.scrollTop === 0) {         
        $('.head-nav').classList.remove('shrink')

    }

}

window.onscroll = () => shrinkNavbar();


//hamburger menu
hamburger.addEventListener('click', () => {
    navigation.classList.toggle('open');
});

// Typping Effect      

 // Empty String
 // document.getElementById('title').innerText = '';
 function type() {
    if(pos < arrWords[arrIndex].length) {
        document.getElementById('span-txt').innerText += arrWords[arrIndex].charAt(pos);
        pos++;
        setTimeout(type, speed) //call this function again to type all letters
    } else {
        setTimeout(erase, speed)

    }
}

//Start type
setTimeout(type, speed)


//Erase function. Erase, significa Apagar, desmanchar.
function erase() {
    if(pos >= 0) {
        let temp = arrWords[arrIndex].substring(0, pos);
        document.getElementById('span-txt').innerText = temp;
        pos--;                
        setTimeout(erase, speed); //call this function again to erase all letters
    } else {
        console.log('ArrIndexAntes: ', arrIndex)
        arrIndex++;
        if (arrIndex >= arrWords.length) {
            arrIndex = 0;
            console.log('ArrIndexReset: ', arrIndex)
        }                
        console.log('ArrIndexApos: ', arrIndex)

        //Start type function again
        setTimeout(type, speed);
    }
}
