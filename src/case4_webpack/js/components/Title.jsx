/**
 * @method createTitle タイトルテキストを作成する
 * @returns {JSX.Element} 作成したテキストヘッダー要素
 */
const createTitle = () => {
    const h1 = <h1 className="text-4xl py-5">React勉強会</h1>;
    return h1;
};

const Title = createTitle();

export { Title };
