# Lab 8 - Starter
Tianze Guan

1. Within a Github action that runs whenever code is pushed 
   Reason: As stated in the intro part, the testing should happen on certain event, like, "Within a Github action that runs whenever code is pushed". So, we want to do unit testing when the code is oushed to github.
2. No, unit test should be better. E2E test are for the whole project. Whether a function returns a correct value should be a small part that can be test independently and before the whole project is done.
3. I will use unit test for either send or recieve function or even in a smaller sacle. The send and recieve function of message are related to each other, so end to end testing will be better.
4. Yes, this is a specific function and will not be affected by other functions.