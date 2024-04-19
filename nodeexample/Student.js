"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(sid, fname, marks) {
        this.sid = sid;
        this.fname = fname;
        this.marks = marks;
    }
    Student.prototype.getSid = function () {
        return this.sid;
    };
    Student.prototype.printStudent = function () {
        console.log("Student Id: " + this.sid);
        console.log("Student Name: " + this.fname);
        console.log("Student Marks: " + this.marks);
    };
    return Student;
}());
exports.Student = Student;
