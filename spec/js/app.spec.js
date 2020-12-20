describe('Have a way to count donuts.', () => {
    describe('Can add to donut count.', () => {
        let underTest;

        beforeEach(() => {
            underTest = new DonutMaker;
    });
        
        it('Should start with a donut count of 0.', () => {
            expect(underTest.donutCount).toBe(0);
        });
        it('Should add one donut to count when it records a click.', () => {
            underTest.addDonut();
            expect(underTest.donutCount).toBe(1);
        });
        it('Should have a click count of 2 when it records 2 clicks.', () => {
            underTest.addDonut();
            underTest.addDonut();
            expect(underTest.donutCount).toBe(2);
        });
        it('Should increase donut count by amount of autoClickers owned.', () => {
            underTest.autoClickerCount = 5;
            underTest.autoClickersAddDonut(); 
            expect(underTest.donutCount).toBe(5);
        })
        it('Each donutMultiplier should increase amount of donuts added to donut count by multiplying 1.2x after 1st donutMultiplier is purchased.', () => {
            underTest.donutMultiplierCount = 1;
            underTest.addDonut();
            expect(underTest.donutCount).toBe(1.2);
        });
        it('Each donutMultiplier should increase the value of each autoClicker by the donutMultiplierCount.', () => {
            underTest.donutMultiplierCount = 1;
            underTest.autoClickerCount = 2;
            underTest.autoClickersAddDonut();
            expect(underTest.donutCount).toBe(2.4);
        });
    });
});

describe('Have a way to buy autoClickers.', () => {
    describe('Can add to autoClicker count.', () => {
        let underTest

        beforeEach(() => {
            underTest = new DonutMaker;
            underTest.donutCount = 9999;
        });

        it('Should start with an autoClicker count of 0.', () => {
            expect(underTest.autoClickerCount).toBe(0);
        });
        it('Should add one autoClicker to count when it records a purchase.', () => {
            underTest.addAutoClicker();
            expect(underTest.autoClickerCount).toBe(1);
        });
        it('Should have a click count of 2 when it records 2 purchases.', () => {
            underTest.addAutoClicker();
            underTest.addAutoClicker();
            expect(underTest.autoClickerCount).toBe(2);
        });
    });
    describe('Test the price of an autoClicker.', () => {
        let underTest

        beforeEach(() => {
            underTest = new DonutMaker;
            underTest.donutCount = 9999;
        });
        it('Should remove donuts from donutCount when autoClicker is added.', () => {
            let initialCount = underTest.donutCount
            expect(underTest.donutCount).toBe(initialCount);
            underTest.addAutoClicker();
            expect(underTest.donutCount).toBe(initialCount - 100);
        });
        it('Should increase autoClickerPrice by 10% after each purchase of autoClicker.', () => {
            expect(underTest.autoClickerPrice).toBe(100);
            underTest.addAutoClicker();
            expect(underTest.autoClickerPrice).toBe(110);
            underTest.addAutoClicker();
            expect(underTest.autoClickerPrice).toBe(121);
        });
    });
});

describe('Have a way to buy donutMultipliers.', () => {
    describe('Can add to donutMultipliers count.', () => {
        let underTest

        beforeEach(() => {
            underTest = new DonutMaker;
            underTest.donutCount = 9999;
        });

        it('Should start with an donutMultiplier count of 0.', () => {
            expect(underTest.donutMultiplierCount).toBe(0);
        });
        it('Should add one donutMultiplier to count when it records a purchase.', () => {
            underTest.addDonutMultiplier();
            expect(underTest.donutMultiplierCount).toBe(1);
        });
        it('Should have a donutMultiplier count of 2 when it records 2 purchases.', () => {
            underTest.addDonutMultiplier();
            underTest.addDonutMultiplier();
            expect(underTest.donutMultiplierCount).toBe(2);
        });
    });
    describe('Test the price of an donutMultiplier.', () => {
        let underTest

        beforeEach(() => {
            underTest = new DonutMaker;
            underTest.donutCount = 9999;
        });
        it('Should remove donuts from donutCount when donutMultiplier is added.', () => {
            let initialCount = underTest.donutCount
            expect(underTest.donutCount).toBe(initialCount);
            underTest.addDonutMultiplier();
            expect(underTest.donutCount).toBe(initialCount - 10);
        });
        it('Should increase donutMultiplierPrice by 10% after each purchase of donutMultiplier.', () => {
            expect(underTest.donutMultiplierPrice).toBe(10);
            underTest.addDonutMultiplier();
            expect(underTest.donutMultiplierPrice).toBe(11);
            underTest.addDonutMultiplier();
            expect(underTest.donutMultiplierPrice).toBe(12);
        });
    });
});