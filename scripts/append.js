function append () {
    const fs = require('fs');
    const path = require('path');
    const questions = require('../metaData/question.json');
    const questionMap = questions.reduce((obj, item) => {
        obj[item.title_slug] = item;
        return obj;
    }, Object.create(null));

    const languages = require('./config').languages;
    const extDirMap = languages.reduce((obj, item) => {
        obj[item.ext] = item.dir;
        return obj;
    }, Object.create(null));

    const title_slug = process.argv[2];
    const question = questionMap[title_slug];
    console.log(question);
    if (!question) {
        console.log('没有对应的问题');
        return;
    }

    const ext = process.argv[3];
    const dir = extDirMap[ext];
    if (!dir) {
        console.log('扩展名无效');
        return;
    }

    const fileName = `${String(question.index).padStart(4, '0')}.${question.title_slug}.${ext}`;
    const file = path.join(__dirname, `${dir}/${fileName}`);
    if (fs.existsSync(file)) {
        console.log('文件已存在');
        return;
    }

    fs.writeFileSync(file, '');
}

append();
