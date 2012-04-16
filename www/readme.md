@page index trend

## Limit ##
The page should be opened under a certain web server.
It is, do not treat it as static html.

## Intro ##
It's built under javascriptMVC, a client-side MVC framework which is integrated with jQuery.

## Tab Form ##
I use a core form controller/widget to generalize the procedure of building a form

0. Define a new model which will be used to stand for the data object in a form. Here is connection model.
1. Get Embedded Js files. Name it views/init.ejs.
2. Set up a new Model; transend it to the ejs.
3. In the ejs, the model will be bind at the form element it self.
  
## UI behavior ##
1. Any error handling is triggered by input change.
2. Any error recovery is triggered by input change, too. If you type anything wrong, the error message will be shown after the input itself.
3. Only when there's no error in the form, you can submit the data to the server.
4. The submission is $.fixture, a pseudo ajax request be deferred object.
5. The proccessing message is a global static controller.
6. After ajax callback, the result is slided down at the form top.
7. Whenever the result is sent, the past result will be cleared.
8. If enable is not checked, verify will pass anyway even if ip address format is invalid.
9. Saving success will cause a fixture to save it in cookie. Reload page and check the effect.
