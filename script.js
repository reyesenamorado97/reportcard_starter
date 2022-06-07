/*
COMPLETE THE FOLLOWING TASKS WITHOUT MODIFYING ANY OF THE CODE IN THE HTML OR CSS FILE.

You should only write code in the JavaScript functions below, 
as well as update the `studentInformation` object with your personal information.

Each function is annotated with a comment explaining what it should do.

By the end of the lab, all tests in the report should be passing.
*/

const studentInformation = {
  name: "Robert Reyes-Enamorado",
  grade: "Sophmore",
  advisor: "SpongeBob Squarepants",
  major: "Computer Science",
  graduationYear: "2024",
  imageUrl: "data:image/jpeg;base64,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"
}

let semester = "Spring Semester"

const studentData = {
  "Spring Semester": [
    { code: "LIT 101", name: "English Literature 101", semester: "Spring 2021", credits: 5, grade: "B+" },
    { code: "CS 50", name: "Intro to Computer Science", semester: "Spring 2021", credits: 5, grade: "A-" },
    { code: "WD 140", name: "Modern Web Development", semester: "Spring 2021", credits: 5, grade: "A+" },
    { code: "JS 2.0", name: "Serverside JavaScript", semester: "Spring 2021", credits: 10, grade: "A-" },
  ],
  "Fall Semester": [
    { code: "Math 600", name: "Differential Equations", semester: "Fall 2020", credits: 5, grade: "A-" },
    { code: "CS 10", name: "Python Programming", semester: "Fall 2020", credits: 5, grade: "A" },
    { code: "History 99", name: "History of Computers", semester: "Fall 2020", credits: 5, grade: "A-" },
    { code: "MD 00", name: "Meditation and Mindfullness", semester: "Fall 2020", credits: 5, grade: "A+" },
  ],
  "Winter Term": [
    { code: "PHYS ED", name: "Physical Activity", semester: "Winter 2020", credits: 5, grade: "A-" },
    { code: "GEN ED", name: "General Education Requirement", semester: "Winter 2020", credits: 5, grade: "A+" },
  ],
}

const gpaPointsLookup = {
  "A+": 4.0,
  A: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C: 2.0,
  "C-": 1.7,
  "D+": 1.3,
  D: 1.0,
  "D-": 0.7,
  F: 0.0,
}

/**
 * QUERY SELECTORS VARIABLES GO HERE
 */
const dropdownEl = document.querySelector(".dropdown")

const studentNameQuery = document.querySelector("#student-name")
const advisorQuery = document.querySelector("#student-advisor")
const majorQuery = document.querySelector("#student-major")
const gradeQuery = document.querySelector("#student-grade-level")
const gradYearQuery = document.querySelector("#student-graduation-year")
const imgQuery = document.querySelector("#student-image")


// ADD more query selectors here
const semesterDropDownQuery = document.querySelector(".semester-dropdown")
const semesterDropButtonQuery = document.querySelector(".dropdown-button")
const semesterDropLabelQuery = document.querySelector(".dropdown-label")
const semesterDropIconQuery = document.querySelector(".dropdown-icon")

/**
 * SOLUTIONS FOR STUDENT INFO DOM UPDATES
 */

/**
 * Modify the report card to display the correct grade level from the lookup table above.
 *
 * @param {String} studentName - the name of the student
 */
function updateStudentName(studentName) {
  // code goes here
  //studentName = studentInformation.name
  studentNameQuery.innerHTML = studentName
  

}

/**
 * Modify the report card to display the correct grade level from the lookup table above.
 *
 * @param {String|Number} studentGradeLevel - the grade level of the student
 */
function updateStudentGradeLevel(studentGradeLevel) {
  // code goes here
  gradeQuery.innerHTML = studentGradeLevel
}

/**
 * Modify the report card to display the correct advisor from the lookup table above.
 *
 * @param {String} studentAdvisor - the advisor of the student
 */
function updateStudentAdvisor(studentAdvisor) {
  advisorQuery.innerHTML = studentAdvisor
  // code goes here
}

/**
 * Modify the report card to display the correct major from the lookup table above.
 *
 * @param {String} studentMajor - the major of the student
 */
function updateMajor(studentMajor) {
  majorQuery.innerHTML = studentMajor
}

/**
 * Modify the report card to display the correct graduation year from the lookup table above
 *
 * @param {Number} graduationyear - the year the student graduates
 */
function updateStudentGraduationYear(graduationYear) {
  gradYearQuery.innerHTML = graduationYear
}

/**
 * Modify the img element using `setAttribute` so that that the src attribute
 * stores the link to your image.
 *
 * @param {String} url - a link to an image
 */
function updateStudentImage(imageUrl) {

imgQuery.src = imageUrl
}

/**
 * This function should run as soon as the page loads and update the correct student info
 */
function populateStudentInfo(studentInformationObject) {
  updateStudentName(studentInformationObject.name)
  updateStudentGradeLevel(studentInformationObject.grade)
  updateStudentAdvisor(studentInformationObject.advisor)
  updateMajor(studentInformationObject.major)
  updateStudentGraduationYear(studentInformationObject.graduationYear)
  updateStudentImage(studentInformationObject.imageUrl)
}

/**
 * SOLUTION FOR INNER HTML DOM UPDATES
 */

/**
 * This function should add a headers row to the report card table
 */
function addReportCardHeaders(reportCardTableElement) {
  // update the code here
  reportCardTableElement.innerHTML += ` 
  <div class="table-row table-header">
  <h4 class="code-col">Code</h4>
    <h4 class="name-col">Name</h4>
    <h4 class="sem-col">Semester</h4>
    <h4 class="cred-col">Credits</h4>
    <h4 class="lett-col">Letter</h4>
    <h4 class="pts-col">Points</h4>
  </div>
  `
  
}

/**
 * This function should take in a single course and create a row with the
 * course code, course name, course semester, course credits, course letter grade, and course points columns.
 *
 * @param {Object} course
 * @param {Number} rowNum
 */
function addCourseRowToReportCard(reportCardTableElement, course, rowNum) {
  // update the code here with information about the course passed to this function
  reportCardTableElement.innerHTML += `
  <div class="table-row course-row row-${rowNum + 1} ${rowNum % 2 === 1 ? "odd" : "even"}">
    <h4 class="code-col">${course.code}</h4>
    <h4 class="name-col">${course.name}</h4>
    <h4 class="sem-col">${course.semester}</h4>
    <h4 class="cred-col">${course.credits} credits</h4>
    <h4 class="lett-col">${course.grade}</h4>


  </div>
  `
}

/**
 * This function should add HTML for the totals row in the report card.
 */
function addTotalsRow(reportCardTableElement) {
  reportCardTableElement.innerHTML += ``
}

/**
 * This function should add HTML for the final row in the report card.
 */
function addGpaRow(reportCardTableElement) {
  reportCardTableElement.innerHTML += ``
}

/**
 * This is the primary function used to update the report card when the semester changes
 *
 * It should call the other functions responsible for creating the necessary HTML
 *
 */
function updateReportCard(reportCardTableElement, currentSemester) {
  // update the dropdown label
  updateDropdownLabel()
  // reset the report card table's inner html to an empty string
  if (reportCardTableElement) reportCardTableElement.innerHTML = ``

  // add your code here
  addReportCardHeaders(reportCardTableElement, studentData["Spring Semester"],rowNum)
}

/**
 * SOLUTION FOR DROPDOWN EVENT HANDLERS
 */

/**
 * These two functions should be used to toggle the dropdown.
 *
 * If the dropdown classList contains the "closed" class, the 'openDropdown' function should remove it.
 * If the dropdown classList doesn't contain the "closed" class, 'closeDropdown' function should add it.
 */
function closeDropdown(dropdownElement) {
  // code goes here
}

function openDropdown(dropdownElement) {
  // code goes here
}

/**
 * This function should update the inner html of the dropdown label to be the current
 * value stored in the `semester` variable.
 *
 */
function updateDropdownLabel() {
  // code goes here
}

/**
 * This function should add the proper event listeners to the correct DOM elements
 * responsible for managing the state of the dropdown menu.
 *
 */
function addEventListeners(
  dropdownElement,
  dropdownButtonElement,
  reportCardTableElement,
  fallSemesterElement,
  springSemesterElement,
  winterTermElement
) {
  // Add an event listener for the dropdown button that calls the openDropdown function with the correct DOM element
  // Add 3 event listeners - one for the fall semester option, the spring semester option, and the winter term option
  // Each callback function one should update the `semester` variable,
  // call the `updateReportCard` function, and close the dropdown
}

/***************
   CALCULATIONS
****************/

/**
 * Use query selectors on the `reportCardTableElement` element
 * to access the credits the student has earned for each course.
 * Add them up and display the total in the proper location.
 *
 * It may be useful to check for the existence of certain elements
 * before updating the DOM.
 *
 */
function addUpStudentCredits(reportCardTableElement) {
  // code goes here
}

/**
 * Use query selectors on the `reportCardTableElement` element
 * to access the letter grades for each course and convert them to GPA points using
 * the `pointsLookup` object.
 *
 * That English Literature grade is keeping us from all A's! Let's see if we can't update that to an A-
 * since we definitely deserve it after a hard semester of work.
 *
 * Then perform a quick calculation and update the report card with the total points and
 * cumulative grade point average for the semester.
 *
 */

function calculateSemesterGpa(reportCardTableElement) {
  // code goes here
}

window.onload = function () {
  populateStudentInfo(studentInformation)
  updateReportCard(studentData)

  // execute your functions here to make sure they run as soon as the page loads
}
