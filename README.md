# XenonStack-assignment

**Problem Statement:**

```
1. Design Minimum 3 Pages as per Theme of your choice.
2. Create a Login and Logout flow which will be connected with Database.
3. Create a Contact US Page. The form submission data should be connected to Database.
4. Created Pages should be responsive to basic devices of Desktop and Mobile.
5. Create a proper Readme of the project.
6. Host it on Github/ Heroku or any cloud service of your choice.
```

**Solution:**

I Choose the _"Car Selling"_ Theme of my project. So I will be creating a webpage for selling cars.


## Here is the link to webpage :
# https://idyllic-axolotl-b1d962.netlify.app/


**Project Title:** **CAR'S MARKET**

**Project Description:**


The webpage was being developed with the help of MERN stack:
- React for frontend
- Express, Nodejs for backend
- MongoDB for database (Mongo ATLAS)


 When you open the webpage you will get this:

![WhatsApp Image 2023-03-06 at 12 15 43 AM](https://user-images.githubusercontent.com/90772098/222979663-2af1030b-a951-472e-9e54-717422ec14ae.jpeg)


Then you have to choose one of these option:
- Register (First you'll have to register yourself to login to the webpage.) Wile registration if yo'll have any errors, first clear them and then register yourself.![WhatsApp Image 2023-03-06 at 12 16 26 AM](https://user-images.githubusercontent.com/90772098/222979809-db3409b4-18e0-427d-88d3-93815024e4f0.jpeg)

- Login (After register yourself, you can access the webpage for further information.)![WhatsApp Image 2023-03-06 at 12 17 35 AM](https://user-images.githubusercontent.com/90772098/222979836-ceccea50-38f5-4838-a042-703232e40218.jpeg)

- In case, you ever forget your password, "Forget Password" option is also given in the webpage. You just have to enter your email used for registration, then yo'll get mail with a link to change your password.![WhatsApp Image 2023-03-06 at 12 29 21 AM](https://user-images.githubusercontent.com/90772098/222980334-72a07e22-a2c7-43fe-99aa-46800744c532.jpeg)




After login, you'll see little bit about the cars which are in Queue for sale. There will be option of Contact US and Logout too.
![WhatsApp Image 2023-03-06 at 12 20 37 AM](https://user-images.githubusercontent.com/90772098/222980369-1cead658-c4bc-490f-940f-3e951a6c4442.jpeg)


If you choose "Contact US", a new page will be open in which, you will get the detailed form to fill for us to contact you. And if you click on logout, you'll get back to login page.![WhatsApp Image 2023-03-06 at 12 20 58 AM](https://user-images.githubusercontent.com/90772098/222980894-b748c8d3-fcbe-492a-bf10-0d584b063fb8.jpeg)


### Notes:
- Your password will be BCRYPT, so that your personal information will not be revealed to anyone (even not to me).![WhatsApp Image 2023-03-06 at 12 43 13 AM](https://user-images.githubusercontent.com/90772098/222980858-38e4fc56-c74b-41b0-8c65-ecf9eccc1173.jpeg)

- JWT tokens has been used for protecting your password as well. And because of JWT tokens, your page will be expired after one day.
- Password validation link will be valid for 2 minutes only.
- While using Contact US, use your registered email, otherwise there will be an error which won't allow you to submit your details.
