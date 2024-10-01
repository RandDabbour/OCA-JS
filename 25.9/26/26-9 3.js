"use strict";

const studentNames = ["John", "Sara", "Tom", "Emily"];
const studentScores = [90, 85, 75, 95];

function getElement(id) {
    return document.getElementById(id);
}

window.onload = function() {
    getElement('addScoreBtn').onclick = addNewScore;
    getElement('showResultsBtn').onclick = showScoreResults;
    getElement('showScoresBtn').onclick = showAllScores;
    getElement('nameInput').focus();  
};

function addNewScore() {
    const name = getElement('nameInput').value.trim();
    const score = parseInt(getElement('scoreInput').value);
    if (name && !studentNames.includes(name) && score >= 0 && score <= 100) {
        studentNames.push(name);
        studentScores.push(score);
        getElement('nameInput').value = '';
        getElement('scoreInput').value = '';
        getElement('nameInput').focus();  
    } else {
        alert('Please enter a unique name and a valid score (0-100)');
    }
}

function showScoreResults() {
    if (studentScores.length === 0) {
        getElement('resultDisplay').innerHTML = '<h2>No scores available</h2>';
        return;
    }
    const totalScore = studentScores.reduce((total, score) => total + score, 0);
    const averageScore = totalScore / studentScores.length;
    const highestScore = Math.max(...studentScores);
    const topStudentIndex = studentScores.indexOf(highestScore);
    const topStudent = studentNames[topStudentIndex];

    const resultsHTML = `<h2>Results</h2>
                         <p>Average Score: ${averageScore.toFixed(2)}</p>
                         <p>Highest Score: ${topStudent} with a score of ${highestScore}</p>`;
    getElement('resultDisplay').innerHTML = resultsHTML;
}

function showAllScores() {
    const scoresTableBody = getElement('scoresTable').getElementsByTagName('tbody')[0];
    scoresTableBody.innerHTML = ''; // Clear previous entries

    for (let i = 0; i < studentNames.length; i++) {
        const row = scoresTableBody.insertRow();
        row.insertCell(0).innerText = studentNames[i];
        row.insertCell(1).innerText = studentScores[i];
    }
}
