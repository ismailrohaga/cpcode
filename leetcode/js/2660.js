/**
 *
#Intuition
Key to understand this problem i think is to notice that each array player1 and player has the same length, and when the i-th attempt hit all 10 pin, then for the next two attempt after that to multiply the score by 2

#Approach
you can just read my code, but here i try to use 1 array that traverse 2 array at the same time since it has the same length

then for each array, i store the current value using x or y

then for each current value i simply check whether it's 10 or not, to assign mx and my to 2

both mx and my simply is just a "quota" for whenever the player hit a 10, they'd receive 2

then just add the logic whenever mx or my is ? > 0 then to multiply by 2 and dont forget to reduce mx or my. else is just add regularly. and this step goes first than the checking of whether it's 10 or not.
 *
 */

/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function (player1, player2) {
  let p1score = 0;
  let p2score = 0;

  let mx = 0;
  let my = 0;

  for (let i = 0; i < player1.length; i++) {
    const x = player1[i];
    const y = player2[i];

    // apply multiplier
    if (mx > 0) {
      p1score = p1score + x * 2;
      mx--;
    } else {
      p1score += x;
    }

    if (my > 0) {
      p2score = p2score + y * 2;
      my--;
    } else {
      p2score += y;
    }

    // check whether its 10 pin
    if (x == 10) {
      mx = 2;
    }

    if (y == 10) {
      my = 2;
    }
  }

  return p1score > p2score ? 1 : p2score > p1score ? 2 : 0;
};

console.log(isWinner([1, 1, 1, 10, 10, 10, 10], [10, 10, 10, 10, 1, 1, 1]));
