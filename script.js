// List of 30 songs (URLs or file paths)
const songs = [
    { title: "🎉 hii kundu epadi nama creation ..🎉", url: "q92qnqIMkZs?si=U6P0Vk-V2pfstCy4" },
    { title: "🎉 parah inaikum vanthuiruka..🎉", url: "zKBY8iffWl0?si=cAsyR5jEFkAQrzxa" },
    { title: "🎉 inaiku day enna solu 3 dhan..🎉", url: "4bZ-MAOLbGc?si=V2e9OZGwCmGGal9" },
    { title: "🎉 vanakkam epadi irukinga..🎉", url: "Uwwa1uM3mmY?si=lN8vxQPrSFnWQUzS" },
    { title: "🎉 Hey nee inaikume vanthutiya ah ..🎉", url: "N_jkpSsF54A?si=tyAkLGPEqcgy669k" },
    { title: "🎉 yaaru enga etti pathathu ohh nama ishu va ..🎉", url: "kQBuN9e_qbU?si=NIt8zD8g4_h1kaO-" },
    { title: "🎉 unaga ah oru song kelu..🎉", url: "PnV0RQ96XU4?si=UdpOnuFx7rxRLQhx" },
    { title: "🎉 sunday nalla enjoy pannu..🎉", url: "x-j36lxT568?si=_0vhImMuh33T_XwL" },
    { title: "🎉 kavala padatha murugar irukarula ..🎉", url: "ifZYNAKeq3w?si=QHEUx3cN_ppeK27R" },
    { title: "🎉 ungalu inaiku vanthu iruka song pathina...🎉", url: "SfkV84-Ivdw?si=rg30brdPd6immega" },
    { title: "🎉 vanga ma epadi ma 11 song kekka vanthingala athuka ah unga song..🎉", url: "_Xxkhdj4qUA?si=31Igua65in6Cdx6H" },
    { title: "🎉 kelu kelu ..🎉", url: "7OwFj2fYB94?si=wcP5wAzCdQgv33OC" },
    { title: "🎉 inaiku ungal rasi paadi lucky day ah soluran intha paithiya karan ganesh..🎉", url: "wFRYtDkG2L4?si=D96Nzxs2ANBgB2vV" },
    { title: "🎉 poda poriki sollu..🎉", url: "tzXYQGFUqmo?si=WYPcszfApvdqYLmk" },
    { title: "🎉 evalo dhan kovam irunthalum song kettu pomma ah..🎉", url: "0miGyDrgf_E?si=oyrnI3f8NGhiJPLl" },
    { title: "🎉 evalo nal nama kadanthu vanthutom inum kojam nal dhan..🎉", url: "eIvOmADK46Q?si=rIQ3zM3dbUF94O1r" },
    { title: "🎉 inaiku nee romba happy ah irupa paaran..🎉", url: "dvWdFMCC1-I?si=SE2NhNec_HAQ6dN0" },
    { title: "🎉 ponnu na epadi sirikanum summa somma killa orutti vitta kadamuda kadamudanu ieukka vena so be smile..🎉", url: "rL3WGa-VTdM?si=nkfS6TvZp2Wy_g-F" },
    { title: "🎉 aiyoo aiyoo vanthtaleee ..🎉", url: "l98b32yBiQg?si=olzx4he9aWDD99wL" },
    { title: "🎉 nee romba lucky yen sollu ..🎉", url: "CFj1HXUGhaY?si=VyIhIK4Gwqpx2qvv" },
    { title: "🎉 sat la anchanir kovil ponum maranthuratha..🎉", url: "xVcoYF--0mM?si=kViWbFewHOk3ASrg" },
    { title: "🎉 hlo kundu medam neengala..🎉", url: "GU2S7XzBJ_o?si=ASYasYmXNATk9Wil" },
    { title: "🎉 unaku romba pudicha dish seji illana vangi sapdu inaiku ..🎉", url: "OHu-T6s5_u0?si=U4KAXiypQqeru2bZ" },
    { title: "🎉 athadi epadi pa crt ah vanthuta ah..🎉", url:"YFYiTS46x-8?si=UUR4uvi1MZJLDxf1" },
    { title: "🎉 alanum nee romba nalla ponnu pa ..🎉", url: "A_U6Jhoiiik?si=Ask39Vq9lIoDn-ea" },
    { title: "🎉 inaiku unaku oru kelvi nee epadi patta lusu ??..🎉", url: "DYFORxnDHX8?si=G74D9ERxMv6pnkvT" },
    { title: "🎉 enna nethu ketta keli nagam irukka illa thirumba solanum ah nee seriyana paithiyakari di..🎉", url: "IozU7MsRcoc?si=NMoU-j8h4PA8q-r4" },
    { title: "🎉 ithu ethana nal irukum  un bday ku....🎉", url: "DhCYfOiDUEw?si=7-0W2y9pio1p3FPq" },
    { title: "🎉 vankam gud mrng summa gud mrng pottan may be morng pana so..🎉", url: "dsrku40uZMc?si=0DfhQggHuZz9_T7N" },
    { title: "🎉 super pa daily crt ah kekka vanthura pora..🎉", url: "fYkQzTAx3Yo?si=diJVMtqWC_-fwJal" },
    { title: "🎉 vanga vanga inaiku song enna na..🎉", url: "K9jQm0FZZ98?si=hWw1ijXeLwtqZUo1" },
    { title: "🎉advance happy bday lusu..🎉", url: "H1frBzuWqqM?si=hiAR2U8rs4rSKIqa" },
    { title: "🎉 happy bday kundu...enaku romba happy ah iruku unna evalo nal enna vanthu vanthu pakka vachathuku i miss lot di byee...🎉", url: "38e5IyroBrY?si=U8HEErkLT54G1I-E" },
    { title: "🎉 happy bday kundu...enaku romba happy ah iruku unna evalo nal enna vanthu vanthu pakka vachathuku i miss lot di byee...🎉", url: "38e5IyroBrY?si=U8HEErkLT54G1I-E" }// Add up to 30 songs
];


// Get today's date
const today = new Date();

// Define the start date (December 1) and end date (January 2)
const startDate = new Date(today.getFullYear(), 11, 1); // December 1
const endDate = new Date(today.getFullYear() + 1, 0, 3); // January 2

// Adjust year if today is in January
if (today.getMonth() === 0) {
    startDate.setFullYear(today.getFullYear() - 1); // Use previous year's December 1
}

// Calculate the total days since December 1
const dayDifference = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));

// Ensure the player works only between Dec 1 and Jan 2
if (today >= startDate && today < endDate) {
    // Calculate the song index based on day difference (continuous index through Dec 1 - Jan 2)
    const songIndex = dayDifference % songs.length;

    // Set the song
    const iframePlayer = document.getElementById('song-player');
    const songTitle = document.getElementById('song-title');
    const dateInfo = document.getElementById('date-info');
    iframePlayer.src = `https://www.youtube.com/embed/${songs[songIndex].url}?autoplay=1&rel=0&modestbranding=1`; // For YouTube embedding or use your own embedding link
    songTitle.textContent = songs[songIndex].title;
    dateInfo.textContent = `Today is ${today.toDateString()}. Enjoy today's song!`;


} else {
    // Hide the player and show the unavailable message if out of range
    const playerContainer = document.querySelector('.spotify-player');
    const unavailableMessage = document.getElementById('unavailable-message');
    playerContainer.style.display = 'none';
    unavailableMessage.style.display = 'block';
}

// Timer Update Function
const timerHours = document.getElementById('timer-hours');
const timerMinutes = document.getElementById('timer-minutes');
const timerSeconds = document.getElementById('timer-seconds');

function updateTimer() {
    const now = new Date();
    const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const timeRemaining = nextMidnight - now;

    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
    const seconds = Math.floor((timeRemaining / 1000) % 60);

    // Update the timer elements
    timerHours.textContent = String(hours).padStart(2, '0');
    timerMinutes.textContent = String(minutes).padStart(2, '0');
    timerSeconds.textContent = String(seconds).padStart(2, '0');
}

// Start the timer
setInterval(updateTimer, 1000);
updateTimer();
// Add Mouse Movement Emojis
document.body.addEventListener('mousemove', (event) => {
    const emojis = [, '🖤', '❤️', '🎈', '✨','💝'];
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = `${event.pageX}px`;
    emoji.style.top = `${event.pageY}px`;
    emoji.style.fontSize = `${Math.random() * 1 + 1}rem`; // Random font size
    document.body.appendChild(emoji);

    // Remove emoji after animation ends
    setTimeout(() => {
        emoji.remove();
    }, 3000);
});
