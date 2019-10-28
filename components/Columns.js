const columns=[
    {
        Header:'User Id',
        accessor:'userId',
    },
    {
        Header:'Title',
        accessor:'title',
        sortable:false,
    },
    {
        Header:'Post',
        accessor:'body',
        sortable:false,
        filterable:false,
    },
]
export default columns
export const AdmissionColumns=[
    {
        Header:'Name',
        accessor:'name',
    },
    {
        Header:'Gender',
        accessor:'gender',
        sortable:false,
    },
    {
        Header:'Phone',
        accessor:'phone',
        sortable:false,
    },
    {
        Header:'SSLC',
        accessor:'sslc',
        sortable:false,
    },
    {
        Header:'HSC',
        accessor:'hsc',
        sortable:false,
    },
    {
        Header:'Admission No.',
        accessor:'admissionno',
        sortable:false,
    },
    {
        Header:'Batch',
        accessor:'batch',
        sortable:false,
    },
    {
        Header:'Department',
        accessor:'department',
        sortable:false,
    },
    {
        Header:'Roll No.',
        accessor:'roll',
        sortable:false,
    },
    {
        Header:'Register No.',
        accessor:'registerno',
        sortable:false,
    },
]
export const BatchColumns=[
    {
        Header:'Id',
        accessor:'userId',
    },
    {
        Header:'Batch',
        accessor:'batch',
    }
]
export const DepartmentColumns=[
    
    {
        Header:'Department',
        accessor:'department',
    },
    {
        Header:'Department Code',
        accessor:'code',
    },
    {
        Header:'Short Name',
        accessor:'short',
    },
]
export const DepartmentAllocationColumns=[
    
    {
        Header:'Batch',
        accessor:'batch',
    },
    {
        Header:'Semister',
        accessor:'semister',
    },
    {
        Header:'Department',
        accessor:'department',
    },
    {
        Header:'Category',
        accessor:'category',
    },
    {
        Header:'ClassIC',
        accessor:'classic',
    },
]
export const DesignationColumns=[
    {
        Header:'ID',
        accessor:'id',
    },
    {
        Header:'Designation',
        accessor:'designation',
    }
]

export const ExamBrowserColumns=[
    {
        Header:'ID',
        accessor:'id',
    },
    {
        Header:'Class',
        accessor:'class',
    },
    {
        Header:'Exam Type',
        accessor:'examtype',
    },
    {
        Header:'Exam Name',
        accessor:'examname',
    },
]

export const ExamNameColumns=[
    
    {
        Header:'Exam Name',
        accessor:'examname',
    },
]

export const ExamTypeColumns=[
    {
        Header:'ID',
        accessor:'id',
    },
    {
        Header:'Exam Type',
        accessor:'examtype',
    },
]
export const StaffTypeColumns=[
    {
        Header:'ID',
        accessor:'id',
    },
    {
        Header:'Stafft Type',
        accessor:'stafftype',
    },
]

export const SemesterColumns=[
    {
        Header:'ID',
        accessor:'id',
    },
    {
        Header:'Year',
        accessor:'year',
    },
    {
        Header:'Semester',
        accessor:'semester',
    },
]
export const StaffColumns=[
    {
        Header:'ID',
        accessor:'id',
    },
    {
        Header:'Name',
        accessor:'name',
    },
    {
        Header:'Role',
        accessor:'stafftype',
    },
    {
        Header:'Staff ID',
        accessor:'staffid',
    },
    {
        Header:'Phone',
        accessor:'phone',
    },
]

export const SubjectTypeColumns=[
    
    {
        Header:'Subject Type',
        accessor:'subjecttype',
    },
]

export const YearColumns=[
    {
        Header:'Id',
        accessor:"_id",
    },
    {
        Header:'Year',
        accessor:"year",
    },
]

export const SubjectColumns=[
    
    {
        Header:'code',
        accessor:'code',
    },
    {
        Header:'name',
        accessor:'name',
    },
    {
        Header:'subject type',
        accessor:'subjecttype',
    },
]

export const RankReportColumns=[
    
    {
        Header:'Roll No.',
        accessor:'roll',
    },
    {
        Header:'Name',
        accessor:'name',
    },
    {
        Header:'BEEE',
        accessor:'beee',
    },
    {
        Header:'OS',
        accessor:'os',
    },
    {
        Header:'CP',
        accessor:'cp',
    },
    {
        Header:'Total',
        accessor:'total',
    },
    {
        Header:'Rank',
        accessor:'rank',
    },
]

export const AttendenceReportColumns=[
    
    {
        Header:'Roll No.',
        accessor:'roll',
    },
    {
        Header:'Name',
        accessor:'name',
    },
    {
        Header:'Working Days',
        accessor:'workingdays',
    },
    {
        Header:'T. Hours',
        accessor:'totalhour',
    },
    {
        Header:'P. Hours',
        accessor:'hourspresent',
    },
    {
        Header:'Overall',
        accessor:'overall',
    },
    {
        Header:'Remark',
        accessor:'remark',
    },
]

export const FailListReportColumns=[
    
    {
        Header:'RollNo',
        accessor:'roll',
    },
    {
        Header:'Reg.No',
        accessor:'regno',
    },
    {
        Header:'NAME',
        accessor:'name',
    },
    {
        Header:'IM',
        accessor:'im',
    },
    {
        Header:'EM',
        accessor:'em',
    },
    {
        Header:'Total',
        accessor:'total',
    },
    {
        Header:'Reason',
        accessor:'reason',
    },
]
export const PlacementReportColumns=[
    
    {
        Header:'Roll No.',
        accessor:'roll',
    },
    {
        Header:'Name',
        accessor:'name',
    },
    {
        Header:'Gender',
        accessor:'gender',
    },
    {
        Header:'DOB',
        accessor:'dob',
    },
    {
        Header:'Phone',
        accessor:'phone',
    },
    {
        Header:'10 Percent',
        accessor:'10percent',
    },
    // {
    //     Header:'12 Percent',
    //     accessor:'12percent',
    // },
    // {
    //     Header:'Diploma',
    //     accessor:'Diploma',
    // },
    // {
    //     Header:'Backlog',
    //     accessor:'Backlog',
    // },
    // {
    //     Header:'Department',
    //     accessor:'Department',
    // },
]


export const MarkReportColumns=[
    
    {
        Header:'Roll No.',
        accessor:'roll',
    },
    {
        Header:'Name',
        accessor:'name',
    },
    {
        Header:'BEEE',
        accessor:'beee',
    },
    {
        Header:'OS',
        accessor:'os',
    },
    {
        Header:'CP',
        accessor:'cp',
    },
    {
        Header:'Total',
        accessor:'total',
    },
    {
        Header:'Rank',
        accessor:'rank',
    },
    {
        Header:'Result',
        accessor:'result',
    },
]
