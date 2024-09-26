type ActivityType = {
    activityField: "fron-tend" | "back-end" | "full-stack",
}
type TeacherType = ActivityType & {
    isTeacher: boolean,
    isStudent?: never,
    isEmployee?: never,
}
type StudentType = ActivityType & {
    isStudent: boolean,
    isTeacher?: never,
    isEmployee?: never,
}
type EmployeeType = ActivityType & {
    isEmployee: boolean,
    isTeacher?: never,
    isStudent?: never,
}

type InfoType = TeacherType | StudentType | EmployeeType

const Info = ({ activityField, isStudent, isTeacher, isEmployee }: InfoType) => {
    return (
        <div>
            I am
            {isTeacher ? "a teacher" : isStudent ? "a student" : isEmployee ? "" : "an employee"}
            in
            {activityField}
            programming


            <div>
                {isTeacher ? (
                    "some elements only for teachers"
                ) : isStudent ? (
                    "some elements only for students"
                ) : isEmployee ? (
                    "some elements only for employees"
                ) : null}
            </div>
        </div>
    );
};

export default Info;