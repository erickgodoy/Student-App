class Student{
    constructor(name,lastname,city,phone,gender){
        this.name = name;
        this.lastname = lastname;
        this.city = city;
        this.phone = phone;
        this.gender = gender;
    }
}

class UI{
    addStudent(student){
        const table = document.getElementById('tablecontent');
        
        const element = document.createElement('tr');
        element.innerHTML = `
        <td>${student.name}</td>
        <td>${student.lastname}</td>
        <td>${student.city}</td>
        <td>${student.phone}</td>
        <td>${student.gender}</td>
        <td><button class="btn" name="delete"><i class="fa-solid fa-trash"></i></button></td>
        `;
        table.appendChild(element);
    }

    resetForm(){
        document.getElementById('student-form').reset();
    }

    deleteStudent(){

    }

    showMessage(){

    }
}

//DOM Events
document.getElementById('student-form').addEventListener('submit', function(e){
    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;
    const city = document.getElementById('city').value;
    const phone = document.getElementById('phone').value;
    const gender = document.getElementById('gender').value;
    
    const student = new Student(name,lastname,city,phone,gender);
    const ui = new UI();
    ui.addStudent(student);
    ui.resetForm();
    //cancel refresh
    e.preventDefault();
});