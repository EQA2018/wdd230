const input = document.querySelector('input');
const list = document.querySelector('ul');
const buttons = document.querySelector('button');


buttons.addEventListener('click', function() {
	let inputText = input.value;

    const listItem = document.createElement('li');
    const listButton = document.createElement('button');
    listItem.textContent = inputText;
    listButton.textContent = '❌';
    listItem.appendChild(listButton);
    list.appendChild(listItem);
    listButton.addEventListener('click', function() {
        list.removeChild(listItem);
		})

        input.focus();
		input.value = "";
		
})
