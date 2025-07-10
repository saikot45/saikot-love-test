
function calculateLove() {
    const yourName = document.getElementById('yourName').value.trim();
    const partnerName = document.getElementById('partnerName').value.trim();
    if (!yourName || !partnerName) {
        alert('Please enter both names!');
        return;
    }
    const lovePercent = Math.floor(Math.random() * 51) + 50;
    document.getElementById('result').innerHTML = `❤️ ${yourName} and ${partnerName} have ${lovePercent}% love compatibility! ❤️`;
}
