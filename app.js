// ========== DATA ==========
const ADMIN_EMAIL = 'admin@fce.com';
const ADMIN_PASSWORD = 'admin123';

const EXAMS = [
    {
        id: 1, name: 'FCE Reading Part 1', description: 'Multiple-choice cloze', parts: 1,
        questions: [
            { q: 'She ___ to the gym every morning.', options: ['go', 'goes', 'going', 'gone'], correct: 1 },
            { q: 'I have ___ finished my homework.', options: ['just', 'yet', 'already', 'still'], correct: 0 },
            { q: 'They ___ playing football when it started to rain.', options: ['are', 'was', 'were', 'is'], correct: 2 },
            { q: 'He ___ been to Paris three times.', options: ['have', 'has', 'is', 'was'], correct: 1 },
            { q: 'We ___ dinner at 7 PM yesterday.', options: ['have', 'had', 'has', 'having'], correct: 1 },
            { q: 'She is ___ than her sister.', options: ['tall', 'taller', 'tallest', 'more tall'], correct: 1 },
            { q: 'I ___ like to have a coffee, please.', options: ['will', 'would', 'am', 'have'], correct: 1 },
            { q: 'The book ___ written by a famous author.', options: ['is', 'was', 'were', 'are'], correct: 1 }
        ]
    },
    {
        id: 2, name: 'FCE Reading Part 2', description: 'Open cloze', parts: 1,
        questions: [
            { q: 'I am interested ___ learning Spanish.', options: ['in', 'on', 'at', 'for'], correct: 0 },
            { q: 'She is good ___ playing the piano.', options: ['in', 'at', 'on', 'for'], correct: 1 },
            { q: 'He depends ___ his parents for money.', options: ['in', 'at', 'on', 'for'], correct: 2 },
            { q: 'I am looking forward ___ seeing you.', options: ['to', 'at', 'on', 'for'], correct: 0 },
            { q: 'She is afraid ___ spiders.', options: ['of', 'at', 'on', 'for'], correct: 0 },
            { q: 'We arrived ___ the airport on time.', options: ['in', 'at', 'on', 'to'], correct: 1 },
            { q: 'He is married ___ a doctor.', options: ['with', 'to', 'for', 'at'], correct: 1 },
            { q: 'I believe ___ what you said.', options: ['on', 'at', 'in', 'for'], correct: 2 }
        ]
    },
    {
        id: 3, name: 'FCE Reading Part 3', description: 'Reading comprehension', parts: 1,
        questions: [
            { q: 'What is the main idea of the passage?', options: ['Travel', 'Education', 'Health', 'Technology'], correct: 1 },
            { q: 'The author suggests that...', options: ['reading is important', 'writing is hard', 'speaking is easy', 'listening is boring'], correct: 0 },
            { q: 'According to the text, students should...', options: ['study less', 'practice more', 'skip classes', 'ignore homework'], correct: 1 },
            { q: 'The word "difficult" in the passage means...', options: ['easy', 'hard', 'fun', 'quick'], correct: 1 },
            { q: 'What is the best title for this text?', options: ['My Day', 'Learning English', 'Food', 'Sports'], correct: 1 },
            { q: 'The passage is mainly about...', options: ['history', 'science', 'education', 'art'], correct: 2 },
            { q: 'Which statement is TRUE?', options: ['All students fail', 'Practice helps', 'Reading is useless', 'Teachers are bad'], correct: 1 },
            { q: 'The author\'s tone is...', options: ['angry', 'sad', 'positive', 'negative'], correct: 2 }
        ]
    },
    {
        id: 4, name: 'FCE Use of English Part 4', description: 'Key word transformations', parts: 1,
        questions: [
            { q: 'Choose the correct transformation: "She said, \'I am tired.\'"', options: ['She said she was tired', 'She said she is tired', 'She says she was tired', 'She said she tired'], correct: 0 },
            { q: '"I will help you," he said.', options: ['He said he would help me', 'He said he will help me', 'He says he would help me', 'He said he helped me'], correct: 0 },
            { q: '"Where do you live?" she asked.', options: ['She asked where I lived', 'She asked where do I live', 'She asked where I live', 'She asks where I lived'], correct: 0 },
            { q: '"Don\'t be late," he told me.', options: ['He told me not to be late', 'He told me don\'t be late', 'He told me to not be late', 'He tells me not be late'], correct: 0 },
            { q: '"Have you seen it?" she asked.', options: ['She asked if I had seen it', 'She asked have I seen it', 'She asked if I have seen it', 'She asks if I had seen it'], correct: 0 },
            { q: '"I can swim," he said.', options: ['He said he could swim', 'He said he can swim', 'He says he could swim', 'He said he swim'], correct: 0 },
            { q: '"Please help me," she said.', options: ['She asked me to help her', 'She said please help me', 'She asks me to help her', 'She told me please help'], correct: 0 },
            { q: '"I am going home," he said.', options: ['He said he was going home', 'He said he is going home', 'He says he was going home', 'He said he going home'], correct: 0 }
        ]
    },
    {
        id: 5, name: 'FCE Use of English Part 5', description: 'Multiple choice', parts: 1,
        questions: [
            { q: 'The word "big" is similar to...', options: ['small', 'large', 'tiny', 'short'], correct: 1 },
            { q: 'The opposite of "happy" is...', options: ['glad', 'sad', 'joyful', 'cheerful'], correct: 1 },
            { q: '"Quickly" is an...', options: ['noun', 'verb', 'adjective', 'adverb'], correct: 3 },
            { q: 'The plural of "child" is...', options: ['childs', 'childes', 'children', 'childrens'], correct: 2 },
            { q: 'The past tense of "go" is...', options: ['goed', 'gone', 'went', 'going'], correct: 2 },
            { q: 'Which is a synonym of "beautiful"?', options: ['ugly', 'pretty', 'bad', 'horrible'], correct: 1 },
            { q: 'The comparative of "good" is...', options: ['gooder', 'more good', 'better', 'best'], correct: 2 },
            { q: '"Quickly" means...', options: ['slow', 'fast', 'late', 'early'], correct: 1 }
        ]
    },
    {
        id: 6, name: 'FCE Writing Part 6', description: 'Writing tasks', parts: 1,
        questions: [
            { q: 'Which is the correct formal greeting?', options: ['Hey!', 'Dear Sir/Madam', 'Hi there', 'Yo'], correct: 1 },
            { q: 'An essay should have...', options: ['no structure', 'introduction, body, conclusion', 'only conclusion', 'only introduction'], correct: 1 },
            { q: 'Which linking word shows contrast?', options: ['and', 'because', 'however', 'so'], correct: 2 },
            { q: 'A formal email ends with...', options: ['Bye!', 'XOXO', 'Yours faithfully', 'See ya'], correct: 2 },
            { q: 'Which is NOT a linking word?', options: ['however', 'therefore', 'apple', 'moreover'], correct: 2 },
            { q: 'The purpose of an introduction is to...', options: ['conclude', 'introduce the topic', 'give examples', 'say goodbye'], correct: 1 },
            { q: 'Paragraphs should be...', options: ['very long', 'organized by idea', 'random', 'one line only'], correct: 1 },
            { q: 'Formal writing avoids...', options: ['complete sentences', 'proper grammar', 'slang', 'punctuation'], correct: 2 }
        ]
    },
    {
        id: 7, name: 'FCE Listening Part 7', description: 'Listening comprehension', parts: 1,
        questions: [
            { q: 'In listening tests, you should...', options: ['ignore the audio', 'listen carefully', 'write everything', 'sleep'], correct: 1 },
            { q: 'What helps in listening?', options: ['noise', 'concentration', 'distraction', 'talking'], correct: 1 },
            { q: 'If you miss a word, you should...', options: ['panic', 'continue listening', 'stop', 'cry'], correct: 1 },
            { q: 'Listening practice improves...', options: ['nothing', 'speaking only', 'overall English', 'writing only'], correct: 2 },
            { q: 'Good listeners...', options: ['interrupt', 'pay attention', 'sleep', 'talk loudly'], correct: 1 },
            { q: 'Before listening, you should...', options: ['read the questions', 'close your eyes', 'sing', 'run'], correct: 0 },
            { q: 'Note-taking helps with...', options: ['forgetting', 'remembering', 'sleeping', 'eating'], correct: 1 },
            { q: 'Listening skills are useful for...', options: ['only exams', 'real life', 'nothing', 'only school'], correct: 1 }
        ]
    }
];

// ========== STATE ==========
let currentUser = null;
let currentExam = null;
let currentQuestionIndex = 0;
let userAnswers = [];

// ========== INIT ==========
function init() {
    let users = JSON.parse(localStorage.getItem('fce_users') || '[]');
    if (!users.find(u => u.email === ADMIN_EMAIL)) {
        users.push({ name: 'Admin', email: ADMIN_EMAIL, password: ADMIN_PASSWORD, role: 'admin', completed: 0 });
        localStorage.setItem('fce_users', JSON.stringify(users));
    }

    const savedUser = localStorage.getItem('fce_currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        if (currentUser.role === 'admin') {
            showScreen('adminScreen');
            loadAdminData();
        } else {
            showScreen('platformScreen');
            document.getElementById('userName').textContent = currentUser.name;
            loadExams();
        }
    }
}

// ========== AUTH ==========
function showLogin() {
    document.getElementById('loginForm').classList.add('active');
    document.getElementById('registerForm').classList.remove('active');
}

function showRegister() {
    document.getElementById('registerForm').classList.add('active');
    document.getElementById('loginForm').classList.remove('active');
}

function login() {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    if (!email || !password) { alert('Zəhmət olmasa bütün sahələri doldurun!'); return; }

    const users = JSON.parse(localStorage.getItem('fce_users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) { alert('Email və ya parol səhvdir!'); return; }

    currentUser = user;
    localStorage.setItem('fce_currentUser', JSON.stringify(user));

    if (user.role === 'admin') {
        showScreen('adminScreen');
        loadAdminData();
    } else {
        showScreen('platformScreen');
        document.getElementById('userName').textContent = user.name;
        loadExams();
    }
}

function register() {
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;

    if (!name || !email || !password) { alert('Zəhmət olmasa bütün sahələri doldurun!'); return; }

    const users = JSON.parse(localStorage.getItem('fce_users') || '[]');
    if (users.find(u => u.email === email)) { alert('Bu email artıq qeydiyyatdan keçib!'); return; }

    users.push({ name, email, password, role: 'student', completed: 0 });
    localStorage.setItem('fce_users', JSON.stringify(users));

    alert('Qeydiyyat uğurla tamamlandı! İndi giriş edə bilərsiniz.');
    showLogin();
    document.getElementById('regName').value = '';
    document.getElementById('regEmail').value = '';
    document.getElementById('regPassword').value = '';
}

function logout() {
    currentUser = null;
    localStorage.removeItem('fce_currentUser');
    showScreen('authScreen');
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
}

// ========== SCREENS ==========
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

// ========== EXAMS ==========
function loadExams() {
    const container = document.getElementById('examsList');
    container.innerHTML = EXAMS.map(exam => `
        <div class="exam-card" onclick="startExam(${exam.id})">
            <h3>${exam.name}</h3>
            <p>${exam.description}</p>
            <div class="exam-meta">📚 ${exam.parts} Part · ❓ ${exam.questions.length} sual</div>
        </div>
    `).join('');
}

function startExam(examId) {
    currentExam = EXAMS.find(e => e.id === examId);
    currentQuestionIndex = 0;
    userAnswers = new Array(currentExam.questions.length).fill(null);
    document.getElementById('examTitle').textContent = currentExam.name;
    showScreen('examScreen');
    showQuestion();
}

function showQuestion() {
    const question = currentExam.questions[currentQuestionIndex];
    const container = document.getElementById('questionContainer');
    
    container.innerHTML = `
        <div class="question-text">${currentQuestionIndex + 1}. ${question.q}</div>
        <ul class="options-list">
            ${question.options.map((opt, i) => `
                <li class="option-item ${userAnswers[currentQuestionIndex] === i ? 'selected' : ''}" 
                    onclick="selectOption(${i})">
                    ${String.fromCharCode(65 + i)}. ${opt}
                </li>
            `).join('')}
        </ul>
    `;

    const total = currentExam.questions.length;
    document.getElementById('questionCounter').textContent = `${currentQuestionIndex + 1}/${total}`;
    document.getElementById('progressFill').style.width = `${((currentQuestionIndex + 1) / total) * 100}%`;

    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
    document.getElementById('nextBtn').textContent = currentQuestionIndex === total - 1 ? 'Bitir' : 'Növbəti';
}

function selectOption(index) {
    userAnswers[currentQuestionIndex] = index;
    showQuestion();
}

function prevQuestion() {
    if (currentQuestionIndex > 0) { currentQuestionIndex--; showQuestion(); }
}

function nextQuestion() {
    if (userAnswers[currentQuestionIndex] === null) { alert('Zəhmət olmasa cavab seçin!'); return; }

    if (currentQuestionIndex < currentExam.questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        finishExam();
    }
}

function finishExam() {
    let score = 0;
    currentExam.questions.forEach((q, i) => { if (userAnswers[i] === q.correct) score++; });

    const results = JSON.parse(localStorage.getItem('fce_results') || '[]');
    results.push({
        userId: currentUser.email, userName: currentUser.name,
        examId: currentExam.id, examName: currentExam.name,
        score: score, total: currentExam.questions.length,
        date: new Date().toISOString()
    });
    localStorage.setItem('fce_results', JSON.stringify(results));

    const users = JSON.parse(localStorage.getItem('fce_users') || '[]');
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    if (userIndex !== -1) {
        users[userIndex].completed = (users[userIndex].completed || 0) + 1;
        localStorage.setItem('fce_users', JSON.stringify(users));
    }

    document.getElementById('scoreValue').textContent = score;
    document.getElementById('totalQuestions').textContent = currentExam.questions.length;
    
    const percentage = (score / currentExam.questions.length) * 100;
    let message = percentage >= 90 ? '🌟 Əla nəticə!' : percentage >= 70 ? '👍 Yaxşı iş!' : percentage >= 50 ? '📚 Daha çox çalış!' : '💪 Təkrar cəhd et!';
    document.getElementById('scoreMessage').textContent = message;
    
    showScreen('resultScreen');
}

function backToPlatform() {
    showScreen('platformScreen');
    loadExams();
}

// ========== ADMIN ==========
function openAdminPanel() {
    const password = prompt('Admin parolu:');
    if (password === ADMIN_PASSWORD) {
        currentUser = { name: 'Admin', email: ADMIN_EMAIL, role: 'admin' };
        showScreen('adminScreen');
        loadAdminData();
    } else if (password !== null) { alert('Parol səhvdir!'); }
}

function showAdminTab(tabName, btnElement) {
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    
    document.getElementById(tabName + 'Tab').classList.add('active');
    if (btnElement) btnElement.classList.add('active');
}

function loadAdminData() {
    loadUsersTable();
    loadExamsTable();
    loadScoreExamSelect();
    loadResultsStudentSelect();
    loadResultsTable();
}

function loadUsersTable() {
    const users = JSON.parse(localStorage.getItem('fce_users') || '[]');
    const tbody = document.getElementById('usersTableBody');
    tbody.innerHTML = users.map((u, i) => `
        <tr>
            <td>${u.name}</td>
            <td>${u.email}</td>
            <td><span style="padding:4px 10px;background:${u.role==='admin'?'#ff6b6b':'#4ecdc4'};color:white;border-radius:5px;font-size:0.85rem;">${u.role}</span></td>
            <td>${u.completed || 0}</td>
            <td>${u.role !== 'admin' ? `<button onclick="deleteUser(${i})" style="padding:6px 12px;background:#ff4757;color:white;border:none;border-radius:5px;cursor:pointer;">Sil</button>` : '-'}</td>
        </tr>
    `).join('');
}

function deleteUser(index) {
    if (!confirm('Bu istifadəçini silmək istədiyinizə əminsiniz?')) return;
    const users = JSON.parse(localStorage.getItem('fce_users') || '[]');
    users.splice(index, 1);
    localStorage.setItem('fce_users', JSON.stringify(users));
    loadUsersTable();
}

function loadExamsTable() {
    const tbody = document.getElementById('examsTableBody');
    tbody.innerHTML = EXAMS.map(exam => `
        <tr><td>${exam.id}</td><td>${exam.name}</td><td>${exam.parts}</td><td>${exam.questions.length}</td></tr>
    `).join('');
}

function loadScoreExamSelect() {
    const select = document.getElementById('scoreExamSelect');
    select.innerHTML = '<option value="">-- Seçin --</option>' + EXAMS.map(e => `<option value="${e.id}">${e.name}</option>`).join('');
}

function loadScoreForm() {
    const examId = document.getElementById('scoreExamSelect').value;
    const container = document.getElementById('scoreFormContainer');
    if (!examId) { container.innerHTML = ''; return; }
    
    const exam = EXAMS.find(e => e.id == examId);
    container.innerHTML = exam.questions.map((q, i) => `
        <div style="margin-bottom:15px;padding:15px;background:#f8f9ff;border-radius:8px;">
            <strong>Sual ${i+1}:</strong> ${q.q}<br>
            <label style="margin-top:10px;display:block;">Bal (1-10):</label>
            <input type="number" min="1" max="10" value="1" style="padding:8px;border:2px solid #e0e0e0;border-radius:5px;width:100px;" onchange="updateQuestionScore(${examId}, ${i}, this.value)">
        </div>
    `).join('');
}

function updateQuestionScore(examId, questionIndex, score) {
    const scores = JSON.parse(localStorage.getItem('fce_scores') || '{}');
    if (!scores[examId]) scores[examId] = {};
    scores[examId][questionIndex] = parseInt(score);
    localStorage.setItem('fce_scores', JSON.stringify(scores));
}

function loadResultsStudentSelect() {
    const users = JSON.parse(localStorage.getItem('fce_users') || '[]');
    const students = users.filter(u => u.role !== 'admin');
    const select = document.getElementById('resultsStudentSelect');
    select.innerHTML = '<option value="">-- Bütün şagirdlər --</option>' + students.map(s => `<option value="${s.email}">${s.name}</option>`).join('');
}

function loadResultsTable() {
    const results = JSON.parse(localStorage.getItem('fce_results') || '[]');
    const filterEmail = document.getElementById('resultsStudentSelect')?.value;
    const filtered = filterEmail ? results.filter(r => r.userId === filterEmail) : results;
    const tbody = document.getElementById('resultsTableBody');
    
    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;color:#888;">Nəticə yoxdur</td></tr>';
        return;
    }
    
    tbody.innerHTML = filtered.map(r => `
        <tr>
            <td>${r.userName}</td>
            <td>${r.examName}</td>
            <td><strong style="color:#667eea;">${r.score}/${r.total}</strong></td>
            <td>${new Date(r.date).toLocaleString('az-AZ')}</td>
        </tr>
    `).join('');
}

// ========== START ==========
init();