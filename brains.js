function getRandomFromArray(arrayCount) {
    return Math.floor(Math.random() * (arrayCount));
}

function generateDegree() {

    var kindOfDegree = ["Bachelor of Science", "Bachelor of Arts", "Bachelor of Fine Arts", "Bachelor of Business Administration", "Master of Science", "Master of Arts", "Master of Fine Arts", "Master of Business Administration", "Doctor of Philosophy"];
    var subjectAreaAdj = ["Astro", "Bio-", "Anthro", "telepathic ", "Paleo-", "Industrial ", "Electrical ", "Mechanical ", "Aerospace ", "Ergonomic ", "Underwater ", "Quantum ", "Magnetic ", "Crypto", "Organizational ", "Nautical "];
    var subjectAreaNoun = ["Biology", "Physics", "Computer Hackery", "Wizardy", "Archeology", "Astrology", "Design", "Anthropology", "Engineering", "Science", "Alchemy", "Chemistry", "Arts", "Literature", "Medicine", "Management"];

    return kindOfDegree[getRandomFromArray(9)] +  " " + subjectAreaAdj[getRandomFromArray(16)] + subjectAreaNoun[getRandomFromArray(16)];
}

function generateDegreeDate() {
    var today = new Date();
    
    var datesEnglish = ["zero!!!", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eigth", "Ninth", "Tenth", "Eleventh", "Twelveth", "Thirteenth", "Fourteenth", "Fifteenth", "Sixteeth", "Seventeenth", "Eighteenth", "Nineteenth", "Twentyith", "Twenty-first", "Twenty-second", "Twenty-third", "Twenty-fourth", "Twenty-fifth", "Twenty-sixth", "Twenty-seventh", "Twenty-eigth", "Twenty-ninth", "Thirtyith", "Thirty-first"];
    var monthsEnglish = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var yearsEnglish = ["Two Thousand and Thirteen", "Two Thousand and Fourteen", "Two Thousand and Fifteen", "Two Thousand and Sixteen", "Two Thousand and Seventeen", "Two Thousand and Eighteen", "Two Thousand and Nineteen", "Two Thousand and Twenty"];
    
    return datesEnglish[today.getDate()] + " day of " + monthsEnglish[today.getMonth()] + ", " + yearsEnglish[(today.getFullYear() - 2013)];

}