This sample will help in handling promises on a streaming data. Post all data is streamed final callback will be called.

There are two ways we can solve this problem

1) One by Using Promise.All([array of promises]), on streamed data create a promise and push to an array
   Finally after everything is read, onEnd use promise.all on all promises at one shot
   
2) This approach is like, we will have access to the length of the data going to be streamed, use a simple counter and compare
   at each moment and when its the last invoke the final callback

To elaborate the differences, have added both approaches in the same file

To run, run server using node server.js

And then run node index.js
   
This can be extended for Async await too.

Note: For sample, have used a csv of 10 rows with 6 columns of data
