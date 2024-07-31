import { Student, students, Subject, Subjects } from "../models/student";
import { renderStudents } from "../views/students";
import { renderAllSubjects, renderFormSubject, renderUpdateSubject } from "../views/subject";


export function addStudent(event: any) {
    try {
        event.preventDefault();
        const name = event.target.studentName.value;
        students.push(new Student(name));
        renderStudents();
        event.target.reset();

    } catch (error) {
        console.error(error);
    }
}


export function addSubjectForm(event: any): void {
    try {
        const id = event.target.id;
        console.log('addSubject', event.target.id);
        const studentElement = document.getElementById(`a${id}`) as HTMLDivElement;
        let subjects = '';

        students.forEach(student => {
            if (student.id === id) {
                subjects += renderAllSubjects(student.grades, id);
            }

        });
        // const subjects = renderAllSubjects();
        const addSubjectInput = renderFormSubject(id);

        studentElement.innerHTML += subjects + addSubjectInput;

        //add event listener to the add subject buttons
        const addnewSubject = document.querySelectorAll('#add-subject-form');

        if (addnewSubject)
            addnewSubject.forEach(button => button.addEventListener('submit', addSubject));

        //add event listener to the edit subject buttons
        const editButtons = document.querySelectorAll('[name="edit"]');


        if (editButtons)
            editButtons.forEach(button => button.addEventListener('click', editSubject));



    } catch (error) {
        console.error(error);
    }
}


export function deleteStudent(event: any): void {
    try {
        const id = event.target.id;
        const studentElement = students.findIndex(student => student.id === id);
        students.splice(studentElement, 1);
        console.log('student deleted', id);
        renderStudents();
    } catch (error) {
        console.error(error);
    }
}


export function addSubject(event: any): void {
    try {
        event.preventDefault();
        const id = event.target.id.id;
        const subject = event.target.subject.value;
        const grade = event.target.grade.value;
        console.log("subject", subject, "grade", grade, "id", id);

        if (subject === undefined || subject === null || subject === '' ||
            grade === undefined || grade === null || grade === '') {
            throw new Error('subject or grade is undefined');
        }
        const student = students.find(student => student.id === id);
        console.log('student', student);
        if (student) {
            student.addSubject(subject, parseInt(grade));
            renderStudents();
        }
        event.target.reset();
    } catch (error) {
        console.error(error);
    }
}

function editSubject(event: any): void {
    try {
        const [subjectId, studentId] = event.target.id.split('@');
        console.log('subjectId', subjectId, 'studentId', studentId);
        const student = students.find(student => student.id === studentId);
        if (student) {
            const subject: Subject[] = student.grades.filter(subject => subject.id === subjectId);
            const subjectDiv = document.getElementById(`subject-${subjectId}`) as HTMLDivElement;
            console.log('subject', subject);
            subjectDiv.innerHTML = renderUpdateSubject(subject[0], studentId)
        }
    } catch (error) {
        console.error(error);
    }
}