class DonutMaker {
    
    constructor() {
        this.donutCount = 0;
        this.clickValue = 1;
        this.autoClickerCount = 0;
        this.autoClickerPrice = 100;
        this.donutMultiplierCount = 0;
        this.donutMultiplierPrice = 10;
    }

    addDonut() {
            this.donutCount = this.donutCount + this.clickValue;
    }
   
    addAutoClicker() {
        if(this.donutCount >= 100) {
            this.autoClickerCount++;
            this.donutCount -= 100;
            this.autoClickerPrice =(this.autoClickerPrice * 0.10) + this.autoClickerPrice;
        } 
    }

    autoClickersAddDonut() {
        if(this.donutMultiplierCount >= 1) {
            this.donutCount = this.donutCount + (this.autoClickerCount * Math.pow(1.2, this.donutMultiplierCount));
        } else {
            this.donutCount = this.donutCount + this.autoClickerCount;
        } 
    }

    addDonutMultiplier() {
        if(this.donutCount >= 10) {
            this.donutMultiplierCount++;
            this.donutCount -= 10;
            this.donutMultiplierPrice = (this.donutMultiplierPrice * 0.10) + this.donutMultiplierPrice;
            this.clickValue = Math.pow(1.2, this.donutMultiplierCount);
        }
    }
}

export { DonutMaker }

