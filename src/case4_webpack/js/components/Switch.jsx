/**
 * @method switchMainView メインとなる要素の表示/非表示を切り替える
 */
const switchMainView = () => {
    /**
     * stateを利用していないので不自然
     */
    const main = document.getElementById("main");
    main.hidden = !main.hidden;
};

/**
 * @method createButton キーワード表示ボタンを作成する
 * @returns {JSX.Element} 作成したボタン要素
 */
const createButton = () => {
    const button = (
        <button
            className="
                        px-8
                        py-2
                        my-5
                        bg-green-500
                        hover:bg-green-700
                        rounded-lg
                        text-white
                        font-bold
                    "
            onClick={() => switchMainView()}
        >
            キーワードを表示する
        </button>
    );
    return button;
};
const Switch = createButton();
export { Switch };
