///Admin , Staff , Student , Depertment , Placement
export const AdminNavMenu=[
    {
        groupname:"BulkImport",
        menus:[
            {url:"/markimport",name:"Mark Import"},
            {url:"/attendanceimport",name:"Attendance Import"}
        ]
    },
    {
        groupname:"Department",
        menus:[
            {url:"/allocation",name:"Allocation"},
        ]
    },
    {
        groupname:"Entrys",
        menus:[
            {url:"/markentry",name:"Mark Entry"},
            {url:"/attendanceentry",name:"Attendance Entry"}
        ]
    },
    {
        groupname:"Reports",
        menus:[
            {url:"/markreport",name:"Mark Report"},
            {url:"/attendancereport",name:"Attendance Report"},
            {url:"/placementreport",name:"Placement Report"}
        ]
    },
    {
        groupname:"Events",
        menus:[
            {url:"/exams",name:"Exams"},
            {url:"/academicevents",name:"Academic Events"},
            {url:"/acheviements",name:"Acheivements"}
        ]
    },
    {
        groupname:"Manage",
        menus:[
            {url:"/studentdetails",name:"StudentDetails"},
            {url:"/staffdetails",name:"Staff Details"},
            {url:"/acheviements",name:"Acheivements"}
        ]
    },          
    {
        groupname:"occasional",
        menus:[{url:"/student",name:"Student"},
            {url:"/staff",name:"Staff"},
            {url:"/subject",name:"Subject"},
            {url:"/batch",name:"Batch"},
            {url:"/category",name:"Category"},
            {url:"/department",name:"Department"},
            {url:"/semester",name:"Semester"},
            {url:"/year",name:"Year"},
            {url:"/stafftype",name:"Stafftype"},
            {url:"/subjecttype",name:"Subjecttype"},
            {url:"/designation",name:"Designation"},
            {url:"/examtype",name:"Examtype"},
            {url:"/examname",name:"Examname"}
        ]
    },
                                          
]
    
export const StaffNavMenu=[
    {
        groupname:"BulkImport",
        menus:[
            {url:"/markimport",name:"Mark Import"},
            {url:"/attendanceimport",name:"Attendance Import"}
        ]
    },
    {
        groupname:"Entries",
        menus:[
            {url:"/markentry",name:"Mark Entry"},
            {url:"/attendanceentry",name:"Attendance Entry"}
        ]
    },
    {
        groupname:"Reports",
        menus:[
            {url:"/markreport",name:"Mark Report"},
            {url:"/attendancereport",name:"Attendance Report"},
            {url:"/placementreport",name:"Placement Report"}
        ]
    },
    {
        groupname:"SMS",
        menus:[
            {url:"/individualsms",name:"Individual SMS"},
            {url:"/groupsms",name:"Group SMS"}
        ]
    },
    {
        groupname:"Profile",
        menus:[
            {url:"/profile",name:"Profile"},
        ]
    }
]

export const StudentNavMenu=[
    {
        groupname:"Reports",
        menus:[
            {url:"/markreport",name:"Mark Report"},
            {url:"/attendancereport",name:"Attendance Report"}
        ]
    },
    {
        groupname:"Events",
        menus:[
            {url:"/exams",name:"Exams"},
            {url:"/academicevents",name:"Academic Events"},
            {url:"/acheviements",name:"Acheivements"}
        ]
    },
    {
        groupname:"Placement",
        menus:[
            {url:"/placementactivities",name:"Placement Activities"},
        ]
    },
    {
        groupname:"Profile",
        menus:[
            {url:"/profile",name:"Profile"},
            {url:"/updateresume",name:"Update Resume"},
        ]
    }
]

export const DepertmentNavMenu=[
    {
        groupname:"BulkImport",
        menus:[
            {url:"/markimport",name:"Mark Import"},
            {url:"/attendanceimport",name:"Attendance Import"}
        ]
    },
    {   groupname:"Manage",
        menus:[
            {url:"/studentdetails",name:"StudentDetails"},
            {url:"/staffdetails",name:"Staff Details"},
            {url:"/acheviements",name:"Acheivements"}
        ]
    },
    {
        groupname:"Entrys",
        menus:[
            {url:"/markentry",name:"Mark Entry"},
            {url:"/attendanceentry",name:"Attendance Entry"}
        ]
    },
    {
        groupname:"Reports",
        menus:[
            {url:"/markreport",name:"Mark Report"},
            {url:"/attendancereport",name:"Attendance Report"},
            {url:"/placementreport",name:"Placement Report"}
        ]
    },
    {
        groupname:"SMS",
        menus:[
            {url:"/individualsms",name:"Individual SMS"},
            {url:"/groupsms",name:"Group SMS"}
        ]
    },
]

export const PlacementNavMenu=[
    {
        groupname:"Acitities",
        menus:[
            {url:"/activitties",name:"Placement Activities"},
            {url:"/filterstudents",name:"Filter Students"},
            {url:"/generatereports",name:"Generate Reports"}
        ]
    },
   {
        groupname:"SMS",
        menus:[
            {url:"/individualsms",name:"Individual SMS"},
            {url:"/groupsms",name:"Group SMS"}
        ]
    },
]
