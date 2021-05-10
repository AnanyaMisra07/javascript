function difference(ar1, ar2) {

    var a1 = flatten(ar1, true);
    var a2 = flatten(ar2, true);

    var p = [],
        diff = [];
    for (var i = 0; i < a1.length; i++)
        p[a1[i]] = false;
    for (i = 0; i < a2.length; i++)
        if (p[a2[i]] === true) { delete p[a2[i]]; } else p[a2[i]] = true;
    for (var k in p)
        diff.push(k);
    return diff;
}

var flatten = function(p, shallow, r) {
    if (!r) { r = []; }
    if (shallow) {
        return r.concat.apply(r, p);
    }
    for (i = 0; i < p.length; i++) {
        if (p[i].constructor == Array) {
            flatten(p[i], shallow, r);
        } else {
            r.push(p[i]);
        }
    }
    return r;
};
console.log(difference([1, 2, 3], [100, 2, 1, 10]));