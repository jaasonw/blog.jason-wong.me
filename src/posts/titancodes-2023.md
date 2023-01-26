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

Here are some of my solutions with explanations for my Titancodes 2023 submissions. Solutions may not be optimal.
Additonally, not all solutions involved writing an elegant code solution and were not included. For instance: on the the password generation problem, I used a password generator and for the web problems I used Postman.

<br>

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

# Networked/the abyss

I had heard some story about an abyss, that if you stare in, it stares back...

This one doesn't do that. It does expect you to echo what it said, though! And it wants it back fast!

You can find the abyss at `137.151.29.179:4000`
<br>

<details>
  <summary>Solution</summary>

Using `netcat` we can manually open a [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) connection to the address and port in order to get an idea of what the abyss wants from us.

```txt
➜  netcat 137.151.29.179 4000
I'm gonna send a character! Send it back! Fast!!!
t
t
Correct! Next?
cI
cI
Correct! Next?
SWf
SWf
Correct! Next?
gaAU
gaAU
Too slow!
```

Now I may type at a horrendously slow words per minute but I don't care who you are, you aren't gonna be able to type all this out in time.

Originally, I attempted this with the the [socket](https://docs.python.org/3/library/socket.html) included with Python but then Christos rolled up and recommended to use a library called [pwntools](https://github.com/Gallopsled/pwntools) which is most definitely not included with Python and is a pretty heavy library for something as simple as an echo server.

For the purposes of this tutorial(?) I went back and rewrote it using the socket library instead.

It's a fairly simple script but I've tried to annotate each line for those unfamiliar with socket programming

```py
import socket

conn = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
conn.connect(("137.151.29.179", 4000))

while True:
    # receive the first message
    data = conn.recv(4096)
    print(data.decode())
    # receive raw bytes from the server
    data = conn.recv(4096)
    data = data.decode()
    # decode the bytes to a string
    data = data.lstrip()
    # send the string back to the server
    conn.send(data.encode())
    print(data)
```

<br>

Open a TCP connection to the server

```py
conn = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
conn.connect(("137.151.29.179", 4000))
```

<br>

Read some data from the server, capped at 4096 bytes

```py
data = conn.recv(4096)
```

<br>

`recv()` reads data from the server as a raw binary string, we'll need to decode it to interpret these bytes as strings instead

```py
print(data.decode())
```

<br>

When we receive the string from the server, it includes a `\n` character at the beginning and end of the string. To extract the string we want to send back, we need to strip the leading and trailing whitespace. You can do this with `.lstrip()` and `.rstrip()` respectively. However, we also want to add a newline character back onto the end of the string to simulate our "enter" press when we send the string back, so to avoid redundancy, we'll only use `.lstrip()` for the leading whitespace.

```py
data = data.lstrip()
```

<br>

Similar to how the server sent us the string in the form of raw bytes, we'll need to return the string the same way, as raw binary, `.encode()` accomplishes this for us nicely.

```py
conn.send(data.encode())
```

<br>

Output

```txt
I'm gonna send a character! Send it back! Fast!!!
V

Correct! Next?
gu

Correct! Next?
Cvz

Correct! Next?
qnGc

[Output truncated because you get the point]

Correct! Next?
MRDVJfWXfZcPFIylKkSEFWStcVFkFQkPaukrDfEXgDXoeFflt

Correct! Next?
yaTjgGIDsghtdQKsQgvgGcaRSOnElKSmvWnCGMnqqHDnvTRNwM

Correct! Next?
flag{gu3ss_y0u_w3r3_f4st_3n0ugh}
```

</details>
<br>

# Linux Scavenger Hunt/the transmission

What is the name of the network interface for the IP address `(192.168.3.169)` you are attached to?
<br>

<details>
  <summary>Solution</summary>
  
  `ifconfig` returns information about all the network interfaces you are attached to
  
  ```txt
[wayson@titanv1 ~]$ ifconfig
enp4s0f0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.3.169  netmask 255.255.255.0  broadcast 192.168.3.255
        inet6 fe80::31c4:794b:f69b:80a6  prefixlen 64  scopeid 0x20<link>
        ether 0c:c4:7a:db:3f:a8  txqueuelen 1000  (Ethernet)
        RX packets 4558260  bytes 4495079048 (4.1 GiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 1257878  bytes 249638421 (238.0 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
        device memory 0xc7420000-c743ffff
  ```
</details>
<br>

# Linux Scavenger Hunt/the air filter

The `cc` command is a symbolic link to something. What is the full path of the executable of which it is a symbolic link to?
<br>

<details>
  <summary>Solution</summary>

Using the `which` command we can find the location of the `cc` command

```txt
[wayson@titanv1 ~]$ which cc
/usr/bin/cc
```

Let's `cd` into `/usr/bin` and see what `cc` is linked to

```txt
[wayson@titanv1 bin]$ ls -la
total 543896
dr-xr-xr-x.  3 root root       36864 Dec  9 16:09 .
drwxr-xr-x. 13 root root        4096 Jun  7  2018 ..
-rwxr-xr-x   1 root root       41488 Aug 19  2019 [
-rwxr-xr-x   1 root root      107848 Apr  1  2020 a2p
...
lrwxrwxrwx   1 root root           3 Sep 21  2020 cc -> gcc
```

From here we can use `which` again but this time we can use it to find the location of `gcc`

```txt
[wayson@titanv1 bin]$ which gcc
/usr/bin/gcc
```

</details>
<br>

# Linux Scavenger Hunt/the alternator

The user `cb1442` is `tail`ing a file on the same server. What is the name of this file?

(hint: finding the PID of the task may help)
<br>

<details>
  <summary>Solution</summary>
  
  Using the command `ps aux`, we can display a list of processes being ran by all users. From here we can filter down the results using `grep`. By piping the output into `grep` with the `|` operator we can search for only lines that contain a specific string or match a specific pattern. In this case we want to `grep` for `cb1442`

```txt
[wayson@titanv1 ~]$ ps aux | grep cb1442
wayson   16007  0.0  0.0 112812   972 pts/0    S+   13:52   0:00 grep --color=auto cb1442
cb1442   23111  0.0  0.0 108096   596 ?        S    Jan17   0:00 tail -f carparts.py
```

</details>
<br>

# Linux Scavenger Hunt/the catalytic converter

Somewhere super secret, there is a super secret file called supersecret.txt. The flag is inside
<br>

<details>
  <summary>Solution</summary>

To recursively search for files with a specific file name or pattern starting a specific folder we can use the command `find [starting location] -name [file]`. We have no idea where to start so our best bet is probably to search through everything starting from the root `find / -name 'supersecret.txt'`

```txt
[wayson@titanv1 ~]$ find / -name 'supersecret.txt'
find: ‘/boot/efi/EFI/centos’: Permission denied
find: ‘/boot/lost+found’: Permission denied
find: ‘/boot/grub2’: Permission denied
find: ‘/lost+found’: Permission denied
find: ‘/usr/share/polkit-1/rules.d’: Permission denied
find: ‘/usr/libexec/initscripts/legacy-actions/auditd’: Permission denied
find: ‘/run/firewalld’: Permission denied
find: ‘/run/chrony’: Permission denied
find: ‘/run/user/513605683’: Permission denied
find: ‘/run/user/414752222’: Permission denied
...
```

<br>

To suppress all these error messages we can use the `>` operator to redirect the output of the error output stream (`stderr`) to a file instead of the console output. In this case, a "file" we can redirect it to is `/dev/null`. This is basically a black hole in Unix systems that discards anything written to it, perfect for this case because we don't care about these error messages. The final command we use to achieve this is `find / -name 'supersecret.txt' 2>/dev/null`. The 2 in this case means the error stream.

```txt
[wayson@titanv1 ~]$ find / -name 'supersecret.txt' 2>/dev/null
/tmp/supersecret.txt
```

```txt
[wayson@titanv1 ~]$ cat /tmp/supersecret.txt
flag{okay_its_not_that_secret}
```

</details>
<br>
