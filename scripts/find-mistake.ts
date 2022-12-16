import fs from 'fs';
import path from 'path';
import questions from './question.json';
import { Question, } from './typing';

const questionsMap = questions.reduce<Record<number, Question>>((obj, item) => {
    obj[item.index] = item;
    return obj;
}, {});

const fileList = fs.readdirSync(path.join(__dirname, '../src'));
fileList.forEach((folderName) => {
    const questionId = parseInt(folderName);
    const questionObj = questionsMap[questionId];
    if (!questionObj) {
        console.log(questionId, folderName, '问题不存在');
    }
});
