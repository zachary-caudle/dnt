# Zachary's Barcode Format

A simple formatting system that converts input into a unique barcode string.

## Format

**The format consists of the following elements, in order:**


First initial as a number (A=01, B=02, ..., Z=26)

Last initial as a number (A=01, B=02, ..., Z=26)

Month (01-12)

Day (01-31)

Year (last two digits)

Hour (00-23)

Minute (00-59)

Example: John Smith, January 26th, 2017, 5:14 PM -> 10190126171714

# URL Parameters

**Customize the output using the following URL parameters:**


letters: Set the input letters (e.g., ?letters=zc)

separator: Add a separator between the letters and the rest of the string (e.g., ?separator=@)

prefix: Add a prefix to the output string (e.g., ?prefix=ABC)

suffix: Add a suffix to the output string (e.g., ?suffix=123)

Combine multiple parameters using the & symbol (e.g., ?letters=zc&separator=@&prefix=ABC)

Example: https://zachary-caudle.github.io/dnt/?letters=zc&separator=@ -> 2603@0924241130

Note: The first parameter must be preceded by a ? symbol, and subsequent parameters must be separated by & symbols.
