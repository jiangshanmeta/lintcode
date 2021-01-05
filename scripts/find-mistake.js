const fs = require('fs');
const path = require('path');
const questions = require('./question.json');

const questionsMap = questions.reduce((obj, item) => {
    obj[item.index] = item;
    return obj;
}, {});

const fileList = fs.readdirSync(path.join(__dirname, '../src'));
fileList.forEach((folderName) => {
    const questionId = parseInt(folderName);
    const questionObj = questionsMap[questionId];
    if (!questionObj) {
        console.log(questionId, folderName, '问题不存在');
        return;
    }
    const expectFolderName = String(questionId).padStart(4, '0') + '.' + questionObj.title_slug;
    if (folderName !== expectFolderName) {
        console.log(questionId, folderName, expectFolderName, '子目录名错误');
    }
});
