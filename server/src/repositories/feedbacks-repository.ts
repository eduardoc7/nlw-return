// contrato que define o feedback
// separando as operações das implementações
// objetivos:
// mudar o gerenciador de banco de dados: prisma
// abstrair a parte de acesso do banco de dados para um arquivo separado

export interface FeedbackCreateData {
    type: string;
    comment: string;
    screenshot?: string;
}

export interface FeedbacksRepository {
    create: (data: FeedbackCreateData) => Promise<void>;
}