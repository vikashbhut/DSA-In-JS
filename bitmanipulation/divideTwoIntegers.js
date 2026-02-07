const divideBrutForce = function (dividend, divisor) {
  let count = 0;
  let sum = 0;

  while (sum + divisor <= dividend) {
    count++;
    sum += divisor;
  }

  return count;
};

var divide = function (dividend, divisor) {
  let INT_MIN = -2147483648;
  let INT_MAX = 2147483647;

  if (dividend == INT_MIN && divisor == -1) return INT_MAX;

  if (dividend == divisor) return 1;

  let sign = true; //+ve
  let quotient = 0;

  if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
    sign = false; // -ve
  }

  // if (Math.abs(divisor) === 1) {
  //   quotient = Math.abs(dividend * divisor);
  //   if (sign && quotient == 1 << 31) {
  //     return INT_MAX;
  //   }
  //   if (!sign && quotient == 1 << 31) {
  //     return INT_MIN;
  //   }
  //   return sign ? quotient : -quotient;
  // }

  let n = Math.abs(dividend); // -x => - (-1) => 1 Always positive number
  let d = Math.abs(divisor);

  while (n >= d) {
    let count = 0;
    while (n >= d << (count + 1)) {
      count++;
    }
    quotient = quotient + (1 << count);
    n = n - (d << count);
  }

  if (quotient == 1 << 31 && !sign) {
    return INT_MIN;
  }
  if (quotient == 1 << 31 && sign) {
    return INT_MAX;
  }

  return sign ? quotient : -quotient;
};

/**
 * 
        if(dividend == divisor) return 1;
        
        bool sign = true;
        
        if(dividend < 0 && divisor > 0) sign = false;
        else if(dividend > 0 && divisor < 0) sign = false;

        long n = abs(dividend);
        long d = abs(divisor);

        long quotient = 0;

        while(n>=d){
            int cnt = 0;
            while(n>=(d<<cnt+1))cnt++;
            quotient+=1<<cnt;
            n -= (d<<cnt); 
        }

        if(quotient == (1<<31) & sign) return INT_MAX;

        if(quotient == (1<<31) & sign) return INT_MIN;

        return sign ? quotient : -quotient;
 */

const division = (dividend, divisor) => {
  if (dividend === divisor) return 1;

  let isPositive = true;

  let INT_MAX = Math.pow(2, 31) - 1;
  let INT_MIN = -Math.pow(2, 31);

  if (divisor === INT_MIN && divisor === -1) {
    return INT_MAX;
  }

  let n = Math.abs(dividend);
  let d = Math.abs(divisor);

  if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
    isPositive = false;
  }

  let result = 0;

  while (n >= d) {
    let deduction = d;
    let pow = 1;

    while (n >= deduction << 1) {
      deduction <<= 1;
      pow <<= 1;
    }

    n -= deduction;
    result += pow;
  }

  return isPositive ? result : -result;
};
