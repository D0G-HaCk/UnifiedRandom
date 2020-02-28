# UnifiedRandom
The randomness generator code was taken from Terraria and ported to JavaScript.
# Using:

# Get Starting
Before install use the module:

	var rand = require('UnifiedRandom');
	var random = new rand([seed]);

In the Seed value, specify an arbitrary integer (optional, if not specified, it is generated randomly).

# random.Sample()
Generates a number from 0 to 1. (Including 0, but not including 1).

	var rand = require('UnifiedRandom');
	var random = new rand();
	random.Sample(); // 0.6943192652865868
	
# random.SelectRandom(list)
Selects a random item from the list.

	var rand = require('UnifiedRandom');
	var random = new rand();
	random.SelectRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 9

# random.Roullete(elements, weights)
Selects an element from the array by priority.

	var rand = require('UnifiedRandom');
	var random = new rand();
	random.Roullete([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 5
	
# random.Next(maxValue)
Generates a random number from 0 to the value "maxValue" [0;maxValue[.

	var rand = require('UnifiedRandom');
	var random = new rand();
	random.Next(10); // 6.032635926284192

# random.NextMin(minValue, maxValue)
Generates a random number from minValue to maxValue [minValue;maxValue[.

	var rand = require('UnifiedRandom');
	var random = new rand();
	random.NextMin(10, 100); // 80.22016046113342

# random.Sum(arr)
Displays the sum of the addition of all the numbers in the array.

	var rand = require('UnifiedRandom');
	var random = new rand();
	random.Sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // 55
	
# random.GetSampleForLargeRange()
Generates a number from 0 to 1. (High res)

	var rand = require('UnifiedRandom');
	var random = new rand();
	random.GetSampleForLargeRange(); // 0.5895254980848189
	
# random.GetChance(probability)
Generates a Boolean value based on the specified chance.

	var rand = require('UnifiedRandom');
	var random = new rand();
	random.GetChance(50); // false
	
# random.InternalSample()
Generates a big value.

	var rand = require('UnifiedRandom');
	var random = new rand();
	random.InternalSample(); // 801026551
	
# random.Init([seed])
Resets the random seed. (if not specified, it is generated randomly).

	var rand = require('UnifiedRandom');
	var random = new rand();
	random.Init(Math.random() * 100); // true

# random.get_seed()
Generates the randomly seed.

	var rand = require('UnifiedRandom');
	var random = new rand();
	random.get_seed(); // -579571966
  
