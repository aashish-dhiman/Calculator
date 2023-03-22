let currentInput = document.querySelector(".currentInput");
let finalAnswer = document.querySelector(".finalAnswer");
let buttons = document.querySelectorAll("button");
let eraseBtn = document.querySelector("#erase");
let clearBtn = document.querySelector("#clear");
let evaluate = document.querySelector("#evaluate");

let realTimeExpression = [];

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (!btn.id.match("erase")) {
            realTimeExpression.push(btn.value);
            currentInput.innerHTML = realTimeExpression.join("");
            // console.log(btn);

            // display answer in real time
            if (btn.classList.contains("num_btn")) {
                finalAnswer.innerHTML = eval(realTimeExpression.join(""));
            }
        }

        if (btn.id.match("erase")) {
            realTimeExpression.pop();
            currentInput.innerHTML = realTimeExpression.join("");
            finalAnswer.innerHTML = eval(realTimeExpression.join(""));
        }

        if (btn.id.match("evaluate")) {
            currentInput.className = "finalAnswer";
            finalAnswer.className = "currentInput";
            finalAnswer.style.color = "white";
        }
    });
});

clearBtn.addEventListener("click", () => {
    realTimeExpression = [""];
    finalAnswer.innerHTML = 0;
    currentInput.innerHTML = realTimeExpression.join("");
    currentInput.className = "currentInput";
    finalAnswer.className = "finalAnswer";
    finalAnswer.style.color = "rgba(150, 150, 150, 0.87)";
});
