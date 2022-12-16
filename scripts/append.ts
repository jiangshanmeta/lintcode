import fs from 'fs';
import path from 'path';
import readline from 'readline';
import {
    languages,
} from './config';
import { genFolderName, } from './common';
import questions from './question.json';
import { Question, } from './typing';

const questionMap = questions.reduce<Record<number, Question>>((obj, item) => {
    obj[item.index] = item;
    return obj;
}, {});

const extSet = new Set(languages.map(item => item.ext));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function getQuestion () {
    return new Promise<Question>((resolve) => {
        rl.question('index? ', (index) => {
            index = index.trim();
            const question = questionMap[+index];
            console.log(question);
            if (!question) {
                console.log('没有对应的问题');
                resolve(getQuestion());
            } else {
                resolve(question);
            }
        });
    });
}

function getExts () {
    return new Promise<string[]>((resolve) => {
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

function append (question: Question, exts:string[]) {
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
        const question = await getQuestion();
        const exts = await getExts();
        append(question, exts);
    }
}

main();
