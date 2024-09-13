function fibonacci(n)
	let a = 0, b = 1, c, i;
    if( n == 1)
        return a;
	else if (n==2)
		return b;

    for(i = 3; i <= n; i++)
    {
	    c = a + b;
	    a = b;
	    b = c;
    }
    return b;
}

module.exports = fibonacci;
