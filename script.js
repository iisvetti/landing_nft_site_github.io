document.addEventListener('DOMContentLoaded', function() {

let btn = document.querySelector('#btn')
let span = document.querySelector('.span')
let qa_wrapper = document.querySelector('.qa_wrapper')

qa_wrapper.addEventListener('click', () => {
    if (span.style.maxHeight === `0px`) {
        span.style.maxHeight = span.scrollHeight + 'px'
        qa_wrapper.style.background = 'fff'
        btn.style.transform = 'rotate(180deg)'
    } else { 
        span.style.maxHeight = 0
        qa_wrapper.style.background = '#FCFAFF'
        btn.style.transform = 'rotate(0deg)'
}
}); 




});