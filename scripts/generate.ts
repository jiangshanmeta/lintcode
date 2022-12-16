import fs from 'fs';
import path from 'path';

import {
    difficultyMap,
    languages,
} from './config';

import {
    genFolderName,
} from './common';

import questions from './question.json';

const extLabelMap = languages.reduce<Record<string, string>>((obj, { label, ext, }) => {
    obj[ext] = label;
    return obj;
}, {});

const fileList = fs.readdirSync(path.join(__dirname, '../src'));

const answersMap = fileList.reduce<Record<number, string[]>>((obj, folder) => {
    const answers = fs.readdirSync(path.join(__dirname, '../src', folder));
    obj[+folder] = answers;
    return obj;
}, {});

const mergedQuestions = questions.map((question) => {
    const {
        index,
        title,
        difficulty,
    } = question;

    const folderName = genFolderName(question);

    const answers = (answersMap[index] || []).map((answerFileName) => {
        const ext = answerFileName.split('.').pop()!;
        const label = extLabelMap[ext];
        return `[${label}](./src/${folderName}/${answerFileName})`;
    }).join(' ');

    return `| ${index} | ${title} | ${answers} | ${difficultyMap[difficulty as keyof typeof difficultyMap]}  |`;
}).join('\n');

const prefix = fs.readFileSync(path.join(__dirname, './_prefix.md'), 'utf8');

fs.writeFile(path.join(__dirname, '../README.md'), prefix + mergedQuestions + '\n', 'utf8', (err) => {
    if (err) throw err;
    console.log('文件已被保存');
});
