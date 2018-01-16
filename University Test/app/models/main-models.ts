export class Test {
    public TestID: number;
    public TestName: string;
    public CreatedDate: Date;
    public Questions: Question[];
    public EstimatedTime: number;
}

export class Question {
    public QuestionID: number;
    public QuestionText: string;
    public Points: number;
    public Test: Test;
    public Answers: Answer[];
}

export class Answer {
    public AnswerID: number;
    public AnswerText: string;
    public Question: Question;
    public IsCorrect: boolean;
}