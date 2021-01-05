const fs = require('fs');
const path = require('path');

const {
    difficultyMap,
    languages,
} = require('./config');

const extLabelMap = languages.reduce((obj, { label, ext, }) => {
    obj[ext] = label;
    return obj;
}, {});

const questions = require('./question.json');

const fileList = fs.readdirSync(path.join(__dirname, '../src'));

const answersMap = fileList.reduce((obj, dirName) => {
    const answers = fs.readdirSync(path.join(__dirname, '../src', dirName));
    obj[parseInt(dirName)] = answers;
    return obj;
}, {});

const mergedQuestions = questions.map(({
    index,
    title,
    difficulty,
}) => {
    const answers = (answersMap[index] || []).map((answerFileName) => {
        const name = answerFileName.split('.');
        const ext = name.pop();
        const label = extLabelMap[ext];
        return `[${label}](./src/${name.join('.')}/${answerFileName})`;
    }).join(' ');

    return `| ${index} | ${title} | ${answers} | ${difficultyMap[difficulty]}  |`;
}).join('\n');

const prefix = fs.readFileSync(path.join(__dirname, './_prefix.md'), 'utf8');

fs.writeFile(path.join(__dirname, '../README.md'), prefix + mergedQuestions + '\n', 'utf8', (err) => {
    if (err) throw err;
    console.log('文件已被保存');
});
