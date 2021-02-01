
import { a } from "sampleChild";

/**
 * 
 * @param {number} counts 
 */
const b = (counts) => {
    const arr = new Array(counts);
    return arr.fill("v");
}

a(a(a("a")));
const v200 = b(100).map(string => {
    return string + string;
});
document.getElementById("idid").innerText = v200 ?? "";