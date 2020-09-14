export default function makePriceView(p, hide$) {
    const str = hide$ ? '' : '$';
    const s = '' + p;
    const l = s.length;
    return s[l-1] === '0' ? s[l-2] === '0' ? str + p/100 + '.00' : str + p/100 + '0' : str + (p/100).toFixed(2);
}