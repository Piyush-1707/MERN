document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const result = document.getElementById('result');
    const bmiImage = document.getElementById('bmiImage');
    const progressContainer = document.getElementById('progressContainer');
    const progressBar = document.getElementById('progressBar');
    const tips = document.getElementById('tips');

    if (!weight || !height || height <= 0) {
        result.innerText = "Please enter valid inputs.";
        bmiImage.classList.remove('show');
        progressContainer.style.display = 'none';
        tips.innerHTML = '';
        return;
    }

    const bmi = weight / (height * height);
    let category = "";
    let imageSrc = "";
    let barColor = "#00bfff";
    let barPercent = 0;
    let dos = [];
    let donts = [];

    if (bmi < 18.5) {
        category = "Underweight";
        imageSrc = "underweight.png";
        barColor = "#ffcc00";
        barPercent = 20;
        dos = [
            "Eat more frequent, balanced meals",
            "Include healthy fats and protein",
            "Do strength training exercises"
        ];
        donts = [
            "Skip meals",
            "Rely on junk food for weight gain",
            "Ignore fatigue or weakness"
        ];
    } else if (bmi < 24.9) {
        category = "Normal weight";
        imageSrc = "normal.png";
        barColor = "#28a745";
        barPercent = 50;
        dos = [
            "Continue balanced diet and hydration",
            "Exercise regularly (cardio + strength)",
            "Sleep at least 7–8 hours"
        ];
        donts = [
            "Get complacent with fitness",
            "Ignore regular checkups",
            "Skip meals or overeat"
        ];
    } else if (bmi < 29.9) {
        category = "Overweight";
        imageSrc = "overweight.png";
        barColor = "#ff851b";
        barPercent = 75;
        dos = [
            "Monitor calorie intake",
            "Add more fruits and veggies",
            "Do cardio and strength workouts"
        ];
        donts = [
            "Crash diet",
            "Consume high sugar/soda",
            "Live sedentary lifestyle"
        ];
    } else {
        category = "Obese";
        imageSrc = "obese.png";
        barColor = "#dc3545";
        barPercent = 100;
        dos = [
            "Consult a dietician or physician",
            "Adopt a structured exercise plan",
            "Stay motivated and track progress"
        ];
        donts = [
            "Ignore health symptoms",
            "Use unverified weight-loss methods",
            "Expect rapid results"
        ];
    }

    // Update result text
    result.innerText = `Your BMI is ${bmi.toFixed(2)} (${category}).`;

    // Update image
    bmiImage.src = imageSrc;
    bmiImage.classList.add('show');

    // Update progress bar
    progressContainer.style.display = 'block';
    progressBar.style.width = `${barPercent}%`;
    progressBar.style.backgroundColor = barColor;

    // Update tips section
    tips.innerHTML = `
      <h3 style="color:#ffc107;">Do's:</h3>
      <ul>${dos.map(item => `<li>${item}</li>`).join('')}</ul>
      <h3 style="color:#dc3545;">Don'ts:</h3>
      <ul>${donts.map(item => `<li>${item}</li>`).join('')}</ul>
    `;
});
