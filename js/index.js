let MyFunction = function(){
function calcD(a, b, c) {
         return b*b - 4*a*c
         };
let check = function(a,b,c){
  if (isNaN(a, b, c)){
   alert('Ви ввели не число') 
}
else{
   }
}
let tryFunction = function(){
  document.write('<br>');
  document.write('<br>');
  document.write("<a href='index.html'style='color:blue'>Спробувати ще раз</a>");
}

 let a  = Number(prompt('Розв’язання квадратнго рівняння типу:\nax\u00b2 + bx + c = 0\nВведіть a'));
 check(a);
 let b  = Number(prompt('Розв’язання квадратнго рівняння типу:\nax\u00b2 + bx + c = 0\nВведіть b'));
 check(b);
 let c  = Number(prompt('Розв’язання квадратнго рівняння типу:\nax\u00b2 + bx + c = 0\nВведіть c'));
 check(c);
 var D  = calcD(a, b, c); 
 var x1 = calcx1();
 var x2 = calcx2();
 var x  = calcx();


if (D > 0) {
  alert('Рівняння має два кореня:\nx1 = '+(Math.round(x1 * 100) /100)+'\nx2 = '+(Math.round(x2 * 100) /100));
  document.write(a+'x + '+b+ 'x + '+c+' = 0');
  document.write('<br>');
  document.write('<br>');
  document.write('D = ' + D+' > 0');
  document.write('<br>');
  //document.write('<br>');
  document.write('<b>');
  document.write('РІВНЯННЯ МАЄ ДВА КОРЕНЯ')
  document.write('</b>')
  document.write('<br>');
  document.write('<br>');
  //document.write(x1);
  document.write('x1 = ' + (Math.round(x1 * 100) /100));
  document.write('<br>');
  //document.write(x2);
  document.write('x2 = ' + (Math.round(x2 * 100) /100));;
  tryFunction()
 } else if (D===0){
//   document.write(a+'x + '+b+ 'x + '+c+' = 0');
//   document.write('<br>');
//   document.write('<br>');
//   document.write('D = ' + D); 
  alert('Рівняння має один корінь:\nx = '+x1);
  document.write(a+'x + '+b+ 'x + '+c+' = 0');
  document.write('<br>');
  document.write('<br>');
  document.write('D = ' + D);
  document.write('<br>');
  document.write('<br>');
  document.write('<b>');
  document.write('РІВНЯННЯ МАЄ ОДИН КОРІНЬ')
  document.write('</b>');
  document.write('<br>');
  document.write('<br>');
  //document.write(x);
  document.write('x = ' + (Math.round(x * 100) /100));
  tryFunction()
 } else if(isNaN(D))
 {alert('Одне або кілька введених Вами змінних не являються числом.\nСпробуйте ще раз')
 } else {
  alert('Рівняння немає коренів !!!')
  document.write(a+'x + '+b+ 'x + '+c+' = 0');
  document.write('<br>');
  document.write('<br>');
  document.write('D = ' + D + ' < 0');
  document.write('<br>');
  document.write('<br>');
  document.write('<b>');
  document.write('РІВНЯННЯ НЕ МАЄ КОРЕНІВ !!!')
  tryFunction()
};
function calcx1(){
  return (-b+Math.sqrt(D))/(2*a)
};
function calcx2(){
  return (-b-Math.sqrt(D))/(2*a)
};
function calcx(){
  return (-b/(2*a))
}
}











