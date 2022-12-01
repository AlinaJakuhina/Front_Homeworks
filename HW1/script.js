//1 .
let cars = [
    {
    title: "BMW",
    price: "40000",
    count: "15"
    },
    
    {
    title: "Toyota", 
    price: "20000",
    count: "13"
    },
    
    {
    title: "Ford",
    price: "30000",
    count: "20"
    },
    
    {
    title: "Chevrolet",
    price: "60000",
    count: "9"
    },
    
    {
    title: "Volkswagen",
    price: "30000",
    count: "13"
    },
    ]
    

    for (let i = 0; i < cars.length; i++) {
        const { title, price, count } = cars[i];
        console.log(`${i + 1}. ${title} price:${price} count:${count}`);
    };




let tableName = ["No.", "Full Nmae", "Position", "Salary"];
let tableArr = [
    {
		id: 1,
		fullName: 'Bill Gates',
		position: 'Founder Microsoft',
		salary: '$1000',
	},

	{
		id: 2,
		fullName: 'Steve Jobs',
		position: 'Founder Apple',
		salary: '$1200',
	},

	{
		id: 3,
		fullName: 'Larry Page',
		position: 'Founder Google',
		salary: '$1100',
	},

	{
		id: 4,
		fullName: 'Mark Zuckerberg',
		position: 'Founder Facebook',
		salary: '$1300',
	},
];

let table = document.createElement('table');
let trTitle = document.createElement ('tr');

for (let i = 0; i < table.length; i++) {
    let th = document.createElement('th');
    th.innerText = table[i];
    trTitle.append(th);
}
table.appendChild(trTitle);

for (let i = 0; i < trTitle.length; i++) {
    let tr = document.createElement('tr');
    let {id, fullName, position, salary} = tableArr[i];
    let td_id = document.createElement('td');
    td_id.innerText = id;
    let td_fullName = document.createElement('td');
    td_fullName.innerText = fullName;
    let td_position = document.createElement('td');
    td_position.innerText = position;
    let td_isalary = document.createElement('td');
    td_isalary.innerText = salary;
    tr.append(td_id);
    tr.append(td_fullName);
    tr.append(td_position);
    tr.append(td_isalary);
    table.appendChild(tr);
    }

    console.log(tableArr);
  


