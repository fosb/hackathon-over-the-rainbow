const songlist = [
    'https://www.youtube.com/embed/H53QBgHFJUg',
    'https://www.youtube.com/embed/XW5nIlIfR5s',
    'https://www.youtube.com/embed/V1bFr2SWP1I',
    'https://www.youtube.com/embed/iwlFTYT2Fdw',
]


document.getElementById("change-video").addEventListener("click", function() {
    let random = Math.floor(Math.random()*songlist.length)
    document.getElementById('ytVideo').src = songlist[random];
 });