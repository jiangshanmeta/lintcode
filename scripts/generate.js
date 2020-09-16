const fs = require('fs');
const path = require('path');

const {
    difficultyMap,
    languages,
} = require('./config');

const questions = require('../metaData/question.json');

const readdir = Promise.all(languages.map(({ dir, label, }) => {
    return new Promise((resolve) => {
        fs.readdir(path.join(__dirname, dir), (err, fileList) => {
            if (err) {
                throw err;
            }
            const urlDir = dir.substring(dir.indexOf('/'));
            const list = fileList.map((name) => {
                const index = parseInt(name.substring(0, name.indexOf('.')));
                return {
                    index,
                    label,
                    name,
                    dir: urlDir,
                };
            });
            resolve(list);
        });
    });
}));

readdir.then((answerDir) => {
    const groupByIndex = {};
    for (let i = 0; i < languages.length; i++) {
        const answers = answerDir[i];
        for (let j = 0; j < answers.length; j++) {
            const index = answers[j].index;
            (groupByIndex[index] || (groupByIndex[index] = [])).push(answers[j]);
        }
    }

    const mergedQuestions = questions.map((question) => {
        const index = question.index;

        const answers = (groupByIndex[index] || []).map((answer) => {
            return `[${answer.label}](.${answer.dir}/${answer.name})`;
        }).join(' ');

        return `| ${index} | ${question.title} | ${answers} | ${difficultyMap[question.difficulty]} |`;
    }).join('\n');

    const prefix = fs.readFileSync(path.join(__dirname, './_prefix.md'), 'utf8');

    fs.writeFile(path.join(__dirname, '../README.md'), prefix + mergedQuestions + '\n', 'utf8', (err) => {
        if (err) throw err;
        console.log('文件已被保存');
    });
});
