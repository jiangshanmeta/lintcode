const fs = require('fs');
const path = require('path');
const readline = require('readline');
const questions = require('./question.json');
const questionMap = questions.reduce((obj, item) => {
    obj[item.index] = item;
    return obj;
}, Object.create(null));

const languages = require('./config').languages;
const extSet = new Set(languages.map(item => item.ext));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const {
    genFolderName,
} = require('./common');

function getIndex () {
    return new Promise((resolve) => {
        rl.question('index? ', (index) => {
            index = index.trim();
            const question = questionMap[index];
            console.log(question);
            if (!question) {
                console.log('没有对应的问题');
                resolve(getIndex());
            } else {
                resolve(index);
            }
        });
    });
}

function getExts () {
    return new Promise((resolve) => {
        rl.question('exts? ', (extstr) => {
            const exts = extstr.split(' ').filter(item => extSet.has(item));
            if (exts.length === 0) {
                resolve(getExts());
            } else {
                resolve(exts);
            }
        });
    });
}

function append (index, exts) {
    const question = questionMap[index];

    for (const ext of exts) {
        const folderName = genFolderName(question);
        const folderDir = path.join(__dirname, '../src', folderName);
        if (!fs.existsSync(folderDir)) {
            fs.mkdirSync(folderDir);
        }

        const fileName = `solution.${ext}`;
        const file = path.join(__dirname, `../src/${folderName}/${fileName}`);
        if (fs.existsSync(file)) {
            console.log('文件已存在');
            continue;
        }

        fs.writeFileSync(file, '');
    }
}

async function main () {
    while (true) {
        const index = await getIndex();
        const exts = await getExts();
        append(index, exts);
    }
}

main();
