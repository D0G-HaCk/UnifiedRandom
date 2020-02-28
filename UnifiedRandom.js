
module.exports = class {
    constructor(seed){
        const MBIG = 0x7fff_ffff;
        const MSEED = 0x9a4_ec86;
        const MZ = 0;
        var inext = 0;
        var inextp = 0;
        var SeedArray = 0;
        if(!seed) seed = this.get_seed();
        this.Init(seed);
    }

        Init(Seed){
            if(!Seed) Seed = this.get_seed();
            this.SeedArray = new Array(0x38);
            var num2 = 0x9a4_ec86 - ((Seed == -2_147_483_648) ? 0x7fff_ffff : Math.abs(Seed));
            this.SeedArray[0x37] = num2;
            let num3 = 1;
            for (let i=1; i<0x37; i++)
            {
                let index = (0x15 * i) % 0x37;
                this.SeedArray[index] = num3;
                num3 = num2 - num3;
                if (num3 < 0)
                {
                    num3 += 0x7fff_ffff;
                }
                num2 = this.SeedArray[index];
            }
            let num6 = 1;
            while (num6 < 5)
            {
                let index = 1;
                while (true)
                {
                    if (index >= 0x38)
                    {
                        num6++;
                        break;
                    }
                    var numPtr1 = (this.SeedArray[index]);
                    numPtr1 -= this.SeedArray[1 + ((index + 30) % 0x37)];
                    if (this.SeedArray[index] < 0)
                    {
                        var numPtr2 = (this.SeedArray[index]);
                        numPtr2 += 0x7fff_ffff;
                    }
                    index++;
                }
            }
            this.inext = 0;
            this.inextp = 0x15;
            Seed = 1;
            return true;
        }

        get_seed(){
            var date = new Date()
            var ticks = ((date.getTime() * 10000) + 621355968000000000);
            var res = ticks^2;
            return res;
        }

        GetSampleForLargeRange(){
            let num = this.InternalSample();
            if ((this.InternalSample() % 2) == 0)
            {
                num = -num;
            }
            return ((num + 0x7fff_fffe) / 0x00_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_0000_ffff_fff0);
        }

        InternalSample(){
            let inext = this.inext;
            let inextp = this.inextp;
            if (++inext >= 0x38)
            {
                inext = 1;
            }
            if (++inextp >= 0x38)
            {
                inextp = 1;
            }
            let num = this.SeedArray[inext] - this.SeedArray[inextp];
            if (num == 0x7fff_ffff)
            {
                num--;
            }
            if (num < 0)
            {
                num += 0x7fff_ffff;
            }
            this.SeedArray[inext] = num;
            this.inext = inext;
            this.inextp = inextp;
            return num;
        }

        GetChance(chance) {
            chance = Number(chance);
            if(!chance && chance !== 0) return NaN;
            if(chance < 0 || chance > 100) return NaN;

            var ch = Math.round(100 / chance);
            var res = (Math.floor(this.Next(ch)) == 0);
            return res;
        }

        Next(maxValue)
        {
            if (maxValue < 0)
            {
                return NaN;
            }
            return (this.Sample() * maxValue);
        }

        NextMin(minValue, maxValue)
        {
            if (minValue > maxValue)
            {
                return NaN;
            }
            let num = maxValue - minValue;
            return ((num > 0x7fff_ffff) ? ((((this.GetSampleForLargeRange() * num))) + minValue) : (((this.Sample() * num)) + minValue));
        }

        Sum(arr) {
          var result = 0;

          for (var i = 0; i < arr.length; i++) {
            result += arr[i];
          }

          return result;
        }

        Roullete(elements, weights)
        {
            var local = null;
            let needExit = false;
            let totalWeight = this.Sum(weights);

            var num = this.NextDouble() * totalWeight;
            while (true) {
                if(needExit == true) break;
                for(let i=0; i<weights.length; i++) {
                    if (num > weights[i])
                    {
                        num -= weights[i];
                        continue;
                    }
                    local = elements[i];
                    needExit = true;
                    break;
                }
            }
            return local;
        }

        SelectRandom(choices) {
            return choices[Math.floor(this.Next(choices.length))];
        }

        NextBytes(buffer)
        {
            if (buffer == null)
            {
                return null;
            }
            for (let i = 0; i < buffer.length; i++)
            {
                buffer[i] = (this.InternalSample() % 0x100);
            }
            return true;
        }

        NextDouble() { 
            return this.Sample();
        }

        Sample() { 
            return (this.InternalSample() * 4.6566128752457969E-10);
        }
}
