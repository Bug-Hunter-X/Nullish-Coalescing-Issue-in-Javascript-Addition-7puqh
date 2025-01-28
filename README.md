# Javascript Nullish Coalescing Issue
This code demonstrates an unexpected behavior in Javascript when performing addition with null values.  The function `foo` is designed to add two numbers; however, if either input is null, it returns null rather than performing the addition with the non-null value. This is because the strict equality check `===` is used, which distinguishes between `null` and `0`.

The solution addresses this by employing the nullish coalescing operator (`??`) to handle null values gracefully.