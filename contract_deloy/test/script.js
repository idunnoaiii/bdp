_e = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
_a = '0x6065F5EAfB6202f81D56403e2dd52C81e8C4a400'
_ra = '0x2e33F5004a47fAc152131EDB8Abf1a4e53C5dE72'
_b = '0x53C0b63b424Abf7e6BFB68B5Da8ed88db651Ade4'
_rb = '0xaF364ffE9f3aa82229Fd54491938354d6E8D5361'
_ex = '0xc6b7357a4b055Fa3EBb9615C9b3175cF9eBf6A91'
a = await TestToken.at(_a)
b = await TestToken.at(_b)
ra = await Reserve.at(_ra)
rb = await Reserve.at(_rb)
ex = await Exchange.at(_ex)

// transfer token to reserve to hold
// then set exchange rate
await a.transfer(ra.address, String(10n ** 24n));
await ra.setExchangeRates(String(5 * 10 ** 17), String(2 * 10 ** 18));

await b.transfer(rb.address, String(10n ** 24n));
await rb.setExchangeRates(String(4 * 10 ** 18), String(25 * 10 ** 16));

// add reserve to exchagne
await ex.addReserve(ra.address, a.address, true);
await ex.addReserve(rb.address, b.address, true);