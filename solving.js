const cardDistribution = ()=>{
    const user = [
        {name:'Mr Rashed', birthYear:1999,currentYear:2022, district:'Dhaka',postNo:1200, priority:2},
        {name:'Mr Raju', birthYear:1995,currentYear:2022, district:'Rajshahi',postNo:1211, priority:1},
        {name:'Mst Jahanara', birthYear:1998,currentYear:2022, district:'Dhaka',postNo:1230, priority:6},
        {name:'Mr kader', birthYear:1980,currentYear:2022, district:'Cumilla',postNo:3500, priority:9},
        {name:'Jumila', birthYear:1997,currentYear:2022, district:'Khulna',postNo:7530, priority:7},
        {name:'Rubel', birthYear:1996,currentYear:2022, district:'Rangpur',postNo:2350, priority:3},
        {name:'Jakir', birthYear:1994,currentYear:2022, district:'Dhaka',postNo:1210, priority:4},
        {name:'Tunni', birthYear:1993,currentYear:2022, district:'Barishal',postNo:3250, priority:5},
        {name:'Sumon', birthYear:1991,currentYear:2022, district:'Pabna',postNo:3522, priority:8},
        {name:'Kader', birthYear:1990,currentYear:2022, district:'Dhaka',postNo:1215, priority:10},
    ]
    let i =0;
    let newCard = [];
    for(const users of user){
        i++    
        const serialNum = String(i).padStart(6,'0');
        
        const dis = users.district.slice(0,2).toUpperCase();
        const year = users.currentYear.toString().slice(2,4);
        const yearNum = parseInt(year);
        const postal = users.postNo.toString().slice(0,2);
        const postalNum = parseInt(postal);
        const birthDay = users.birthYear;
        const cardNumber = dis+yearNum+postalNum+birthDay+serialNum;
        if(i%2==0){
            const gift ='R';
            card(cardNumber,gift,users.priority,newCard);
        }
        else{
            gift = 'W';
            card(cardNumber,gift,users.priority,newCard);
        }     
    }
    //sort by priority
    newCard.sort((a,b)=>{
        return(a.priority - b.priority);
    })
    //run output
    console.log(newCard);
}
cardDistribution();
// card///
function card(cardNumber,gift, priority,newCard){ 
    const cards = {cardNumber:cardNumber, gift:gift, priority:priority};
        newCard.push(cards);   
};
