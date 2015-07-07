function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var imCompetitorData = [
    {
        value: 700,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "WhatsApp"
    },
    {
        value: 600,
        color: getRandomColor(),
        highlight: "#FFC870",
        label: "Facebook Messenger"
    },
    {
        value: 576,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "QQ Mobile"
    },
    {
        value: 500,
        color: getRandomColor(),
        highlight: "#FFC870",
        label: "WeChat"
    },
    {
        value: 300,
        color: getRandomColor(),
        highlight: "#FFC870",
        label: "Skype"
    },
    {
        value: 236,
        color: getRandomColor(),
        highlight: "#FFC870",
        label: "Viber"
    },
    {
        value: 181,
        color: getRandomColor(),
        highlight: "#FFC870",
        label: "LINE"
    },
    {
        value: 200,
        color: getRandomColor(),
        highlight: "#FFC870",
        label: "Kik"
    },
    {
        value: 91,
        color: getRandomColor(),
        highlight: "#FFC870",
        label: "BlackBerry Messenger"
    },
    {
        value: 48,
        color: getRandomColor(),
        highlight: "#FFC870",
        label: "KakaoTalk"
    },
    {
        value: 20,
        color: getRandomColor(),
        highlight: "#FFC870",
        label: "Autres"
    }
]