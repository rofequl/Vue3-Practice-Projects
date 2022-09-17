const PermissionList = require("../permission_list");

// Create a new document
const stud = new PermissionList({
        permissionName: 'Employee Manage',
        permissionId: 1
    },
    {
        permissionName: 'Permission Control',
        permissionId: 2
    },
);

stud.save().then(() => console.log("permission List add database"), (err) => console.log(err));