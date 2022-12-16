import fs from 'fs';
import path from 'path';
import { getQuestions, } from './common';
import { Question, } from './typing';

getQuestions().then((questions) => {
    const localDatas:Question[] = questions.map((item) => {
        return {
            index: item.problem_id,
            title: item.title,
            difficulty: item.level,
        };
    });

    const fmtData = JSON.stringify(localDatas, null, 4);
    fs.writeFile(path.join(__dirname, './question.json'), fmtData, 'utf8', (err) => {
        if (err) throw err;
        console.log('文件已被保存');
    });
});
