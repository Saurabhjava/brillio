export class Student {
    private sid: number;
    private fname: String;
    private marks: number;

    constructor(sid: number, fname: String, marks: number) {
        this.sid = sid;
        this.fname = fname;
        this.marks = marks;
    }
    getSid() {
        return this.sid;
    }
    printStudent() {
        console.log("Student Id: " + this.sid);
        console.log("Student Name: " + this.fname);
        console.log("Student Marks: " + this.marks);
    }
}
