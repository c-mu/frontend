// クイズ
const quiz = [
    {
        question: '2024年に新しい紙幣が登場することが発表されました。新5000円札に描かれるのは誰？',
        answers: ['津田梅子','渋沢栄一','北里柴三郎','聖徳太子'],
        correct: '津田梅子'
    },{
        question: 'ゲーム史上、最も売れたゲーム機はどれ？',
        answers: ['スーパーファミコン','PlayStation 2','ニンテンドーDS','Xbox 360'],
        correct: 'ニンテンドーDS'
    },{
        question: '「Python」なんて読む？',
        answers: ['フィトン','パイソン','ピーソン','ピーマン'],
        correct: 'パイソン'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    let buttonLength = $button.length;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解！');
        score++;
    }else{
        window.alert('不正解！');
    }

    quizIndex++;

    if(quizIndex < quizLength){
        setupQuiz();
    }else{
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
    }
};

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
