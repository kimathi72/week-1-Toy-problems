// Write a function that prompts the user to input student marks.
// The input should be between 0 and 100.
//  The output should correspond the correct grade, as shown below:

//   A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
// let document;
document();
let rootDiv = document.body.getElementById('root');
document.rootDiv.setAttribute('style' , "backgroundColor: #ccc");

 function renderHtml (rootDiv){
    
    let marksInputForm = document.body.createElement('form');
    marksInputForm.setAttribute("action","calculateGrade");
    rootDiv.appendChild('marksInputForm');
    let textAreaInput = document.body.createElement('textArea');
    textAreaInput.setAttribute("placeholder","Please enter marks!");
    marksInputForm.appendChild('textAreaInput');
    let submitBtn = document.body.createElement('button');
    marksInputForm.appendChild('submitBtn');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.setAttribute('id', 'submitBtn');
    let marks = textAreaInput.innerHTML;
     return rootDiv;
 }
 renderHtml();



document.getElementById('marksInputForm').addEventListener('submit',"submitMarks");
const calculateGrade = (marks) => {
    if (0 <= marks <= 100){
        if (marks > 79){
            let grade = `A`
            return `The grade is  ${grade}`;
        }else if (60<= marks <=79){
            let grade = `B`
            return `the grade is ${grade}`;
        }else if (49< marks <= 59){
            let grade = `C`
            return `the grade is ${grade}`;
        }else if (40< marks <= 49){
            let grade = `D`
            return `the grade is ${grade}`;
        }else {
            let grade = `E`
            return `the grade is ${grade}`;
        }

    } 

}


