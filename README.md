This is a demo of MQ in a container, in a kubernetes cluster, with separate producer/consumer microservice pods, and a front-end that tags, sends and receives messages.

REQUIREMENTS

1. have minikube installed and on your PATH (to check, run `minikube version`)
2. have kubectl installed and on your PATH (to check, run `kubectl version`)
3. have npm installed (to check, run `npm -v`)

INSTRUCTIONS

1. clone this repository to your machine
2. in your terminal, change your working directory to be the root of this repo (mvp-3-13/)
3. run `./start-everything.sh` in your terminal
4. to shutdown, ^C out of npm, then `minikube delete` to destroy the cluster

OPTIONAL

5. to log into the MQ dashboard, username: `admin` password: `passw0rd`

NOTES

- it may take a minute for the MQ manager to spin up so just reload the dashboard page until it does
- if your minikube times out on creating VMs, disable your VPN and run the start-everything script again