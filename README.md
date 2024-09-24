# Zachary's Barcode Format

https://zachary-caudle.github.io/dnt

This formatting system follows this order

First Initial as a number (Z, 26)

Last Inintial as a number (C, 03)

Month (September, 09)

Day (24)

Year (2024, 24)

Hour (11)

Minute (20)

For example, if your name is John Smith, it's January 26th, 2017, at 5:14 PM, the text is: "10190126171714"

# URL Parameters

A URL parameter is a piece of text that can alter contents on a website. For these parameters, the first parameter MUST have a "?" before it, which lets the website know there's a parameter following.

The URL parameters are:

letters (The letters that go into the textbox) https://zachary-caudle.github.io/dnt?letters=

separator (What separates the letters from the rest of the string) https://zachary-caudle.github.io/dnt?separator=

prefix (Anything before the string) https://zachary-caudle.github.io/dnt?prefix=

suffix (Anything after the string) https://zachary-caudle.github.io/dnt?suffix=

To combine multiple parameters, add an "&" symbol followed by the parameter, for example if I want the letters to be ZC and the separator to be "@", the URL would look like:
https://zachary-caudle.github.io/dnt/?letters=zc&separator=@

This result gives me "2603@0924241130"
