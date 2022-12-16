export interface Problem {
    problem_id: number;
    title: string;
    level: number;
    user_status: string;
}

export interface PageResponse {
    data: Problem[];
    count: number;
}

export interface Question {
    index: number;
    title: string;
    difficulty: number;
}
