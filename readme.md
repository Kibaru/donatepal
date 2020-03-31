SETUP
Download the zip file or git clone into your root forder like in my case I used wamp server under www folder.
Then in your cmd or git navigate to your root folder and then run 'composer install' then 'npm install'
Duplicate the '.eve.example' and rename it to '.env'. Used to store key value pairs needed in your project.
Then run 'php artisan key:generate' Used for data encryption.
Run 'php artisan jwt:secret'. Used to sign tokens. I used JWT for api authentication.
Set up a database of your choice in the .env file. In my case I used mysql.
Once database is set up run 'php artisan migrate'. creates tables in your db.
Now you can run 'php artisan serve'. This will start your project on port 8000 but you have to navigate to '/public', ie, http://127.0.0.1:8000/public, to access the donation form. Instead you can just use your a virtual host to avoid adding /public. In another window run 'npm run dev' or 'npm run watch'
Now we have to make some more configuration to be able to make our donation via the form. We need to add our live pesapal consumer key and consumer secret in our .env file.
We also need to update our mail keys in the .env file. In my case i used mailtrap for testing. If you don't have these credencials you can create an account here https://mailtrap.io/
Save your files and reload your project on your browser. Now make a donation.
For admin user, he can be able to login and see all the donations made. He can also able to change consumer key and secret on the 'config_key' panel. I generated the .admin user' using tinker as below. On your cmd run ...(one after the other).
    php artisan tinker
    $user = new App\User;
    $user->name = 'Admin'
    $user->email = 'Admin@test.com'
    $user->passord = bcrypt('Admin')
    $user->save()
    exit
Finally run run php artisan serve and in another window run 'npm run watch' now you can be able to login.

Enjoy!!






