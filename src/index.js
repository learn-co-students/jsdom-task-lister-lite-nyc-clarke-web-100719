document.addEventListener("DOMContentLoaded", () => {

    function log(msg)
    {alert(msg);}

    // var msg = document.querySelector("#new-task-description").value;

    let dropdown = document.createElement("SELECT");
    dropdown.appendChild(new Option("high", "red"));
    dropdown.appendChild(new Option("medium", "yellow"));
    dropdown.appendChild(new Option("low", "green"));

    document.querySelector("#create-task-form").appendChild(dropdown);



    document.querySelector("#create-task-form").children[2]
        .addEventListener("click", () => {
            // debugger

            let node = document.createElement("LI");
            let textNode = document.createTextNode(document.querySelector("#new-task-description").value);
            node.appendChild(textNode);
            let color = dropdown.options[dropdown.selectedIndex].value;
            node.style.color = color;

            let editBtn = document.createElement("BUTTON");
            let editBtnText = document.createTextNode("Edit");
            editBtn.appendChild(editBtnText);
            editBtn.setAttribute("id", document.querySelector("#new-task-description").value);
            node.appendChild(editBtn);


            let btn = document.createElement("BUTTON");
            let btnText = document.createTextNode("X");
            btn.appendChild(btnText);
            btn.setAttribute("id", document.querySelector("#new-task-description").value);
            node.appendChild(btn);



            editBtn.addEventListener("click", () => {
                let editForm = document.createElement("INPUT");
                editForm.setAttribute("type", "text");
                editForm.setAttribute("id", "editBox");

                let submitBtn = document.createElement("BUTTON");
                let submitBtnText = document.createTextNode("Save");
                submitBtn.appendChild(submitBtnText);
                // submitBtn.setAttribute("id", document.querySelector("#new-task-description").value);
                node.appendChild(editForm);
                node.appendChild(submitBtn);

                submitBtn.addEventListener("click", () => {
                   textNode.nodeValue = editForm.value;
                   editForm.remove();
                   submitBtn.remove();
                });
            });

            document.querySelector("#list ul")
                .appendChild(node);

            btn.addEventListener("click", () => {
                node.remove();
                // document.querySelector("#list ul").
            });




            // document.querySelector("#new-task-description").value;
            // document.querySelector("#list ul")
            //     .appendChild(`<li>${document.querySelector("#new-task-description").value}</li>`);

        });
});
