const fs = require('fs');
const path = require('path');

const fileDirs = fs.readdirSync(path.join(__dirname, '../src'));

fileDirs.forEach((fileDir) => {
    const files = fs.readdirSync(path.join(__dirname, '../src', fileDir));
    files.forEach((file) => {
        const ext = file.split('.').pop();
        const newName = path.join(__dirname, '../src', fileDir, `solution.${ext}`);
        
        fs.renameSync(
            path.join(__dirname, '../src', fileDir, file),
            newName
        );
    });
});
