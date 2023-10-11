console.log("Index.js is working")

const populate = async (value, currency) => {
    myStr = "";
    url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_V0sZf7BZW77L9F5uQcIbKZa9t3WOj03bfm5N3ayu&base_currency=" + currency;
    let response = await fetch(url);
    let rJson = await response.json();
    // document.querySelector(".ouput").styles.display = "block";
    for(let key of Object.keys(rJson["data"])){
        myStr +=`<tr>
                    <td>${key}</td>
                    <td>${rJson["data"][key]["code"]}</td>
                    <td>${rJson["data"][key]["value"] * value}</td>
                 </tr>
                `
    }
    const tableBody  = document.querySelector("tbody");
    tableBody.innerHTML = myStr;
};

document.getElementsByTagName("table");
const btn = document.querySelector('.btn');
btn.addEventListener("click", (e) => {
    e.preventDefault();
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']").value;
    populate(value, currency);
})

