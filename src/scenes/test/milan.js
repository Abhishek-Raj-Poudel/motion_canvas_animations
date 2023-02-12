let me = 3;
let company = 2;

function meVsCompany(me, company) {
  let myValue = (me * 2 + company) % 8;
  let companyValue = (company * 2 + me) % 8;
  console.log(myValue, companyValue);
  return myValue < companyValue;
}

console.log(meVsCompany(3, 9));
