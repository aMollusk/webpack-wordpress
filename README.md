# Wordpress webpack

Clone this repo in to the root directory of your wordpress installation.

## Get started on this and be hella rad

1. You'll need a server, a database, and PHP. [Install XAMPP to get started](https://www.apachefriends.org/index.html).
2. When it installs, open up the control panel and start Apache server and PHPMyAdmin/MaridaDB.
3. Your directory lives at `/Applications/XAMPP/htdocs/ANY_DIRECTORY_YOU_LIKE` - Mac only.
4. Unzip [Wordpress](https://wordpress.org/download/) in to that directory.
5. Clone this repo in to that direcotry.

It shoud look like:
~~~~
ANY_DIRECTORY_YOU_LIKE || wordpress
    THIS_REPO
    wp-admin
    wp-content
    wp-includes
    ... etc
~~~~

you can access at http://localhost/ANY_DIRECTORY_YOU_LIKE

`cd` in to this repo and:

Probs requires a `npm install -g webpack@2`

1. `npm install`.
2. Rename the `your_theme` directory.
3. Change the theme variable in the `webpack.config.js`.
4. Do a `npm start`.
5. Do things.

Basically chuck anything you need for your wordpress theme in the your_theme directory

Prod webpack files coming. Good development kit to get started though.

## Support for 

- Scss
- React
- ES stage 2