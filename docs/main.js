(function () {

    function getBusinessDatesCount(startDate, endDate) {
        let count = 0;
        const curDate = new Date(startDate.getTime());
        while (curDate <= endDate) {
            const dayOfWeek = curDate.getDay();
            if([0, 6].indexOf(dayOfWeek) == -1) 
                count++;
            curDate.setDate(curDate.getDate() + 1);
        }
        return count;
    }

    let start = new Date(2021, 7, 3);

    let backendPersons = [
        'Karol',
        'Marcin',
        'Janek',
        'Arek',
        'Szymon',
    ]

    let frontEndPersons = [
        'Joanna',
        'Wojciech',
        'Jakub',
    ];
        
    var workDayCount = getBusinessDatesCount(start, new Date())

    backendMerger = backendPersons[workDayCount%backendPersons.length];
    frontendMerger = frontEndPersons[workDayCount%frontEndPersons.length];

    document.getElementById('backend').innerText = backendMerger;
    document.getElementById('front').innerText = frontendMerger;

    document.getElementById('btn-disagree').onclick = e => document.getElementById('answear').classList.add('visible');
})()