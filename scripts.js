// Function to calculate the total score based on the given criteria
function calculateScore(htmlStructure, accessibilityFeatures, cssStyle, jsInteractivity, responsiveCss) {
    let score = 0;

    // Check if HTML structure is used
    if (htmlStructure) {
        score += 5;
    }

    // Check if accessibility features are included
    if (accessibilityFeatures) {
        score += 3;
    }

    // Check if CSS is used for styling
    if (cssStyle) {
        score += 5;
    }

    // Check if JavaScript is used for interactivity
    if (jsInteractivity) {
        score += 5;
    }

    // Check if CSS ensures responsiveness
    if (responsiveCss) {
        score += 2;
    }

    return score;
}

// Example usage
const htmlStructure = true;
const accessibilityFeatures = true;
const cssStyle = true;
const jsInteractivity = true;
const responsiveCss = true;

const totalScore = calculateScore(htmlStructure, accessibilityFeatures, cssStyle, jsInteractivity, responsiveCss);
console.log(`Total Score: ${totalScore}`);