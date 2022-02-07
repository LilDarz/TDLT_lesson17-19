// function sumArray(mang) {
//     let sum = 0;
//     for (let i = 0; i < mang.length; i++){
//         sum += mang[i];
//     }
//     return sum;

// }

// let mang = [1,2,3,4,5,6,7,8,9,10];
// document.write(`Từ ${mang[0]} đến ${mang[mang.length-1]} có tổng là ${sumArray(mang)}`);
// mang = [20,21,22,23,24,25,26,27,28,29,30];
// document.write(`Từ ${mang[0]} đến ${mang[mang.length-1]} có tổng là ${sumArray(mang)}`);

// let number1=1;
// let number2=10;
// function sumHaiNumber(number1,number2) {
//     let sum = 0;
//     for(let i = number1; i<=number2; i++){
//         sum += i;
//     }
//     return sum;
// }
// document.write(`Từ ${number1} đến ${number2} có tổng là ${sumHaiNumber(number1,number2)}`)
// number1 = 20;
// number2 = 30;
// document.write(`Từ ${number1} đến ${number2} có tổng là ${sumHaiNumber(number1,number2)}`)
// number1 = 30;
// number2 = 70;
// document.write(`Từ ${number1} đến ${number2} có tổng là ${sumHaiNumber(number1,number2)}`)

// function footToMeter(foot) {
//     let meter = 0.305*foot;
//     document.write(meter+"<br>");
//     return meter
// }
// footToMeter(5);

// function metToMilimet(meter) {
//     let milimet = Number(meter) * 1000;
//     document.write(milimet);
//     return milimet
// }
// metToMilimet(footToMeter(5));

// function checkSoNguyenTo(number) {
//    var flag = true;
//     if(number < 1){
//         flag= false;
//     }else{
//         for (let i =1; i<number-1;i++){
//             if (number % i == 0){
//                 flag =false;
//                 break
//             }
//         }
//     }
//     if (flag == true){
//         document.write(`${number} là số nguyên tố<br>`);
//     }else{
//         document.write(`${number} không phải số nguyên tố<br>`);
//     }
// }

// checkSoNguyenTo(9);

// function tinhBinhPhuong(num) {
//     let result = 0;
//     result = Math.pow(num,2);
//     document.write(`Bình phương của ${num} là ${result}<br>`);
// }

// tinhBinhPhuong(6);

// function tinhToanHinhTron(banKinh) {
//     let dienTich = Math.pow(banKinh,2)*Math.PI;
//     let chuVi = banKinh*2*Math.PI;
//     document.write(`Diện tích hình tròn có bán kính ${banKinh} là ${dienTich}<br>`);
//     document.write(`Chu vi hình tròn có bán kính ${banKinh} là ${chuVi}<br>`);
// }
//  tinhToanHinhTron(9);

// function tong2SoNhan2(num1,num2) {
//     let sumNhan = (num1+num2);
//     return sumNhan;
// }
// num1=+prompt("Nhập số thứ nhất");
// num2=+prompt("Nhập số thứ hai");
// document.write(tong2SoNhan2(num1,num2)*2);

// function hienBangCuuChuong(number) {
// for (var soThuNhat = 1, soThuHai =19; soThuNhat <= 19, soThuHai>0; soThuNhat++,soThuHai--) {
//     var numbr1= 10;
//     document.write(`${soThuNhat}*${soThuHai}=${soThuHai * soThuNhat} <br>`);
// }
        
// }

// let bangCuuChuong= +prompt("Input the number");
// hienBangCuuChuong(bangCuuChuong);
// console.log(numbr1);

// function giaiThua(number) {
//     if(number==1||number==0){
//         return 1
//     }else{
//         return number*giaiThua(number-1);
//     }
// }
// document.write(giaiThua(10));

// const b1 = (num1,num2) => {
//     if (num1>num2){
//         alert(`Số ${num1} lớn hơn số ${num2}`);
//     }else{
//         document.write(num1+num2);
//     }
// }
// b1(3,2);
// b1(2,3);

// const b8 = (soNhapVao) => {
//     if (soNhapVao>0){
//         document.write("True");
//     }else{
//         document.write("False");
//     }
// }

// b8(9);

// const b6 = (inputSMT) => {
 
//     if (typeof(inputSMT)===typeof(NaN)){
//         console.log("True");
//     }else{
//         console.log("False");
//     }
// }

// b6(9);
// b6("fawiofn");
