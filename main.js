

    const questions = [
        { question: "Solve for x: 3x = 15.", answer: 5, imageUrl: 'images/image1.jpeg' },
        { question:"What is the square root of 256? ", answer:16, imageUrl: 'images/image2.jpeg'},
        { question:"How many edges does a cube have? ", answer:12, imageUrl: 'images/image3.jpeg'},
        { question:"What is 7 multiplied by 2?", answer:14, imageUrl: 'images/image4.jpeg'},
        { question:"What is the sum of the first three prime numbers?", answer:10, imageUrl: 'images/image5.jpeg'},
        { question:"If a triangle has angles of 60 and 45 degrees, what is the third angle?", answer:75, imageUrl: 'images/image6.jpeg'},
        { question:"What is the sum of the angles in a hexagon?", answer:16, imageUrl: 'images/image7.jpeg'},
        { question:"How many factors does 16 have? ", answer:5, imageUrl: 'images/image8.jpeg'},
        { question:"Solve for x in the equation: 5x - 7 = 18.", answer:5, imageUrl: 'images/image9.jpeg'},
        { question:"What is the product of the first two Fibonacci numbers?", answer:1, imageUrl: 'images/image10.jpeg'},
        { question:"What is the 4th Fibonacci number?", answer:3, imageUrl: 'images/image11.jpeg'},
        { question:"What is the smallest composite number?", answer:4, imageUrl: 'images/image12.jpeg'},
        { question:"Solve for x: 3x + 4 = 13", answer:3, imageUrl: 'images/image13.jpeg'},
        { question:"How many diagonals does a hexagon have? ", answer:9, imageUrl: 'images/image14.jpeg'},
        { question:"How many faces does a dodecahedron have?", answer:12, imageUrl: 'images/image15.jpeg'},
        { question:"How many prime numbers are there between 10 and 30?", answer:6, imageUrl: 'images/image16.jpeg'},
        { question:"If a hexagon's each side is 2 units, what is its perimeter? ", answer:12, imageUrl: 'images/image17.jpeg'},
    ];
    document.addEventListener('DOMContentLoaded', function() {
        const gridContainer = document.getElementById('gridContainer');
        const mathQuestion = document.getElementById('mathQuestion');
        const clickCounter = document.getElementById('clickCounter'); // Ensure this element exists in your HTML
        let currentAnswer = 0;
        let activeCell = null;
        let isDigging = false; // To toggle cursor image

           // Custom cursor images
           const cursorImage = 'url(images/cursor.png), auto';
           const rotatedCursorImage = 'url(images/rotatedCursor.png), auto'; // Rotated version of the cursor
           let isRotated = false;
       
           gridContainer.style.cursor = cursorImage; // Set initial cursor
       
           function toggleCursorImage() {
               isRotated = !isRotated;
               gridContainer.style.cursor = isRotated ? rotatedCursorImage : cursorImage;
           }

          // Generate grid cells
    for (let i = 0; i < 36; i++) {
        let cell = document.createElement('div');
        cell.classList.add('gridCell');
        cell.dataset.clicks = 0;
        cell.addEventListener('click', function() { activateCell(cell); });
        gridContainer.appendChild(cell);
    }

    
     
    function activateCell(cell) {
        if (activeCell !== cell) {
            if (activeCell) {
                activeCell.style.backgroundColor = ''; // Reset previous cell color
                activeCell.textContent = ''; // Clear click count from previous cell
            }
            activeCell = cell;
            activeCell.dataset.clicks = 0;
            activeCell.style.backgroundColor = 'lightblue'; // Highlight new active cell
            activeCell.textContent = ''; // Initialize click count text
            generateMathQuestion();
        }
        handleCellClick();
        toggleCursorImage()
    }

    function handleCellClick() {
        activeCell.dataset.clicks++;
        activeCell.textContent =  activeCell.dataset.clicks; // Update click count in the cell
    }
    
    function updateClickCounter() {
        if (activeCell) {
            const clickCountText = document.getElementById('clickCountText'); // Get the text container
            clickCountText.textContent = 'Your answer: ' + activeCell.dataset.clicks; // Update text
        }
    }
    
        const confirmButton = document.createElement('button');
        confirmButton.classList.add('confirm_button');
        confirmButton.textContent = 'Confirm';
        confirmButton.addEventListener('click', checkAnswer);
        clickCounter.appendChild(confirmButton);
    
        function checkAnswer() {
            if (activeCell && parseInt(activeCell.dataset.clicks) === currentAnswer) {
                alert('Correct!');
                // Find the image URL from the current question
                const correctImage = questions.find(q => q.answer === currentAnswer).imageUrl;
                activeCell.style.backgroundImage = `url(${correctImage})`;
                activeCell.style.backgroundSize = 'cover'; // Ensure the image covers the cell
                activeCell.style.backgroundPosition = 'center'; // Center the image in the cell
            } else {
                alert('Nope!Try again!');
            }
        }
        
    
    
        function generateMathQuestion() {
            let questionIndex = Math.floor(Math.random() * questions.length);
            let selectedQuestion = questions[questionIndex];
            mathQuestion.textContent = selectedQuestion.question;
            mathQuestion.classList.add('questions');
            currentAnswer = selectedQuestion.answer;
        }
    });
    