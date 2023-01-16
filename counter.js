const $ = document

const counter = $.querySelector('.counter')
const btns = $.querySelectorAll('.btn')

// ||initialize the count variable ||
let count = 0

// || buttons and counter ||
btns.forEach((btn) =>{
    btn.addEventListener('click', (e) =>{
        const styles = e.target.classList
        // console.log(e);

        if (styles.contains('increase')) {
            count++
        } else if (styles.contains('decrease')){
            count--
        } else {
            count = 0
        }


        if(count > 0){
            counter.style.color = 'green'
        } else if(count < 0){
            counter.style.color = 'red'
        } else if(count === 0){
            counter.style.color = 'white'
        }

        counter.textContent = count

    })
})
 
