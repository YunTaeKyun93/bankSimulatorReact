class BankAccountNotFoundByUserAndBankError extends Error {
    constructor({userId, bankId}) {
        super(`은행 계좌를 찾을 수 없음: USER_ID: ${userId}, BANK_ID: ${bankId}`);
        this.userId = userId;
        this.bankId = bankId;
    }
};

export default BankAccountNotFoundByUserAndBankError;
