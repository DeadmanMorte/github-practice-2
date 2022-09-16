// create variables to be tracked/changed
let mood = 0
let m_tot = 0
let m_num = 0

moodScoreBtn1 = document.querySelector('#bad-vote')
moodScoreBtn1.addEventListener("click", function( ){
    m_tot = m_tot + 1
    m_num = m_num + 1
    mood = m_tot / m_num
    console.log(mood)
})

moodScoreBtn2 = document.querySelector('#poor-vote')
moodScoreBtn2.addEventListener("click", function( ){
    m_tot = m_tot + 2
    m_num = m_num + 1
    mood = m_tot / m_num
    console.log(mood)
})
