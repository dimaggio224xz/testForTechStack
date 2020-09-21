export default function makePriceView(p) {
    if (p === 0 || isNaN(p)) {
        return '$0'
    }
    const s = '' + p;
    const l = s.length;
    return s[l-1] === '0' ? s[l-2] === '0' ? '$' + p/100 + '.00' : '$' + p/100 + '0' : '$' + (p/100).toFixed(2);
}