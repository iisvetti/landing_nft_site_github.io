/*document.addEventListener('DOMContentLoaded', function() {

/*let btn = document.querySelector('#btn')
let span = document.querySelector('.span') */
//let qa_wrapper = document.querySelectorAll('.qa_wrapper')

/* qa_wrapper.addEventListener('click', () => {
    if (span.style.maxHeight === `0px`) {
        span.style.maxHeight = span.scrollHeight + 'px'
        qa_wrapper.style.background = 'fff'
        btn.style.transform = 'rotate(180deg)'
    } else { 
        span.style.maxHeight = 0
        qa_wrapper.style.background = '#FCFAFF'
        btn.style.transform = 'rotate(0deg)'
}
}); */

//Array.from(qa_wrapper).forEach(el => {
   /* el.addEventListener('click', () => {

        let span = el.childNodes[5] 
        let btn = el.childNodes[3]
        let qa_wrapper = el
        console.log(el.childNodes)

        if (span.style.maxHeight === `0px`) {
            span.style.maxHeight = span.scrollHeight + 'px';
            qa_wrapper.style.background = '#fff'
            btn.style.transform = 'rotate(180deg)'
        } else { 
            span.style.maxHeight = 0
            qa_wrapper.style.background = '#FCFAFF'
            btn.style.transform = 'rotate(0deg)'
        }
    })
})



});   */             


document.addEventListener('DOMContentLoaded', function() {

let qa_wrapper = document.querySelectorAll('.qa_wrapper')

    qa_wrapper.forEach(el => {
        el.addEventListener('click', () => {

            let span = el.childNodes[5]
            let btn = el.childNodes[3]
            let qa_wrapper = el
            console.log(el.childNodes)

            if (span.style.maxHeight === `0px`) {
                span.style.maxHeight = span.scrollHeight + 'px';
                qa_wrapper.style.background = '#fff'
                btn.style.transform = 'rotate(180deg)'
            } else {
                span.style.maxHeight = 0
                qa_wrapper.style.background = '#FCFAFF'
                btn.style.transform = 'rotate(0deg)'
            }
        })
    })



})