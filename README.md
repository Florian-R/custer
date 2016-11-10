# Scripts and configs for Jessie

## Minimal install of Debian
* [Netinstall iso][]
* [UNetbootin][] 


## Basic setup

Logged as root

```bash
apt-get install sudo git
adduser USER_NAME sudo
exit
```

## Fire!

```bash
cd ~
git clone https://github.com/Florian-R/custer.git
cd custer
./boot.sh
```

[Netinstall iso]: https://www.debian.org/CD/netinst/
[UNetbootin]: https://unetbootin.github.io/
