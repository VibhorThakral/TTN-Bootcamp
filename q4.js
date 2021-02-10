// Copy information of one object to another and log it to console.

let main_obj = {
  Name: { First: "Vibhor", Last: "Thakral"},
  Email: 'vxxxr.txxxxl@txxxxxw.com',
  Mobile: '98xxxxx890' 
}

console.log(main_obj);

// Way 1
console.log('Method 1: copy_obj_1 = main_obj\n-----------------------------------------');
let copy_obj_1 = main_obj;
console.log(`Copy Object Name: ${copy_obj_1.Name.First}`);
console.log(`Copy Object Name: ${copy_obj_1.Name.Last}`);
console.log(`Copy Object Email: ${copy_obj_1.Email}`);
console.log(`Copy Object Mobile: ${copy_obj_1.Mobile}`);
console.log('-----------------------------------------');

// Way 2
console.log('Method 2: copy_obj_2 = JSON.parse(JSON.stringify(main_obj))\n-----------------------------------------');
let copy_obj_2 = JSON.parse(JSON.stringify(main_obj));
console.log(`Copy Object Name: ${copy_obj_2.Name.First}`);
console.log(`Copy Object Name: ${copy_obj_2.Name.Last}`);
console.log(`Copy Object Email: ${copy_obj_2.Email}`);
console.log(`Copy Object Mobile: ${copy_obj_2.Mobile}`);
console.log('-----------------------------------------');
