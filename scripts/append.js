const {
    genFolderName,
} = require('./common');

function append () {
    const fs = require('fs');
    const path = require('path');
    const questions = require('./question.json');
    const questionMap = questions.reduce((obj, item) => {
        obj[item.index] = item;
        return obj;
    }, Object.create(null));

    const languages = require('./config').languages;
    const extSet = new Set(languages.map(item => item.ext));

    const index = process.argv[2];
    const question = questionMap[index];
    console.log(question);
    if (!question) {
        console.log('没有对应的问题');
        return;
    }

    const ext = process.argv[3];
    if (!extSet.has(ext)) {
        console.log('扩展名无效');
        return;
    }

    const folderName = genFolderName(question);
    const folderDir = path.join(__dirname, '../src', folderName);
    if (!fs.existsSync(folderDir)) {
        fs.mkdirSync(folderDir);
    }

    const fileName = `solution.${ext}`;
    const file = path.join(__dirname, `../src/${folderName}/${fileName}`);
    if (fs.existsSync(file)) {
        console.log('文件已存在');
        return;
    }

    fs.writeFileSync(file, '');
}

append();
