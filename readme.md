## Star Index

Demo: http://starindex-pardis.rhcloud.com

# Introduction
The idea of this project is based on [star-index] (https://github.com/CSC-510/ResearchBounties/#bounties) which is proposed by [Dr. Christopher J Parnin] (http://chrisparnin.me/)
Based on his definition star-index is
> * **Star-Index**:  a metric called the `star-index`, which is like [h-index](https://en.wikipedia.org/wiki/H-index), but for stars on a developers's github repos.
You can access webservice which calculate star-index in [http://starindex-pardis.rhcloud.com/api/star-index/:username] (http://starindex-pardis.rhcloud.com/api/star-index/:username)
where you can put any github's username you wish instead of :username.
(for example you can calculate check my star-index at [http://starindex-pardis.rhcloud.com/api/star-index/A-Kamaee] (http://starindex-pardis.rhcloud.com/api/star-index/A-Kamaee) )

# Technology
This project developed based on Express.js, Node.js and npm.

# Install
First clone project with ```clone https://github.com/A-Kamaee/star-index.git``` then run ``` npm install ``` and then run project with ``` npm start ```.

# Configuration
There are three type of configuration in order to calculate star-index based on type of participation of user in projects.
 - owner: In this configuration only project which is owned by user consider for calculating star-index.
 e.g [http://starindex-pardis.rhcloud.com/api/star-index/chrisparnin?type=owner] (http://starindex-pardis.rhcloud.com/api/star-index/chrisparnin?type=owner)
 - member: In this configuration all project which is created by other users and current user participated in them consider for calculating star-index.
 e.g [http://starindex-pardis.rhcloud.com/api/star-index/chrisparnin?type=member] (http://starindex-pardis.rhcloud.com/api/star-index/chrisparnin?type=member)
 - all: This configuration contains two configurations which stated in above. In this configuration all project either they are created by current user or created by others and current user participated in them consider for culculating star-index.
 e.g [http://starindex-pardis.rhcloud.com/api/star-index/chrisparnin?type=all] (http://starindex-pardis.rhcloud.com/api/star-index/chrisparnin?type=all)

# Test
 You can run test with command  ``` npm test ```. The tests developed based on [Tape] (https://github.com/substack/tape)