// @ts-check
/**
 * あえてES3を直書きする
 */

/**
 * @var {string[]} keywords 重要なキーワード
 */
var keywords = [
    "jsx,jsとの違い",
    "babel,プリコンパイル",
    "webpack,モジュールバンドル",
    "nodejs,ブラウザとの違い",
    "react,reactの「核」は何か",
    "create-react-app,何を内部で行っているのか",
];

/**
 * @method switchMainView メインとなる要素の表示/非表示を切り替える
 */
var switchMainView = function () {
    var main = document.getElementById("main");
    main.hidden = !main.hidden;
};

/**
 * @method createParagraph キーワードから段落を作成する
 * @param {string} text 段落に格納したいテキスト
 * @returns {HTMLParagraphElement} テキストを格納済みの段落
 */
var createParagraph = function (text) {
    var p = document.createElement("p");
    p.innerText = text;
    return p;
};

/**
 * @method createMainParagraphs キーワード配列をもとに、段落群を作成する
 * @returns {HTMLParagraphElement[]} 作成した段落の配列
 */
var createMainParagraphs = function () {
    var paragraphs = keywords.map(createParagraph);
    return paragraphs;
};

/**
 * @method createTitle タイトルテキストを作成する
 * @returns {HTMLHeadingElement} 作成したテキストヘッダー要素
 */
var createTitle = function () {
    var h1 = document.createElement("h1");
    h1.innerText = "React勉強会";
    h1.classList.add("text-4xl", "py-5");
    return h1;
};

/**
 * @method createButton キーワード表示ボタンを作成する
 * @returns {HTMLButtonElement} 作成したボタン要素
 */
var createButton = function () {
    var button = document.createElement("button");
    button.innerText = "キーワードを表示する";
    button.classList.add(
        "px-8",
        "py-2",
        "my-5",
        "bg-green-500",
        "hover:bg-green-700",
        "rounded-lg",
        "text-white",
        "font-bold"
    );
    button.onclick = switchMainView;
    return button;
};

/**
 * @method createMainContent メインの要素を作成する
 * @returns {HTMLElement} 作成したメイン要素
 * @description 初期状態は非表示
 */
var createMainContent = function () {
    var main = document.createElement("main");
    main.setAttribute("id", "main");
    main.classList.add("bg-white", "w-1/2", "mx-auto", "py-5");
    main.hidden = true;
    //---------------------------------------------
    var paragraphs = createMainParagraphs();
    paragraphs.forEach(function (p) {
        main.append(p);
    });
    return main;
};

/**
 * @summary 各要素を作成し、rootに付与する
 */
var title = createTitle();
var showButton = createButton();
var main = createMainContent();
var root = document.getElementById("root");
root.append(title, showButton, main);

/**
 * @summary body全体のデザイン適用
 */
document.body.classList.add("bg-green-100", "text-center");
