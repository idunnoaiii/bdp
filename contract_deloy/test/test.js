const Exchange = artifacts.require('Exchange');
const Reserve = artifacts.require('Reserve');
const TestToken = artifacts.require('TestToken');

let exchange;
let ra;
let rb;
let a;
let b;

contract('Exchange Contract', (accounts) => {
  describe('Contructor', () => {
    it('Owner should be the first account', async ()=>{
      exchange = await Exchange.deployed();
      let owner = await exchange.owner.call();
      console.log(owner);
      console.log(exchange.address);
      assert(accounts[0] == owner);
    });
  });
});