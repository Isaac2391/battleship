const { Ship } = require('../src/Ship');

test("Ships record the correct amount of hits", ()=>{

    const TestShip = new Ship(3);

    TestShip.hit();
    expect(TestShip.numberOfHits).toBe(1);
    TestShip.hit();
    TestShip.hit();
    expect(TestShip.numberOfHits).toBe(3);

})

test("Ships are sunk when hit for their length amount", ()=>{

    const TestShip = new Ship(3);

    TestShip.hit();
    TestShip.hit();
    TestShip.isSunk()
    expect(TestShip.sunkStatus).toBe(false)

    TestShip.hit();
    TestShip.isSunk()
    expect(TestShip.sunkStatus).toBe(true)

})