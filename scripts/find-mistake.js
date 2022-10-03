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
});
