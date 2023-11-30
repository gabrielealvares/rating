 const numbers = document.querySelectorAll('.number')
 const button = document.querySelector('button')
 const points = document.querySelector('.points')
 const main = document.querySelector('main')
 const hiddenSection = document.querySelector('.hidden-section')
 
 

 numbers.forEach(number =>{
    number.addEventListener('click',()=>{
        number.style.background = ' hsl(25, 97%, 53%)'

        number.addEventListener('mouseleave',()=>{
         setTimeout(()=>{
            number.style.background =''
         },700)

        })

        numbers.forEach(num => num.classList.remove('selected'))
        number.classList.add('selected')
    })
 })
 

 button.addEventListener('click',()=>{

    const numberSelect = document.querySelector('.number.selected')
    if(numberSelect){
        const number = numberSelect.getAttribute('data-value')
        points.textContent = `You selected ${number} out of 5`
    
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







