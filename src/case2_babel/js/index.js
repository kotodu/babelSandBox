// @ts-check
/**
 * あえて直書きする
 */

/**
 * @const {string[]} keywords 重要なキーワード
 */
const keywords = [
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
const switchMainView = () => {
    const main = document.getElementById("main");
    main.hidden = !main.hidden;
};

// createParagraphはmapの内部に

/**
 * @method createMainParagraphs キーワード配列をもとに、段落群を作成する
 * @returns {HTMLParagraphElement[]} 作成した段落の配列
 */
const createMainParagraphs = () => {
    const paragraphs = keywords.map((text) => {
        const p = document.createElement("p");
        p.innerText = text;
        return p;
    });
    return paragraphs;
};

/**
 * @method createTitle タイトルテキストを作成する
 * @returns {HTMLHeadingElement} 作成したテキストヘッダー要素
 */
const createTitle = () => {
    const h1 = document.createElement("h1");
    h1.innerText = "React勉強会";
    h1.classList.add("text-4xl", "py-5");
    return h1;
};

/**
 * @method createButton キーワード表示ボタンを作成する
 * @returns {HTMLButtonElement} 作成したボタン要素
 */
const createButton = () => {
    const button = document.createElement("button");
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
const createMainContent = () => {
    const main = document.createElement("main");
    main.setAttribute("id", "main");
    main.classList.add("bg-white", "w-1/2", "mx-auto", "py-5");
    main.hidden = true;
    //---------------------------------------------
    const paragraphs = createMainParagraphs();
    /**
     * spread構文
     */
    main.append(...paragraphs);
    return main;
};

/**
 * @summary 各要素を作成し、rootに付与する(分割代入)
 */
const [title, showButton, main] = [
    createTitle(),
    createButton(),
    createMainContent(),
];
const root = document.getElementById("root");
root.append(title, showButton, main);

/**
 * @summary body全体のデザイン適用
 */
document.body.classList.add("bg-green-100", "text-center");
