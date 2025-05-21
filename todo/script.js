
function showCalendar() {
    const dateInput = document.getElementById('dueDate');
    dateInput.focus();
}

document.addEventListener('DOMContentLoaded', function(){
    const today = new Date();
    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    const formattedDate = today.toLocaleDateString(undefined, options);

    document.getElementById('title').textContent = `To-Do for ${formattedDate}`;
});

document.addEventListener('DOMContentLoaded', function() {
    function adjustMaxLength() {
        const inputBox = document.getElementById('textBox');
        inputBox.setAttribute('maxlength', window.innerWidth <= 600 ? '20' : '30');
    }

    adjustMaxLength();
    window.addEventListener('resize', adjustMaxLength);
});



document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();

    // Adding items to the list
    var inputValue = document.getElementById('textBox').value;
    if (inputValue !== ''){

        const newItem = document.createElement('li');
        newItem.textContent = inputValue;

        // X button
        const Xbutton = document.createElement('button');
        Xbutton.textContent = '✔';
        Xbutton.classList.add('remove-button');

        Xbutton.addEventListener('click', function(){
            newItem.remove();
            confetti({
                particleCount: 500,
                spread: 70,
                origin: { y: 1 },
            });
        })

        // Adding everything to the list
        newItem.appendChild(Xbutton);
        document.getElementById('taskSheet').appendChild(newItem);
        document.getElementById('textBox').value='';
    }   
});



