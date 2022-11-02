import { useEffect, useRef } from "react";

const useTestInitScript = ({banking}) => {
    // 초기값을 설정하는 스크립트는 이 쪽에 작성하세요.
    const isInitCalledRef = useRef(false);

    useEffect(() => {
        if (isInitCalledRef.current) {
            return;
        }

        {
            const user = banking.createUser({name: '김사과', age: 28, country: 'Chosun', initialBudget: 300});
            const bank = banking.createBank({name: '하나은행', dailyInterestRate: 1.8, initialBudget: 10000});
      
        }
        {
            const user = banking.createUser({name: '이망고', age: 28, country: 'Chosun', initialBudget: 300});
            const bank = banking.createBank({name: '카카오은행', dailyInterestRate: 1.8, initialBudget: 10000});
      
        }
        {
            const user = banking.createUser({name: '홍레몬', age: 28, country: 'Chosun', initialBudget: 300});
            const bank = banking.createBank({name: '부산은행', dailyInterestRate: 1.8, initialBudget: 10000});
            // banking.deposit({
            //     userId: user.id,
            //     bankId: bank.id,
            //     amount: 30,
            // });
        }
        {
            const user = banking.createUser({name: '윤포도', age: 28, country: 'Chosun', initialBudget: 300});
            const bank = banking.createBank({name: '제일은행', dailyInterestRate: 1.8, initialBudget: 10000});
            // banking.deposit({
            //     userId: user.id,
            //     bankId: bank.id,
            //     amount: 30,
            // });
        }

        isInitCalledRef.current = true;
    }, [isInitCalledRef]);
};

export default useTestInitScript;
