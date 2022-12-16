import https from 'https';
import { PageResponse, Problem, Question, } from './typing';

export const genFolderName = (question:Question) => {
    return String(question.index).padStart(4, '0');
};

function getOnePage (page:number) {
    return new Promise<PageResponse>((resolve) => {
        https.get(`https://www.lintcode.com/v2/api/problems/?_format=new&problem_type_id=4&ordering=id&page_size=50&page=${page}`, (res) => {
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
                    console.error((e as Error).message);
                }
            });
        }).on('error', (e) => {
            console.error(`出现错误: ${e.message}`);
        });
    });
}

export async function getQuestions () {
    const map:Record<number, Problem> = {};
    const pgae1Res = await getOnePage(1);
    const { count, } = pgae1Res;

    const promises = [Promise.resolve(pgae1Res), ];
    for (let i = 2; i <= Math.ceil(count / 50); i++) {
        promises.push(getOnePage(i));
    }

    const jsons = await Promise.all(promises);
    const questions = jsons.map(item => item.data);

    for (let i = 0; i < questions.length; i++) {
        for (let j = 0; j < questions[i].length; j++) {
            map[questions[i][j].problem_id] = questions[i][j];
        }
    }

    return Object.values(map).sort((a, b) => a.problem_id - b.problem_id);
}
