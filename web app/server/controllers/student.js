import Student from '../models/student.js';
import Group from '../models/groups.js';

export const createStudent = async (req, res) => {
    const { first, last, year, product, progExp, IntResIndExp, personality } = req.body;
    const newStudent = new Student({ first, last, year, product, progExp, IntResIndExp, personality });
    try {
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const getStudent = async (req, res) => { 
    const { id } = req.params;
    try {
        const student = await Student.findById(id);
        
        res.status(200).json(student);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const getStudents = async (req, res) => { 
    try {
        const students = await Student.find();
        
        res.status(200).json(students);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
function makeMember(first, last) {
    return {
        first: first,
        last: last
    }
}
function makeTeam(teamNumber, team){
    return {
        num: teamNumber,
        members: team
    }
}

async function createGroup(teamNumber, team) {
    try {
        const newGroup = new Group(makeTeam(teamNumber, team));

        await newGroup.save();
    } catch (error) {
        console.log({ message: "error"});
    }
}

export const createGroups = async (req, res) => {
    try {
        console.log("writing groups..");
        // gets an array of all students
        const students = await Student.find();
        

        // find how many teams based on team size
        const numStudentsPerTeam = 4;
        //const numTeams = students.length/numStudentsPerTeam
        let numTeamsWithExtra = students.length%numStudentsPerTeam;
        //console.log("Number of 5 man teams",numTeamsWithExtra)
        

        // put 4 of each students into a team
        //let teams = [];
        let team = [];

        let teamNumber = 0;
        let count = 0;
        students.map((stud)=>{
            
            team.push(makeMember(stud.first, stud.last));
            if(numTeamsWithExtra>0){
                if(count%5 == 4){
                    createGroup(teamNumber, team);
                    teamNumber++;
                    team = [];
                    count = -1;
                    numTeamsWithExtra--;
                }
            }
            else{
                if(count%4 == 3){
                    createGroup(teamNumber, team);
                    teamNumber++;
                    team = [];
                    count = -1;
                }
            }
            count++;
        })
        //res.status(200);
        //console.log("Printing",teams)
        //return teams;
    } catch (error) {
        console.log("Error",error.message);
    }
}