function toggleSkills(card){
    //Toggle active state(open/close)
    card.classList.toggle('active');
    //close other cards when one opens
    document.querySelectorAll('.skill-card').forEach(c=>{if (c !== card)c.classList.remove('active');});
}