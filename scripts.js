// Student array to store students' information
let students = [
  { Fname: "Anteneh", Lname: "Lakew", Email: "Anteneh@ccl.com", Telephone: "222-222-2222", subject: "Javascript", instructor: "Elias", grade: 85 },
  { Fname: "Mitiku", Lname: "Kiflemariam", Email: "Mitiku@ccl.com", Telephone: "333-333-3333", subject: "CSS", instructor: "Dylan", grade: 95 },
  { Fname: "Alex", Lname: "Lagebo", Email: "Alex@ccl.com", Telephone: "444-444-4444", subject: "HTML", instructor: "Filmon", grade: 90 }
];

// Function to display all students in a pop-up modal
// function DisplayStudents() {
//   let studentList = "";
  // students.forEach((student, index) => {
  //   studentList += `
  //     Student ${index + 1}: \n
  //     First Name: ${student.Fname}
  //     Last Name: ${student.Lname}
  //     Email: ${student.Email}
  //     Telephone: ${student.Telephone}
  //     Subject: ${student.subject}
  //     Instructor: ${student.instructor}
  //     Grade: ${student.grade}
  //   `;
  // });


  // Display the student list in a pop-up
//   alert(studentList);
// }


function DisplayStudents(){

  let studentlist = document.getElementById("studentlist");
  studentlist.innerHTML="";

  students.forEach((student, index) => {
  let listitem = document.createElement("div");
   
  listitem.innerHTML = `<strong>STUDENT ${index + 1}: </Strong><br>
  \n\n<br>
  First Name: ${student.Fname}<br>
  Last Name: ${student.Lname}<br>
  Email: ${student.Email}<br>
  Telephone: ${student.Telephone}<br>
  Subject: ${student.subject}<br> 
  Instructor: ${student.instructor}<br>
  Grade: ${student.grade}<br>

  \n***********************\n`;
  studentlist.appendChild(listitem);

   });
};
  
   document.getElementById("dsply").addEventListener("click",DisplayStudents);





// Function to calculate the average grade and show it in a pop-up
function CalculateAverage() {
  const totalGrade = students.reduce((acc, student) => acc + student.grade, 0);
  const average = totalGrade / students.length;
  alert(`The average grade is: ${average.toFixed(2)}`);
}

// Function to search for a student by name and display the result in a pop-up
function SearchStudent() {
  const searchName = document.getElementById("searchName").value.trim().toLowerCase();
  if (searchName === "") {
    alert("Please enter a student name to search.");
    return;
  }

  const foundStudents = students.filter(student => {
    return student.Fname.toLowerCase().includes(searchName) || student.Lname.toLowerCase().includes(searchName);
  });

  if (foundStudents.length > 0) {
    let result = "";
    foundStudents.forEach(student => {
      result += `
        Student Found: \n
        First Name: ${student.Fname}
        Last Name: ${student.Lname}
        Email: ${student.Email}
        Telephone: ${student.Telephone}
        Subject: ${student.subject}
        Instructor: ${student.instructor}
        Grade: ${student.grade}
      `;
    });
      // Clear form field
  document.getElementById("searchName").value = "";

    alert(result);
  } else {
    alert("No student found with that name.");
  }
}

// Function to add a new student to the array
function AddNewStudent(event) {
  event.preventDefault(); // Prevent form from refreshing the page

  const Fname = document.getElementById("Fname").value;
  const Lname = document.getElementById("Lname").value;
  const Email = document.getElementById("Email").value;
  const Telephone = document.getElementById("Telephone").value;
  const subject = document.getElementById("subject").value;
  const instructor = document.getElementById("instructor").value;
  const grade = parseInt(document.getElementById("grade").value);

  // Add the new student to the array
  students.push({ Fname, Lname, Email, Telephone, subject, instructor, grade });

  // Clear form fields
  document.getElementById("Fname").value = "";
  document.getElementById("Lname").value = "";
  document.getElementById("Email").value = "";
  document.getElementById("Telephone").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("instructor").value = "";
  document.getElementById("grade").value = "";

  alert(`${Fname} has been added to the student list.`);
}

// Event listeners for buttons
document.getElementById("dsply").addEventListener("click", DisplayStudents);
document.getElementById("avg").addEventListener("click", CalculateAverage);
document.getElementById("srch").addEventListener("click", SearchStudent);
document.getElementById("add").addEventListener("click", AddNewStudent);
