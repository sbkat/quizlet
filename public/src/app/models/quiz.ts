export class Quiz {
    id: string;
    title: string;
    questions: [{ 
        question:string, 
        answers:[{
            answer: string, 
            isCorrect: Boolean,
        }]
    }]

}
