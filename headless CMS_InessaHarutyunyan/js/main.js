//yay working//
console.log('hello world');

//async/await
//TOP CARDS
async function demoFunction(){
    try {
        const temp = await fetch("../data/content.json");
        const data = await temp.json();
        
        const cardContainers = document.querySelectorAll('.topCards .card');

        data.cards.forEach((cardItem, index) => {
            const cardContainer = cardContainers[index];
            const cardSubtitle = cardContainer.querySelector('.card-subtitle');
            const cardTitle = cardContainer.querySelector('.card-title');

            cardSubtitle.textContent = cardItem.card_name;
            cardTitle.textContent = cardItem.task_number;
        });
    } catch (error) {
        console.log('error: ', error);
    }
}

demoFunction();

//GRAPH FETCH
async function functionGraph() {
    try {
        const temp = await fetch("../data/content.json");
        const data = await temp.json();
        
        const graphItems = data.graph;

        const h8Elements = document.querySelectorAll('#graph .h8');
        const h3Elements = document.querySelectorAll('#graph .h3');

        graphItems.forEach((item, index) => {
            h8Elements[index].textContent = item.card_name;
            h3Elements[index].textContent = item.task_number;
        });
    } catch (error) {
        console.log('error: ', error);
    }
}

functionGraph();

//SIDEBAR FETCH
async function fetchData() {
    try {
        const temp = await fetch('../data/content.json');
        const data = await temp.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function functionSidebar() {
    const data = await fetchData();


    // for main items
    const sidebarItems = document.querySelectorAll('.sidebar-nav .icontext');
    data.sidebar_items.forEach((item, index) => {
        sidebarItems[index].innerText = item;
    });

    //for additional items
    const additionalItems = document.querySelectorAll('.sidebar-nav1 .icontext');
    data.additional_Items.forEach((item, index) => {
        additionalItems[index].innerText = item;
    });
}

functionSidebar();