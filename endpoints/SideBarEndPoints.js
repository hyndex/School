///Admin , Staff , Student , Depertment , Placement
export const AdminNavMenu=[
    // {
    //     groupname:"BulkImport",
    //     menus:[
    //         {url:"/markimport",name:"Mark"},
    //         {url:"/attendanceimport",name:"Attendance"}
    //     ]
    // },
    {
        groupname:"Department",
        menus:[
            {url:"/allocation",name:"Allocation"},
        ]
    },
    {
        groupname:"Entries",
        menus:[
            {url:"/markentry",name:"Mark"},
            {url:"/attendanceentry",name:"Attendance"}
        ]
    },
    // {
    //     groupname:"Reports",
    //     menus:[
    //         {url:"/markreport",name:"Mark"},
    //         {url:"/attendancereport",name:"Attendance"},
    //         {url:"/placementreport",name:"Placement"}
    //     ]
    // },
    // {
    //     groupname:"Events",
    //     menus:[
    //         {url:"/exams",name:"Exams"},
    //         {url:"/academicevents",name:"Academic"},
    //         {url:"/acheviements",name:"Acheivements"}
    //     ]
    // },
    // {
    //     groupname:"Manage",
    //     menus:[
    //         {url:"/studentdetails",name:"StudentDetails"},
    //         {url:"/staffdetails",name:"Staff Details"},
    //         {url:"/acheviements",name:"Acheivements"}
    //     ]
    // },          
    {
        groupname:"occasional",
        menus:[{url:"/Admission",name:"Student"},
            {url:"/Staff",name:"Staff"},
            {url:"/Subject",name:"Subject"},
            {url:"/Batch",name:"Batch"},
            {url:"/Category",name:"Category"},
            {url:"/Department",name:"Department"},
            {url:"/Semester",name:"Semester"},
            {url:"/Year",name:"Year"},
            {url:"/StaffType",name:"Stafftype"},
            {url:"/SubjectType",name:"SubjectType"},
            {url:"/Designation",name:"Designation"},
            {url:"/ExamType",name:"Examtype"},
            {url:"/ExamName",name:"Examname"}
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
