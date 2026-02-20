// WRITE YOUR CODE IN HERE:
// 1. Select the div with the id of 'container'
const container = document.querySelector('#container');

// 2. Loop exactly 100 times
for (let i = 0; i < 100; i++) {
    // 3. Create a new button element
    const btn = document.createElement('button');
    
    // 4. Add text inside the button
    btn.innerText = 'Button!';
    
    // 5. Append the button to the container
    container.appendChild(btn);
}
