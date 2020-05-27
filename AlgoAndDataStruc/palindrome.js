function palindrome(str) {
  return (
    str.toLowerCase().replace(/[\W_]/g, "") ===
    str.replace(/[\W_]/g, "").toLowerCase().split("").reverse().join("")
  );
}
palindrome("eye");
// The above function returns true for palindrome and false for not palindrome
// Function takes a string, converts to lower case, replaces/removes all non alphanumerical character w
// compares it with reversed string, . split().reverse.join is used to reverse the string
