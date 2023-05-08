const btn = document.getElementById("btn");
const clearBtn = document.getElementById("clearBtn");
const input = document.getElementById("inp_box");
const loader = document.getElementById("loader");
const kuralOutput = document.getElementById("kural");
const tamMnOutput = document.getElementById("tam_mn");

btn.addEventListener("click", () => {
    const number = input.value;

    if (number >= 1 && number <= 1330) {
        loader.style.display = "block";
        fetch(`https://api-thirukkural.vercel.app/api?num=${number}`)
            .then((response) => response.json())
            .then((data) => {
                kuralOutput.innerHTML = `<h2>குறள் :</h2>${data.line1}<br>${data.line2}`;
                tamMnOutput.innerHTML = `<h2>Tamil meaning :</h2>${data.tam_exp}`;
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                loader.style.display = "none";
            });
    } else {
        alert("Please enter a number between 1 and 1330");
    }
});

clearBtn.addEventListener("click", () => {
    input.value = "";
    kuralOutput.innerHTML = "";
    tamMnOutput.innerHTML = "";
});
