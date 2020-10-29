const fs = require('fs');
const path = require('path');
const syncQuestions = {};

const fileList = fs.readdirSync(path.join(__dirname, '../src'));

fileList.forEach((fileName) => {
    const id = +fileName.split('.')[0];
    syncQuestions[id] = true;
});

const https = require('https');

function getOnePage (page) {
    return new Promise((resolve) => {
        https.get(`https://www.lintcode.com/api/problems/?page=${page}`, {
            headers: {
                Cookie: require('./cookie'),
            },
        }, (res) => {
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

    return questions.reduce((list, sub) => {
        list.push(...sub);
        return list;
    }, []);
}

getQuestions().then((questionList) => {
    const unsyncQuestions = questionList.filter((item) => {
        const id = item.id;
        if (item.user_status === 'Accepted' && !syncQuestions[id]) {
            return true;
        }
        return false;
    }).map(item => {
        return {
            index: item.id,
            title: item.title,
            title_slug: item.unique_name,
        };
    });
    if (unsyncQuestions.length) {
        fs.writeFile(path.join(__dirname, './TODO.json'), JSON.stringify(unsyncQuestions, null, 4), 'utf8', (err) => {
            if (err) {
                throw err;
            }
            console.log('文件已被保存');
        });
    } else {
        console.log('问题已全部同步');
    }
});
