 const button = document.querySelector('button')
 const hiddenSection = document.querySelector('.hidden-section')
 const main = document.querySelector('main')
 const numbers = document.querySelectorAll('.number')
 const points = document.querySelector('.points')
 const body = document.querySelector('body')
 

 numbers.forEach(number =>{
    number.addEventListener('click',()=>{
        numbers.forEach(num => num.classList.remove('selected'))
        number.classList.add('selected')
    })
 })
 

 button.addEventListener('click',()=>{

    const numberSelect = document.querySelector('.number.selected')
    if(numberSelect){
        const numero = numberSelect.getAttribute('data-value')
        points.textContent = `You selected ${numero} of 5`
    
    }else{
        points.textContent = `selected a number first`
    }
   
    main.style.display ='none'
    hiddenSection.style.display ='block'

    hiddenSection.addEventListener('click',()=>{
        hiddenSection.style.display ='none'
        main.style.display ='block'
     })
 })







