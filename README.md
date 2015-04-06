## Getting started

### Install requirements

* Git (GitHub client preferred)
* [Vagrant (v1.4.3 or higher)](http://www.vagrantup.com/downloads.html)
* [VirtualBox](https://www.virtualbox.org/wiki/Downloads)

### Quick Start

Clone the repository:

```shell
$ git clone https://github.com/honglio/FangCheng.git
```

Start the Vagrant virtual machine:

```shell
$ vagrant up
```

SSH into the Vagrant virtual machine:

```shell
$ vagrant ssh
```

Start the application inside the vagrant machine:

```shell
$ make
```

Now you can open `http://localhost:8000` in your browser.
