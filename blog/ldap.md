## LDAP

### Why need it

Account management is a big problem for our studio, because all the services have their own account system, 
GitLab, Wiki, Kanban. And if we want to build something for our own, we have to write the user register, login,
lost password. So having a kind of SSO ( Single Sign On ) service has become a strong demand. 

### What we got & What we need

We have

- Linux servers in many different locations, inside sjtu firewall, inside gfw, digital ocean, a bunch of old but still working VPS,
Aws
- GitLab for version control
- WeCenter as a Wiki ( It's more like Quora )
- Kanban for project management
- Some internal projects

We need

- one account for all the services, including server management, adding ssh-key is a pain when you have a lot of host provider,
some does not support API, some have email that never reach your inbox.
- a account service that is secure and robust. 

So the possible solutions are

- ~~invent own wheel~~ 
- use external services
- self-hosted open source solution