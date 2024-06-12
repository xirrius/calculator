const clear = document.getElementById('AC');
const equal = document.getElementById('=');
const numop = document.querySelectorAll('.numop')
const textarea = document.getElementById('textarea')

numop.forEach(element => {
    element.addEventListener("click", () => {
        console.log(element.innerHTML + " was clicked");
        let val = textarea.value;
        val = val + element.innerHTML
        textarea.value = val
        console.log(val, typeof val);
    })
});

clear.addEventListener("click", () => {
    let val = textarea.value;
    val = ""
    textarea.value = val
})

equal.addEventListener("click", () => {
    let val = textarea.value;
    const result = math.evaluate(val)
    textarea.value = result;
    console.log( result ,typeof result);
})

