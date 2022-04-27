/**
 * 
 * 
 * 
 * 
 * 2_token_a.js
============

   Deploying 'TestToken'
   ---------------------
   > transaction hash:    0xa3b8b953603c4807d68d053f757e29b6cac9c218f2db8f19a4bace3f15148f72
   > Blocks: 0            Seconds: 5
   > contract address:    0x1b107a69081621e5f216e7BC217A2F942dBA54E2
   > block number:        6917222
   > block timestamp:     1595913923
   > account:             0x440C03912f83F42FA90A443c4dB3A6B8e1e6FBb8
   > balance:             100.810715233
   > gas used:            981462 (0xef9d6)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.01962924 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 6917223)
   > confirmation number: 2 (block: 6917224)

   Deploying 'Reserve'
   -------------------
   > transaction hash:    0xfcdecc26117fb3b39952f497804bf7cfec083cabf0ae158a2d244679afbc1751
   > Blocks: 1            Seconds: 21
   > contract address:    0x5b9C6Fd4c736a0cFA918b91C2ED4aEfe55D4b1E6
   > block number:        6917226
   > block timestamp:     1595913983
   > account:             0x440C03912f83F42FA90A443c4dB3A6B8e1e6FBb8
   > balance:             100.774665673
   > gas used:            821016 (0xc8718)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.01642032 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 6917227)
   > confirmation number: 2 (block: 6917228)

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.03604956 ETH

_e = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
_a = '0xb2BBF8dF10eE63cDF9BaC60aA5cAdE3a34Fe8baC'
_ra = '0xD38aD6bf470ABc9df1736A03f96b9c42BfB5BB17'
_b = '0xe64f565276e14383163A026Ba391B7b6A23318A2'
_rb = '0xfbC645ce5A49C2a7D209D1e328D2907B060ba9f2'
_ex = '0xF53078c31AaCd953519b10b5390b7EdDd218795e'
a = await TestToken.at(_a)
b = await TestToken.at(_b)
ra = await Reserve.at(_ra)
rb = await Reserve.at(_rb)
ex = await Exchange.at(_ex)

 */