const https = require('https');
const fs = require('fs');
const path = require('path');
function getOnePage (page) {
    return new Promise((resolve) => {
        https.get(`https://www.lintcode.com/api/problems/?page=${page}`, (res) => {
            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', (chunk) => {
                rawData += chunk;
            });
            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(rawData);
                    resolve(parsedData);
                } catch (e) {
                    console.error(e.message);
                }
            });
        }).on('error', (e) => {
            console.error(`出现错误: ${e.message}`);
        });
    });
}

async function getQuestions () {
    const map = {};
    const {
        maximum_page,
        problems,
    } = await getOnePage(1);

    const promises = [];
    for (let i = 2; i <= maximum_page; i++) {
        promises.push(getOnePage(i));
    }

    const jsons = await Promise.all(promises);
    const questions = jsons.map(item => item.problems);
    questions.push(problems);
    for (let i = 0; i < questions.length; i++) {
        for (let j = 0; j < questions[i].length; j++) {
            map[questions[i][j].id] = questions[i][j];
        }
    }

    return Object.values(map).sort((a, b) => a.id - b.id);
}

getQuestions().then((questions) => {
    const localDatas = questions.map((item) => {
        return {
            index: item.id,
            title: item.title,
            title_slug: item.unique_name,
            difficulty: item.level,
        };
    });

    const fmtData = JSON.stringify(localDatas, null, 4);
    fs.writeFile(path.join(__dirname, './question.json'), fmtData, 'utf8', (err) => {
        if (err) throw err;
        console.log('文件已被保存');
    });
});
