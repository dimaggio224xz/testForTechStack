export default function makePrice(p) {
    const s = ''+p;
    const l = s.length;
    return s[l-1] === '0' ? s[l-2] === '0' ? '$' + p/100 + '.00' : '$' + p/100 + '0' : '$' + p/100;
}