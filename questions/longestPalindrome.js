//leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 1) return s;

  let longest = "";
  let start = 0;
  let end = 0;

  const isPalindrome = (str) => {
    // return str.split("").reverse().join("");
    if (str.length <= 1) {
      return true;
    } else if (str.length % 2 == 0) {
      return str.slice(0, str.length / 2) === palindrome(str.slice(str.length / 2));
    } else {
      return (
        str.slice(0, Math.floor(str.length / 2)) ===
        palindrome(str.slice(Math.ceil(str.length / 2)))
      );
    }
  };

  const memoize = (fn) => {
    const cache = new Map();
    return (...args) => {
      if (cache.has(args)) {
        console.log("cache hit");
        return cache.get(args);
      } else {
        console.log("cache miss");
        const result = fn(...args);
        cache.set(args, result);
        return result;
      }
    };
  };

  const palindrome = memoize((str) => {
    return str.split("").reverse().join("");
  });

  while (start < s.length && end < s.length) {
    let substr = s.slice(start, end + 1);
    //console.log("str, longest, start, end >>> ", substr, longest, start, end);

    if (isPalindrome(substr) && substr.length > longest.length) {
      //console.log("============>>> palindrome", substr);
      longest = substr;
    }

    //console.log("longest, start, end >>> ", longest, start, end);

    if (end >= s.length - 1) {
      start++;
      end = start + 1;
    } else {
      end++;
    }
  }

  return longest;
};

// console.log(longestPalindrome("babad"));
// console.log(longestPalindrome("cbbd"));
// console.log(longestPalindrome("a"));
// console.log(longestPalindrome("bb"));
console.log(longestPalindrome("ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy"));
