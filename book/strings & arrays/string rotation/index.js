const isRotation = (s1, s2) => {
    if (s1.length !== s2.length || s1.length === 0) {
        return false;
    }

    const s1s1 = s1 + s1;

    return isSubstring(s1s1, s2);
};