import keywords from "./keywords";

/**
 * @method createMainParagraphs キーワード配列をもとに、段落群を作成する
 * @returns {JSX.Element[]} 作成した段落の配列
 */
const createMainParagraphs = () => {
    const paragraphs = keywords.map((text) => {
        const p = <p>{text}</p>;
        return p;
    });
    return paragraphs;
};

/**
 * @method createMainContent メインの要素を作成する
 * @returns {JSX.Element} 作成したメイン要素
 * @description 初期状態は非表示
 */
const createMainContent = () => {
    const paragraphs = createMainParagraphs();
    const main = (
        <main id="main" className="bg-white w-1/2 mx-auto py-5" hidden={true}>
            {paragraphs}
        </main>
    );
    return main;
};

const Main = createMainContent();

export { Main };
