---
layout: post.liquid
title: Titancodes 2023 solutions
date: 2023-01-23
---

<!-- # TEMPLATE

question
<br>

<details>
  <summary>Solution</summary>
</details>
<br> -->

Here are some of my solutions with explanations for my Titancodes 2023 submissions. Not all solutions involved writing an elegant code solution and were not included. For instance: on the the password generation problem, I used a password generator and for the web problems I used Postman.

# Validation/dmv.ca.gov

It's my first day at my new job at the DMV, and my boss is having me look through a list of license plates to see which are valid in our state and which aren't. Can you help me out?

I know the format for license plates in California is 1 digit followed by 3 uppercase letters followed by 3 more digits. For example, 1ABC234 is valid, whereas ABC1234 isn't. The list has 600 license plates, which is way too many for me to go through by hand! Some of these aren't even 7 characters, so they're definitely not right...

Can you look through all of them, and for each one, put a `T` if it's valid, and an `F` if it isn't? For example, if the list had 5 plates where the first 3 are valid and the last 2 aren't, you could tell me `TTTFF`. Thanks a ton!
<br>

<details>
  <summary>Solution</summary>

The solution I came up with this one was to use some scuffed regex pattern matching. The regex for this is as follows
`^\d[A-Z][A-Z][A-Z]\d\d\d`
<br>
Breaking it down piece by piece we have:

- `^`: Start at the front of the string
- `\d`: Check if the first character is any digit
- `[A-Z]` (3 times because I didn't know you could just do {3}): Check if the next 3 characters are uppercase letters
- `\d`: Check if the next 3 characters are digits

```py
import re

with open("plates.txt", "r") as f:
    lines = f.read().splitlines()

pattern = re.compile("^\d[A-Z][A-Z][A-Z]\d\d\d")
for line in lines:
    print("T" if pattern.match(line) and len(line) == 7 else "F", end="")
```

</details>
<br>

# Parsing/czeched in

How much total time did employee 9 and employee 4 spend checking in? Add up their total clearance time and submit it for marking. Give an answer in seconds. The number will not contain any decimal places if done correctly
<br>

<details>
  <summary>Solution</summary>
I went about this one by importing the dataset into Pandas and then fucking around and finding out

```python
import pandas as pd

df = pd.read_csv("checkincheckout.csv")
df

```

  <div>
  <style scoped>
      .dataframe tbody tr th:only-of-type {
          vertical-align: middle;
      }

      .dataframe tbody tr th {
          vertical-align: top;
      }

      .dataframe thead th {
          text-align: right;
      }

  </style>
  <table border="1" class="dataframe">
    <thead>
      <tr style="text-align: right;">
        <th></th>
        <th>Employee ID</th>
        <th>Building</th>
        <th>Check-in Time</th>
        <th>Check-out Time</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>0</th>
        <td>15</td>
        <td>106</td>
        <td>2023-01-18 15:42:31.943894</td>
        <td>2023-01-18 19:42:31.943894</td>
      </tr>
      <tr>
        <th>1</th>
        <td>15</td>
        <td>111</td>
        <td>2023-01-18 20:56:31.943894</td>
        <td>2023-01-19 00:56:31.943894</td>
      </tr>
      <tr>
        <th>2</th>
        <td>11</td>
        <td>112</td>
        <td>2023-01-20 05:20:31.943523</td>
        <td>2023-01-20 11:20:31.943523</td>
      </tr>
      <tr>
        <th>3</th>
        <td>14</td>
        <td>113</td>
        <td>2023-01-22 03:12:31.943814</td>
        <td>2023-01-22 04:12:31.943814</td>
      </tr>
      <tr>
        <th>4</th>
        <td>9</td>
        <td>102</td>
        <td>2023-01-23 17:16:31.943325</td>
        <td>2023-01-23 21:16:31.943325</td>
      </tr>
      <tr>
        <th>...</th>
        <td>...</td>
        <td>...</td>
        <td>...</td>
        <td>...</td>
      </tr>
      <tr>
        <th>629</th>
        <td>7</td>
        <td>106</td>
        <td>2023-01-24 00:39:31.943124</td>
        <td>2023-01-24 08:39:31.943124</td>
      </tr>
      <tr>
        <th>630</th>
        <td>9</td>
        <td>106</td>
        <td>2023-01-24 04:43:31.943325</td>
        <td>2023-01-24 09:43:31.943325</td>
      </tr>
      <tr>
        <th>631</th>
        <td>9</td>
        <td>106</td>
        <td>2023-01-21 20:56:31.943325</td>
        <td>2023-01-21 23:56:31.943325</td>
      </tr>
      <tr>
        <th>632</th>
        <td>8</td>
        <td>113</td>
        <td>2023-01-20 14:43:31.943224</td>
        <td>2023-01-20 20:43:31.943224</td>
      </tr>
      <tr>
        <th>633</th>
        <td>8</td>
        <td>100</td>
        <td>2023-01-19 03:44:31.943224</td>
        <td>2023-01-19 04:44:31.943224</td>
      </tr>
    </tbody>
  </table>
  <p>634 rows × 4 columns</p>
  </div>

Convert the timestamps in "Check-in Time" and "Check-out Time" to Unix timestamps (Defined as seconds since 00:00:00 UTC on 1 January 1970) as to make it easy to subtract the difference between them

```python
import datetime

df["Check-in Time"] = df["Check-in Time"].apply(
    lambda x: datetime.datetime.strptime(x, "%Y-%m-%d %H:%M:%S.%f").timestamp()
)
df["Check-out Time"] = df["Check-out Time"].apply(
    lambda x: datetime.datetime.strptime(x, "%Y-%m-%d %H:%M:%S.%f").timestamp()
)
```

Create a new column containing the delta of both timestamps, this represents the number of seconds spent checked in

```python
df["delta"] = df["Check-out Time"] - df["Check-in Time"]
df
```

  <div>
  <style scoped>
      .dataframe tbody tr th:only-of-type {
          vertical-align: middle;
      }

      .dataframe tbody tr th {
          vertical-align: top;
      }

      .dataframe thead th {
          text-align: right;
      }

  </style>
  <table border="1" class="dataframe">
    <thead>
      <tr style="text-align: right;">
        <th></th>
        <th>Employee ID</th>
        <th>Building</th>
        <th>Check-in Time</th>
        <th>Check-out Time</th>
        <th>delta</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>0</th>
        <td>15</td>
        <td>106</td>
        <td>1.674057e+09</td>
        <td>1.674071e+09</td>
        <td>14400.0</td>
      </tr>
      <tr>
        <th>1</th>
        <td>15</td>
        <td>111</td>
        <td>1.674075e+09</td>
        <td>1.674090e+09</td>
        <td>14400.0</td>
      </tr>
      <tr>
        <th>2</th>
        <td>11</td>
        <td>112</td>
        <td>1.674192e+09</td>
        <td>1.674214e+09</td>
        <td>21600.0</td>
      </tr>
      <tr>
        <th>3</th>
        <td>14</td>
        <td>113</td>
        <td>1.674357e+09</td>
        <td>1.674361e+09</td>
        <td>3600.0</td>
      </tr>
      <tr>
        <th>4</th>
        <td>9</td>
        <td>102</td>
        <td>1.674494e+09</td>
        <td>1.674509e+09</td>
        <td>14400.0</td>
      </tr>
      <tr>
        <th>...</th>
        <td>...</td>
        <td>...</td>
        <td>...</td>
        <td>...</td>
        <td>...</td>
      </tr>
      <tr>
        <th>629</th>
        <td>7</td>
        <td>106</td>
        <td>1.674521e+09</td>
        <td>1.674550e+09</td>
        <td>28800.0</td>
      </tr>
      <tr>
        <th>630</th>
        <td>9</td>
        <td>106</td>
        <td>1.674535e+09</td>
        <td>1.674553e+09</td>
        <td>18000.0</td>
      </tr>
      <tr>
        <th>631</th>
        <td>9</td>
        <td>106</td>
        <td>1.674335e+09</td>
        <td>1.674345e+09</td>
        <td>10800.0</td>
      </tr>
      <tr>
        <th>632</th>
        <td>8</td>
        <td>113</td>
        <td>1.674226e+09</td>
        <td>1.674247e+09</td>
        <td>21600.0</td>
      </tr>
      <tr>
        <th>633</th>
        <td>8</td>
        <td>100</td>
        <td>1.674100e+09</td>
        <td>1.674103e+09</td>
        <td>3600.0</td>
      </tr>
    </tbody>
  </table>
  <p>634 rows × 5 columns</p>
  </div>

Filter out only the rows where Employee ID is 9 or 4

```python
df = df.query("`Employee ID` == 9 or `Employee ID` == 4")
```

Take the sum of the time all the time spent by the 2 employees

```python
sum(df["delta"])
```

```
1656000.0
```

</details>
<br>

# Stegonography/order

I have all these files, that each have a character in them! They're also named like numbers. I wonder what happens if I order the characters based on the number of the filename it's in.
<br>

<details>
  <summary>Solution</summary>

Theoretically this should just be a one liner in bash: `cat *` (cat prints the contents of a file and \* means all files in the directory) BUT the problem here lies in the fact that when ordered "alphabetically", "10" comes before "2" so simply running `cat *` prints the contents of the files in this order:

```
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 0.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 1.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 10.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 11.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 12.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 13.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 14.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 15.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 16.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 17.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 18.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 19.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 2.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 20.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 21.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 22.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 23.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 24.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 25.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 26.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 27.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 28.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 29.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 3.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 30.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 31.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 32.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 33.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 34.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 35.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 36.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 37.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 38.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 39.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 4.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 40.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 5.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 6.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 7.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 8.txt
-rwxrwxrwx 1 wayson wayson    1 Jan 18 20:11 9.txt
```

and yields something that's almost the correct answer but not the correct answer: `flbut_wh4t_1af_th3y_4r3gnt_0rd3r3d{}0k4y_`

To remedy this, I just went and manually renamed the 0-9.txt files to 00-09.txt because I cbf to figure out how to automatically do this in 1 command and reran the command to yield the correct flag: `flag{0k4y_but_wh4t_1f_th3y_4r3nt_0rd3r3d}`

</details>
<br>

# Stegonography/unordered

This is wild! These files have a character and a number in them! I wonder if the number in each file corresponds to the next file that has the next character of the original string! If it did, I would be able to start anywhere, and the string would eventually wrap around, right?
<br>

<details>
  <summary>Solution</summary>

To solve this one, pick any file as a starting point, this does not matter since the message will loop around, in my case I just used "0.txt". Open that file and read its contents. The first string is the letter, the second one is the filename of the next string, print out the letter and open the next file and repeat this 148 times.

```py
filename = "0.txt"
for i in range(149):
    with open(os.path.join(os.getcwd() + "/num", filename), 'r') as f:
        row = f.read().split(" ")
        content = row[0]
        filename = f"{row[1]}.txt"
        print(content, end="")
```

The resulting string should loop around, we know that the flag starts with "flag" so simply rearrange it as such to obtain the flag

```txt
3_y0u_d0nt_d0_th1s_by_h4nd_0r_1f_y0u_d0_1t_t4k3s_4_r3ally_re4lly_rea11y_r3411y_l0ng_t1me}flag{0k4y_but_wh4t_1f_1dk_wh4ts_n3xt_r4nd0m_t3xt_t0_m4k3_sur
```

```txt
flag{0k4y_but_wh4t_1f_1dk_wh4ts_n3xt_r4nd0m_t3xt_t0_m4k3_sur3_y0u_d0nt_d0_th1s_by_h4nd_0r_1f_y0u_d0_1t_t4k3s_4_r3ally_re4lly_rea11y_r3411y_l0ng_t1me}
```

</details>
<br>
