function showContent(contentType) {
    let rewardContent = document.getElementById("rewardContent");
    let accountContent = document.getElementById("accountContent");
    let paymentContent = document.getElementById("paymentContent");
    let ordersContent = document.getElementById("ordersContent");

    let rewardLink = document.getElementById("reward");
    let accountLink = document.getElementById("account");
    let paymentLink = document.getElementById("payment");
    let ordersLink = document.getElementById("orders");

    let rewardLogo = document.getElementById("vipLogo");
    let goldLogo = document.getElementById("goldLogo");
    let memberLogo = document.getElementById("memberLogo");
    let eliteLogo = document.getElementById("eliteLogo");
    let orderDetails = document.getElementById("orderDetails");
    orderDetails.classList.add("hidden");
    switch (contentType) {
        case "orders":
            ordersContent.classList.remove("hidden");
            accountContent.classList.add("hidden");
            paymentContent.classList.add("hidden");
            rewardContent.classList.add("hidden");
            ordersLink.classList.add("selected");
            accountLink.classList.remove("selected");
            paymentLink.classList.remove("selected");
            rewardLink.classList.remove("selected");
            rewardLogo.classList.remove("hidden");
            goldLogo.classList.add("hidden");
            memberLogo.classList.add("hidden");
            eliteLogo.classList.add("hidden");

            break;
        case "rewards":
            rewardContent.classList.remove("hidden");
            ordersContent.classList.add("hidden");
            accountContent.classList.add("hidden");
            paymentContent.classList.add("hidden");
            rewardLink.classList.add("selected");
            ordersLink.classList.remove("selected");
            accountLink.classList.remove("selected");
            paymentLink.classList.remove("selected");
            rewardLogo.classList.add("hidden");
            goldLogo.classList.remove("hidden");
            memberLogo.classList.add("hidden");
            eliteLogo.classList.add("hidden");
            break;

        case "payment":
            paymentContent.classList.remove("hidden");
            rewardContent.classList.add("hidden");
            ordersContent.classList.add("hidden");
            accountContent.classList.add("hidden");
            paymentLink.classList.add("selected");
            rewardLink.classList.remove("selected");
            ordersLink.classList.remove("selected");
            accountLink.classList.remove("selected");
            rewardLogo.classList.add("hidden");
            goldLogo.classList.add("hidden");
            memberLogo.classList.add("hidden");
            eliteLogo.classList.remove("hidden");
            break;
        case "account":
            accountContent.classList.remove("hidden");
            paymentContent.classList.add("hidden");
            rewardContent.classList.add("hidden");
            ordersContent.classList.add("hidden");
            accountLink.classList.add("selected");
            rewardLink.classList.remove("selected");
            ordersLink.classList.remove("selected");
            paymentLink.classList.remove("selected");
            rewardLogo.classList.add("hidden");
            goldLogo.classList.add("hidden");
            memberLogo.classList.remove("hidden");
            eliteLogo.classList.add("hidden")
            break;
    }
}

function showOrderDetails() {
    let orderContent = document.getElementById("ordersContent")
    let orderDetails = document.getElementById("orderDetails")
    orderContent.classList.add("hidden");
    orderDetails.classList.remove("hidden");
}