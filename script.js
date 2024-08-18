const quizData = [
    // Basic Earth Facts
    {
        question: "What is the third planet from the Sun?",
        a: "Mars",
        b: "Earth",
        c: "Venus",
        d: "Jupiter",
        correct: "b"
    },
    {
        question: "Approximately how old is the Earth?",
        a: "4.5 million years",
        b: "4.5 billion years",
        c: "4.5 trillion years",
        d: "450 million years",
        correct: "b"
    },
    {
        question: "What percentage of the Earth's surface is covered by water?",
        a: "50%",
        b: "60%",
        c: "70%",
        d: "80%",
        correct: "c"
    },
    {
        question: "What is the Earth's only natural satellite?",
        a: "Mars",
        b: "Moon",
        c: "Sun",
        d: "Venus",
        correct: "b"
    },
    {
        question: "What is the shape of the Earth?",
        a: "Flat",
        b: "Round",
        c: "Oblate spheroid",
        d: "Cube",
        correct: "c"
    },

    // Continents and Oceans
    {
        question: "Which is the largest continent on Earth?",
        a: "Africa",
        b: "Asia",
        c: "North America",
        d: "Europe",
        correct: "b"
    },
    {
        question: "What is the smallest continent on Earth by land area?",
        a: "Europe",
        b: "Australia",
        c: "Antarctica",
        d: "South America",
        correct: "b"
    },
    {
        question: "Which is the largest ocean on Earth?",
        a: "Atlantic Ocean",
        b: "Indian Ocean",
        c: "Arctic Ocean",
        d: "Pacific Ocean",
        correct: "d"
    },
    {
        question: "How many continents are there on Earth?",
        a: "5",
        b: "6",
        c: "7",
        d: "8",
        correct: "c"
    },
    {
        question: "Which continent has the most countries?",
        a: "Africa",
        b: "Asia",
        c: "Europe",
        d: "South America",
        correct: "a"
    },

    // Earth's Layers
    {
        question: "What is the outermost layer of the Earth?",
        a: "Mantle",
        b: "Core",
        c: "Crust",
        d: "Lithosphere",
        correct: "c"
    },
    {
        question: "Which layer of the Earth is liquid?",
        a: "Inner Core",
        b: "Outer Core",
        c: "Mantle",
        d: "Crust",
        correct: "b"
    },
    {
        question: "What layer of the Earth do we live on?",
        a: "Core",
        b: "Mantle",
        c: "Crust",
        d: "Atmosphere",
        correct: "c"
    },
    {
        question: "Which is the hottest layer of the Earth?",
        a: "Crust",
        b: "Mantle",
        c: "Outer Core",
        d: "Inner Core",
        correct: "d"
    },
    {
        question: "Which layer of the Earth is composed mostly of iron and nickel?",
        a: "Crust",
        b: "Mantle",
        c: "Core",
        d: "Lithosphere",
        correct: "c"
    },

    // Earth's Atmosphere
    {
        question: "What is the most abundant gas in the Earth's atmosphere?",
        a: "Oxygen",
        b: "Hydrogen",
        c: "Carbon Dioxide",
        d: "Nitrogen",
        correct: "d"
    },
    {
        question: "What is the outermost layer of Earth's atmosphere?",
        a: "Troposphere",
        b: "Stratosphere",
        c: "Mesosphere",
        d: "Exosphere",
        correct: "d"
    },
    {
        question: "Which atmospheric layer contains the ozone layer?",
        a: "Troposphere",
        b: "Stratosphere",
        c: "Mesosphere",
        d: "Thermosphere",
        correct: "b"
    },
    {
        question: "Which layer of the atmosphere do airplanes typically fly in?",
        a: "Troposphere",
        b: "Stratosphere",
        c: "Mesosphere",
        d: "Thermosphere",
        correct: "b"
    },
    {
        question: "What is the approximate percentage of oxygen in Earth's atmosphere?",
        a: "21%",
        b: "50%",
        c: "78%",
        d: "95%",
        correct: "a"
    },

    // Natural Phenomena
    {
        question: "What is the most common type of volcanic rock on Earth?",
        a: "Granite",
        b: "Basalt",
        c: "Pumice",
        d: "Obsidian",
        correct: "b"
    },
    {
        question: "What is the longest river on Earth?",
        a: "Amazon",
        b: "Nile",
        c: "Yangtze",
        d: "Mississippi",
        correct: "b"
    },
    {
        question: "What is the Earth's largest desert?",
        a: "Sahara",
        b: "Arctic",
        c: "Gobi",
        d: "Kalahari",
        correct: "a"
    },
    {
        question: "What is the tallest mountain on Earth?",
        a: "K2",
        b: "Kangchenjunga",
        c: "Lhotse",
        d: "Mount Everest",
        correct: "d"
    },
    {
        question: "What is the largest hot desert on Earth?",
        a: "Gobi Desert",
        b: "Sahara Desert",
        c: "Arabian Desert",
        d: "Kalahari Desert",
        correct: "b"
    },

    // Geography and Landmarks
    {
        question: "What is the largest country by land area?",
        a: "Canada",
        b: "China",
        c: "Russia",
        d: "United States",
        correct: "c"
    },
    {
        question: "What is the smallest country in the world?",
        a: "Monaco",
        b: "Nauru",
        c: "San Marino",
        d: "Vatican City",
        correct: "d"
    },
    {
        question: "Which country has the most natural lakes?",
        a: "Canada",
        b: "Brazil",
        c: "Russia",
        d: "United States",
        correct: "a"
    },
    {
        question: "Which is the longest river in the United States?",
        a: "Missouri River",
        b: "Mississippi River",
        c: "Colorado River",
        d: "Rio Grande",
        correct: "a"
    },
    {
        question: "Which country is home to the Great Barrier Reef?",
        a: "Australia",
        b: "Indonesia",
        c: "Philippines",
        d: "Thailand",
        correct: "a"
    },

    // Environmental Awareness
    {
        question: "What is the main cause of climate change?",
        a: "Natural disasters",
        b: "Human activities",
        c: "Sunspot cycles",
        d: "Volcanic eruptions",
        correct: "b"
    },
    {
        question: "What process do plants use to produce oxygen?",
        a: "Respiration",
        b: "Photosynthesis",
        c: "Transpiration",
        d: "Fermentation",
        correct: "b"
    },
    {
        question: "Which gas is a major contributor to the greenhouse effect?",
        a: "Oxygen",
        b: "Nitrogen",
        c: "Carbon Dioxide",
        d: "Helium",
        correct: "c"
    },
    {
        question: "What is deforestation?",
        a: "Planting trees",
        b: "Removing trees",
        c: "Building forests",
        d: "Flooding areas",
        correct: "b"
    },
    {
        question: "Which renewable energy source uses the power of moving water?",
        a: "Solar energy",
        b: "Wind energy",
        c: "Hydroelectric energy",
        d: "Geothermal energy",
        correct: "c"
    },

    // Earth's Features
    {
        question: "What is the Earth's circumference approximately?",
        a: "20,000 km",
        b: "30,000 km",
        c: "40,000 km",
        d: "50,000 km",
        correct: "c"
    },
    {
        question: "What is the deepest point in the Earth's oceans?",
        a: "Mariana Trench",
        b: "Java Trench",
        c: "Puerto Rico Trench",
        d: "Tonga Trench",
        correct: "a"
    },
    {
        question: "What is the largest island in the world?",
        a: "Greenland",
        b: "New Guinea",
        c: "Borneo",
        d: "Madagascar",
        correct: "a"
    },
    {
        question: "What is the second largest country by land area?",
        a: "China",
        b: "Canada",
        c: "Russia",
        d: "United States",
        correct: "b"
    },
    {
        question: "What is the world's largest river by volume?",
        a: "Nile",
        b: "Amazon",
        c: "Congo",
        d: "Yangtze",
        correct: "b"
    },

    // Earth's Movement and Rotation
    {
        question: "How long does it take for the Earth to orbit the Sun?",
        a: "365 days",
        b: "24 hours",
        c: "28 days",
        d: "365.25 days",
        correct: "d"
    },
    {
        question: "What causes day and night on Earth?",
        a: "Earth's orbit around the Sun",
        b: "Earth's rotation on its axis",
        c: "The moon's phases",
        d: "Sun's rotation",
        correct: "b"
    },
    {
        question: "What is a leap year?",
        a: "A year with 365 days",
        b: "A year with 364 days",
        c: "A year with 366 days",
        d: "A year with 363 days",
        correct: "c"
    },
    {
        question: "What causes the seasons on Earth?",
        a: "Distance from the Sun",
        b: "Earth's axial tilt",
        c: "Moon's phases",
        d: "Sunspot cycles",
        correct: "b"
    },
    {
        question: "What is the shortest day of the year called?",
        a: "Winter Solstice",
        b: "Summer Solstice",
        c: "Autumn Equinox",
        d: "Spring Equinox",
        correct: "a"
    },

    // Earth's Ecosystems
    {
        question: "What is the largest rainforest in the world?",
        a: "Congo Rainforest",
        b: "Amazon Rainforest",
        c: "Daintree Rainforest",
        d: "Valdivian Rainforest",
        correct: "b"
    },
    {
        question: "What is the coldest biome on Earth?",
        a: "Tundra",
        b: "Desert",
        c: "Taiga",
        d: "Rainforest",
        correct: "a"
    },
    {
        question: "Which is the most biologically diverse biome on Earth?",
        a: "Tundra",
        b: "Desert",
        c: "Rainforest",
        d: "Grassland",
        correct: "c"
    },
    {
        question: "What is the world's largest coral reef system?",
        a: "Great Barrier Reef",
        b: "New Caledonia Barrier Reef",
        c: "Mesoamerican Barrier Reef",
        d: "Florida Reef",
        correct: "a"
    },
    {
        question: "Which of these is not a forest biome?",
        a: "Tropical Rainforest",
        b: "Temperate Forest",
        c: "Savanna",
        d: "Boreal Forest",
        correct: "c"
    },

    // Natural Resources
    {
        question: "Which country is the largest producer of crude oil?",
        a: "United States",
        b: "Saudi Arabia",
        c: "Russia",
        d: "Canada",
        correct: "a"
    },
    {
        question: "What is the main source of energy for the Earth?",
        a: "Coal",
        b: "Wind",
        c: "Sun",
        d: "Geothermal",
        correct: "c"
    },
    {
        question: "What is the most widely used metal on Earth?",
        a: "Copper",
        b: "Aluminum",
        c: "Iron",
        d: "Silver",
        correct: "c"
    },
    {
        question: "Which country is the largest producer of diamonds?",
        a: "Australia",
        b: "Russia",
        c: "South Africa",
        d: "Botswana",
        correct: "b"
    },
    {
        question: "What is the most abundant mineral in the Earth's crust?",
        a: "Quartz",
        b: "Feldspar",
        c: "Mica",
        d: "Calcite",
        correct: "b"
    }
];

let currentQuestionIndex = 0;
let score = 0;
const userAnswers = [];

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const submitBtn = document.getElementById('submit-btn');
const resultEl = document.getElementById('result');
const questionCounterEl = document.getElementById('question-counter');

function handleAnswer(selectedAnswer) {
    const correctAnswer = quizData[currentQuestionIndex].correct;
    if (selectedAnswer === correctAnswer) {
        score++;
        document.querySelector(`li[data-answer="${selectedAnswer}"]`).classList.add('correct');
    } else {
        document.querySelector(`li[data-answer="${selectedAnswer}"]`).classList.add('incorrect');
        document.querySelector(`li[data-answer="${correctAnswer}"]`).classList.add('correct');
    }
    userAnswers.push({
        question: quizData[currentQuestionIndex].question,
        selected: selectedAnswer,
        correct: correctAnswer
    });
}


function loadQuestion() {
    const currentQuizData = quizData[currentQuestionIndex];
    questionEl.innerText = currentQuizData.question;
    optionsEl.innerHTML = `
        <li data-answer="a">${currentQuizData.a}</li>
        <li data-answer="b">${currentQuizData.b}</li>
        <li data-answer="c">${currentQuizData.c}</li>
        <li data-answer="d">${currentQuizData.d}</li>
    `;
    questionCounterEl.innerText = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
    optionsEl.querySelectorAll('li').forEach(li => {
        li.classList.remove('correct', 'incorrect');
    });
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = quizData[currentQuestionIndex].correct;
    userAnswers.push({
        question: quizData[currentQuestionIndex].question,
        selected: selectedAnswer,
        correct: correctAnswer
    });
    if (selectedAnswer === correctAnswer) {
        score++;
    }
}

function displayResults() {
    let resultHtml = `<h3>Quiz Completed!</h3>`;
    resultHtml += `<p>You scored ${score}/${quizData.length}.</p>`;
    resultHtml += `<h4>Your Answers:</h4>`;
    resultHtml += `<ul>`;
    
    userAnswers.forEach(answer => {
        const correctAnswer = quizData.find(q => q.question === answer.question)[answer.correct];
        const userAnswer = quizData.find(q => q.question === answer.question)[answer.selected];

        const resultClass = answer.selected === answer.correct ? 'correct' : 'incorrect';
        
        resultHtml += `
            <li class="${resultClass}">
                <strong>${answer.question}</strong><br>
                Your answer: ${userAnswer}<br>
                Correct answer: ${correctAnswer}
            </li>
        `;
    });
    
    resultHtml += `</ul>`;
    resultEl.innerHTML = resultHtml;

    // Hide quiz content and show results
    questionEl.style.display = 'none';
    optionsEl.style.display = 'none';
    submitBtn.style.display = 'none';
}


optionsEl.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const selectedAnswer = e.target.getAttribute('data-answer');
        handleAnswer(selectedAnswer);
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            setTimeout(() => {
                loadQuestion();
            }, 300); // Short delay to show feedback
        } else {
            setTimeout(() => {
                displayResults();
            }, 300); // Short delay to show feedback
        }
    }
});

submitBtn.addEventListener('click', () => {
    const confirmation = confirm("You have to complete answering the questions before viewing result");
    if (confirmation) {
        displayResults();
    }
});

loadQuestion();