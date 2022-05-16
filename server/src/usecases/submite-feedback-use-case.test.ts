import { SubmitFeedbackUseCase } from "./submit-feedback-usecase";

describe('submit feedback', () => {
    it('should be able to submit a feedback', () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            { create: async () => { } },
            { sendMail: async () => { } },
        );
    });
});