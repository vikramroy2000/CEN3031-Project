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
        Group.deleteMany({}, function(err, result) {
            if (err) {
                console.err(err);
              } else {
                console.log("Succesfully removed all groups")
              }
        });
        
        
        function rankingSorter(firstKey, secondKey, thirdkey) {
            return function(a, b) {
                // first sorts by internship experience (with 1 or more first then none)
                if (a[firstKey] < b[firstKey]) {  
                    return -1;  
                } else if (a[firstKey] > b[firstKey]) {  
                    return 1;  
                }  
                else {
                    // then sorts by personality with extrovert first
                    if (a[secondKey] > b[secondKey]) {  
                        return 1;  
                    } else if (a[secondKey] < b[secondKey]) {  
                        return -1;  
                    } else {
                        // then sort by what product to make
                        if (a[thirdkey] > b[thirdkey]) {  
                            return 1;  
                        } else if (a[thirdkey] < b[thirdkey]) {  
                            return -1;  
                        } else {
                            return 0;
                        }
                    }
                } 
            }  
        }

        
        // gets an array of all students
        let students = await Student.find()

        // find how many teams based on team size
        const numStudentsPerTeam = 4;
        const numTeams = parseInt(students.length/numStudentsPerTeam)
        //let numTeamsWithExtra = students.length%numStudentsPerTeam;
        
        
        // first sort: Attempts to put one advanced on every team, some teams may have more than one advanced programmer
        students.sort((elem1,elem2)=>{
            var progEx1 = elem1.progExp
            var progEx2 = elem2.progExp
            if (progEx1 < progEx2) {
                return -1;
              }
            else if (progEx1 > progEx2) {
                return 1;
              }
              return 0;
        })

        
        // assigns each student to a team
        let teams = students.map((stud,count)=>{
            return {teamNumber: count, teamMembers: [stud]}
        })
        // cuts the team size down to numTeams
        teams = teams.slice(0,numTeams)

        // reverses teams, so that if a team didn't get an advanced programmer, they will get someone with internship experience
        teams.reverse()
        
        students = students.slice(numTeams)
        students.sort(rankingSorter("IntResIndExp","personality","product"));
        
        students.forEach((stud, count) => {
            teams[count % numTeams].teamMembers.push(stud);
        })

        // reverses again for correctly displaying on website
        teams.reverse()
        teams.forEach((team)=>{
            createGroup(team.teamNumber, team.teamMembers);
        })

    } catch (error) {
        console.log("Error",error.message);
    }
}