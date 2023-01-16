export const ucfirst = (str: string) => {
    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
};

// 首字母大写
export function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// 第一个词以及后面的词的首字母都大写，叫 ‘大驼峰拼写法’ （UpperCamelCase），又称为 “帕斯卡拼写法” （PascalCase）。比如：BlackColor
export function pascalCase(str: string) {
    return capitalize(camelCase(str));
}

// camelCased (小驼峰式)
/* 第一个词的首字母小写，以后每个词的首字母大写，叫做‘ 小驼峰拼写法’  lowerCamelCase，比如：blackColor ;
    camelCase('Come-ABb') -> comABb
    camelCase('come')->com;camelCase('come-ab')->'comeAb'
*/
export function camelCase(str: string) {
    str = str.charAt(0).toLowerCase() + str.slice(1);
    return str.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''));
}

// kebab-case (短横线隔开式) 转出来的都是小写
/* kebabCase('com')'com'
kebabCase('Com')'com'
kebabCase('ComUp')'com-up' */
export function kebabCase(key: string) {
    const result = key.replace(/([A-Z])/g, ' $1').trim();
    return result.split(' ').join('-').toLowerCase();
}
