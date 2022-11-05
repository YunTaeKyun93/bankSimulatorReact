import findBank from "./find-bank";
import findUser from "./find-user";
// import accountlessWarning from './accountless-warning';
import checkDoesBankAccountExistByUserAndBank from "./check-does-bank-account-exist-by-user-and-bank";
import addMoneyToBankAccount from "./add-money-to-bank-account";
/**
 * @memo findOrCreateBankAccountByUserAndBank로 찾거나 생성해서 돈을 입금
 */

// const subtractMoneyFromBankAccount = ({ draft, userId, bankId, amount }) => {
//   addMoneyToBankAccount({ draft, userId, bankId, amount: -amount });
// };

const subtractMoneyFromBankAccount = ({ draft, userId, bankId, amount }) => {
  const bank = findBank(draft, bankId);
  const user = findUser(draft, userId);
  checkDoesBankAccountExistByUserAndBank({state: draft, userId, bankId});
  // accountlessWarning({draft, userId, bankId, amount})

  // console.log(accountlessWarning.bankAccount)
  bank.budget -= amount;
  user.budget += amount;
};

export default subtractMoneyFromBankAccount;

/*

set: setPrice, setCount
get: 연산 없이, 또는 비교적 가벼운 연산으로 가져올 수 있는거, price, count, overallPrice
is: get인데 boolean인 친구들, isVisible, isAllocated, isValid, 가벼운 연산까지는 허용.

find: 파라미터 있는 get(by-id, by-name, by-name-and-age, by-keyword, 동일한 파라미터를 넘기면 항상 동일한 값)

간단한 연산: 사칙연산, 메소드 호출, 간단한 루프
무거운 연산: 0.1초 넘어가는 연산, HTTP 리퀘스트, 파일 읽기

check: isValid-checkValid, isAllocated-checkAllocated, isVisible-checkVisible
결과를 리턴 안 하고 예외를 던지겠다.

isVisible: 보이는지 안 보이는지 알려주겠다.
checkVisible: 보이는지 확인해주겠다. 아니면 예외를 던져주겠다.

checkId(id);
checkPassword(pw, rePw);
checkEmail(email);

add: 간단한 생성 또는 추가
remove: 간단한 삭제

create: 객체의 생성을 꼭 수반하는 추가, DB나 전역상태(Redux)의 컨테이너에 무언가르 추가할 때 많이 씀
delete: 무거운 삭제
destroy: delete 예약어

generate: 많은 연산이 필요한 get, 파라미터를 넘김, 동일한 파라미터를 넘겨도, 다른 값 나옴

load: 무거운 연산을 통한 get
update: 무거운 set, Redux, DB에서 쓰는 개념

*/
