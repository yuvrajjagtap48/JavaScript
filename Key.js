const fruits = [
    { id:1 , name:"Apple" },
    { id:2 , name:"Mango" },
    { id:3 , name:"Banana" }
];

const output = fruits.map((item)=>{
    return {key:item.id,
        name:item.name}
});
console.log(output);