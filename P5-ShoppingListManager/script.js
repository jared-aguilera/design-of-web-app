document.addEventListener("DOMContentLoaded", () => {

    // all the code will be here
    const inputItem = document.getElementById("txtItem");
    const btnAdd = document.getElementById("btnAdd");
    const list = document.getElementById("itemList");

    console.log(btnAdd,inputItem,list);

    //array of items with anonymous obj (obj constructor, obj literal)
    let items = [
        {name:"Laptop",purchase:false},
        {name:"Speakers",purchase:true},
        {name:"MacBook",purchase:false}
    ]

    function renderList(){
        list.innerHTML = ""; // clear the HTML
        items.forEach((item,index) => {
            console.log(item,index);
            let li = document.createElement("li");
            li.innerHTML=`
            <span>${item.name}</span>
            <button class="btn-edit">Edit</button>
            <button class="btn-delete">Delete</button>
            `;

            // deleting items
            const btnDelete = li.querySelector(".btn-delete");
            btnDelete.addEventListener("click", () => {
                items.splice(index, 1);
                renderList(); 
            });

            // editing items
            const btnEdit = li.querySelector(".btn-edit");
            btnEdit.addEventListener("click", () => {
                let newName = prompt("Edit item:", item.name);

                if (newName !== null && newName.trim() !== "") {
                    item.name = newName;
                    renderList();
                } else if (newName !== null) {
                    alert("Error! Please enter a valid item - Changes were not applied");
                }
            });
            console.log(li);
            list.appendChild(li);
        });
    }

    // hook event add
    btnAdd.addEventListener("click",()=>{
        let item = inputItem.value.trim();// getting value from the input

        if (item === "") {
            alert("Error! Please enter a valid item");
            return;
        }

        console.log(items);// print the value
        items.push({name:item,purchase:false});
        console.log(items);// print the value
        renderList();
        inputItem.value = "";
    });
    
    renderList();// initial render

});