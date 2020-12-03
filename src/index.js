// constで定義したオブジェクトはプロパティの変更が可能
// const val = {
//   name: "kohei",
//   age: 28
// };
// val.name = "m";
// val.address = "東京"
// console.log(val);

// react内での定数の定義は、ほぼconst.
// 動的な変数は、stateと使う.

// constでも配列はプロパティの変更が可能 !!
// const val2 = ["dog", "cat"];
// val2[0] = "wani"
// val2.push('monkey');
// console.log(val2)

/**
 * テンプレート文字列
 */
// const name = "kohei";
// const age = 28;
// // 「私の名前はkoheiです。年齢は28際です。」

// // 従来
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。"
// console.log(message1);

// //テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }

// const func1 = function(str){
//   return str;
// }

// アロー関数
// const func2 = (str) => str;
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// }

// console.log(func3(10, 20));

// 分割代入
// const myProfile = {
//   name: "kohei",
//   age: 28
// };

// //いちいちmyProfileを付けないといけない。
// const message1 = `名前は${myProfile.name}は${myProfile.age}です。`
// // console.log(message1);

// 分割代入　を使うと、、
// const {name, age} = myProfile;
// const message2 = `名前は${name}は${age}歳です。`
// console.log(message2);

// 配列の場合だと、番号指定
// const myProfile = ["kohei", 28];
// const message3 = `名前は、${myProfile[0]}です。年齢は${myProfile[1]}です。`
// console.log(message3);

// 配列で分割代入する際は、配列に変数名を入れる。
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢 ${age}です。`
// console.log(message4)

// const sayHello = (name = "ゲスト") => console.log(`こんにちわ${name}さん`);
// sayHello("kohei");

// スプレット構文

// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1)

// 纏める
// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(arr3);

// 配列のコピーや結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5]
// console.log(arr7);

// コピーした場合
// const arr8 = arr4;
// arr8[0] = 100
// console.log(arr8);
// console.log(arr4)

// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// mapやfilterを使った配列の処理
const nameArr = ["田中", "山田", "ジャケえ"];
for (let index = 0; index < nameArr.length; index++) {
  // console.log(`${index+1}番目は、${nameArr[index]}です。`);
}

// 配列の中身をreturnして、定義している配列に入れ直す。
// const nameArr2= nameArr.map((name)=> {
//   return name;
// })

// console.log(nameArr2);

// 配列の中身に対して、処理している。 第二引数は、順番を入れれる。
// nameArr.map((name, index)=> console.log(`${index +1}番目は${name}です
// `));

// const newNameArr = nameArr.map((name)=> {
//   if (name === "ジャケえ"){
//     return name
//   } else{
//     return `${name}さん`
//   }
// })

// console.log(newNameArr);
// filter ある条件のもののみを抽出する。

// const numArr =[1,2,3,4,5];
// const newNumArr = numArr.filter((num)=>{
//   return num % 2 === 1;
// })
// console.log(newNumArr);

/**
 * 三行演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// }
// console.log(checkSum(20, 90));

/**
 * 論理演算子の本当の意味を知ろう
 */

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueです");
// }

// if (flag1 && flag2) {
//   console.log("1も2もtrueです");
// }

// ||は左側がfalseなら右側を返す。
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

//  && は左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
